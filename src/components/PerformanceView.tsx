import { useMemo } from "react";
import { trades, skipReasons, skipTotal } from "../data";
import { PnlChart, SkipReasonsChart } from "./Charts";

function StatCard({ label, value, sub, variant }: { label: string; value: string; sub?: string; variant?: "up" | "down" | "warn" }) {
  return (
    <div className={`kpi-card kpi-${variant || "default"} fade-in`}>
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
      {sub && <div className="kpi-sub">{sub}</div>}
    </div>
  );
}

export default function PerformanceView() {
  const stats = useMemo(() => {
    const closed = trades.filter((t) => t.pnl !== null);
    const wins = closed.filter((t) => t.pnl! > 0);
    const losses = closed.filter((t) => t.pnl! < 0);
    const totalPnl = closed.reduce((sum, t) => sum + t.pnl!, 0);
    const avgWin = wins.length > 0 ? wins.reduce((s, t) => s + t.pnl!, 0) / wins.length : 0;
    const avgLoss = losses.length > 0 ? losses.reduce((s, t) => s + t.pnl!, 0) / losses.length : 0;
    const bestTrade = closed.length > 0 ? Math.max(...closed.map((t) => t.pnl!)) : 0;
    const worstTrade = closed.length > 0 ? Math.min(...closed.map((t) => t.pnl!)) : 0;
    const winRate = closed.length > 0 ? (wins.length / closed.length) * 100 : 0;
    const profitFactor = losses.length > 0
      ? Math.abs(wins.reduce((s, t) => s + t.pnl!, 0) / losses.reduce((s, t) => s + t.pnl!, 0))
      : Infinity;
    const avgEdge = trades.length > 0 ? trades.reduce((s, t) => s + t.edge, 0) / trades.length : 0;
    const upTrades = trades.filter((t) => t.side === "UP").length;
    const downTrades = trades.filter((t) => t.side === "DOWN").length;

    return {
      total: trades.length,
      closed: closed.length,
      wins: wins.length,
      losses: losses.length,
      winRate,
      totalPnl,
      avgWin,
      avgLoss,
      bestTrade,
      worstTrade,
      profitFactor,
      avgEdge,
      upTrades,
      downTrades,
    };
  }, []);

  return (
    <div className="performance-view">
      <section className="kpi-grid fade-in">
        <StatCard label="Total PnL" value={`${stats.totalPnl < 0 ? "" : "+"}$${stats.totalPnl.toFixed(2)}`} variant={stats.totalPnl >= 0 ? "up" : "down"} />
        <StatCard label="Win Rate" value={`${stats.winRate.toFixed(1)}%`} sub={`${stats.wins}W / ${stats.losses}L`} variant={stats.winRate >= 50 ? "up" : "down"} />
        <StatCard label="Profit Factor" value={stats.profitFactor === Infinity ? "∞" : stats.profitFactor.toFixed(2)} variant={stats.profitFactor >= 1 ? "up" : "down"} />
        <StatCard label="Avg Win" value={`+$${stats.avgWin.toFixed(2)}`} variant="up" />
        <StatCard label="Avg Loss" value={`$${stats.avgLoss.toFixed(2)}`} variant="down" />
        <StatCard label="Best Trade" value={`+$${stats.bestTrade.toFixed(2)}`} variant="up" />
        <StatCard label="Worst Trade" value={`$${stats.worstTrade.toFixed(2)}`} variant="down" />
        <StatCard label="Avg Edge" value={`+${stats.avgEdge.toFixed(2)}%`} />
        <StatCard label="Total Trades" value={String(stats.total)} sub={`${stats.closed} closed`} />
        <StatCard label="UP Trades" value={String(stats.upTrades)} />
        <StatCard label="DOWN Trades" value={String(stats.downTrades)} />
        <StatCard label="Skip Rate" value={`${((skipTotal / (skipTotal + stats.total)) * 100).toFixed(1)}%`} sub={`${skipTotal.toLocaleString()} skips`} variant="warn" />
      </section>

      <section className="charts-row">
        <PnlChart />
        <SkipReasonsChart />
      </section>

      <section className="chart-card fade-in">
        <div className="card-head">
          <h2>Trade Distribution</h2>
        </div>
        <div className="dist-grid">
          <div className="dist-item">
            <div className="dist-bar-wrap">
              <div className="dist-bar dist-bar-up" style={{ width: `${(stats.wins / Math.max(stats.closed, 1)) * 100}%` }} />
            </div>
            <span className="dist-label">Wins</span>
            <span className="dist-value pos">{stats.wins}</span>
          </div>
          <div className="dist-item">
            <div className="dist-bar-wrap">
              <div className="dist-bar dist-bar-down" style={{ width: `${(stats.losses / Math.max(stats.closed, 1)) * 100}%` }} />
            </div>
            <span className="dist-label">Losses</span>
            <span className="dist-value neg">{stats.losses}</span>
          </div>
          <div className="dist-item">
            <div className="dist-bar-wrap">
              <div className="dist-bar dist-bar-up" style={{ width: `${(stats.upTrades / Math.max(stats.total, 1)) * 100}%` }} />
            </div>
            <span className="dist-label">UP side</span>
            <span className="dist-value">{stats.upTrades}</span>
          </div>
          <div className="dist-item">
            <div className="dist-bar-wrap">
              <div className="dist-bar dist-bar-down" style={{ width: `${(stats.downTrades / Math.max(stats.total, 1)) * 100}%` }} />
            </div>
            <span className="dist-label">DOWN side</span>
            <span className="dist-value">{stats.downTrades}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
