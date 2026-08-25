import { useState, useEffect, useMemo } from "react";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import KpiGrid from "./components/KpiGrid";
import { SignalChart, PnlChart, SkipReasonsChart, PositionsPanel } from "./components/Charts";
import TradesTable from "./components/TradesTable";
import ScansTable from "./components/ScansTable";
import PerformanceView from "./components/PerformanceView";
import { lastUpdate, trades, bots, type Bot } from "./data";
import "./App.css";

export type TabId = "overview" | "trades" | "scans" | "performance";

export default function App() {
  const [tab, setTab] = useState<TabId>("overview");
  const [clock, setClock] = useState(new Date());
  const [selectedBot, setSelectedBot] = useState<Bot>(bots[0]);

  useEffect(() => {
    const id = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const utcTime = useMemo(() => {
    return clock.toISOString().slice(11, 19) + "Z";
  }, [clock]);

  const closedTrades = trades.filter((t) => t.pnl !== null);
  const wins = closedTrades.filter((t) => t.pnl! > 0).length;
  const losses = closedTrades.filter((t) => t.pnl! < 0).length;
  const winRate = closedTrades.length > 0 ? ((wins / closedTrades.length) * 100).toFixed(1) : "0.0";

  return (
    <div className="app-shell">
      <Sidebar activeTab={tab} onTabChange={setTab} winRate={winRate} totalTrades={trades.length} selectedBot={selectedBot} />
      <div className="app-main">
        <TopBar utcTime={utcTime} selectedBot={selectedBot} onBotChange={setSelectedBot} />
        <main className="main">
          {tab === "overview" && (
            <>
              <KpiGrid />
              <section className="charts-row">
                <SignalChart />
                <PnlChart />
              </section>
              <section className="charts-row">
                <SkipReasonsChart />
                <PositionsPanel />
              </section>
            </>
          )}
          {tab === "trades" && <TradesTable />}
          {tab === "scans" && <ScansTable />}
          {tab === "performance" && <PerformanceView />}
        </main>
        <footer className="footer">
          <span className="footer-dot" />
          <span>last update {lastUpdate}</span>
          <span className="footer-sep">·</span>
          <span>auto-refresh every 5s</span>
        </footer>
      </div>
    </div>
  );
}
