import { useState, useMemo } from "react";
import { trades, scans, type Trade, type Scan } from "../data";

function Tag({ type, children }: { type: string; children: React.ReactNode }) {
  return <span className={`tag tag-${type}`}>{children}</span>;
}

function formatPnl(pnl: number | null): string {
  if (pnl === null) return "—";
  return `${pnl < 0 ? "" : "+"}$${pnl.toFixed(2)}`;
}

type SortKey = "time" | "entry" | "edge" | "size" | "pnl";
type SortDir = "asc" | "desc";

function SortHeader({ label, sortKey, activeSort, sortDir, onSort }: { label: string; sortKey: SortKey; activeSort: SortKey; sortDir: SortDir; onSort: (k: SortKey) => void }) {
  const active = activeSort === sortKey;
  return (
    <th
      className={`sortable ${active ? "sort-active" : ""}`}
      onClick={() => onSort(sortKey)}
    >
      <span className="th-content">
        {label}
        <span className="sort-arrow">{active ? (sortDir === "asc" ? "▲" : "▼") : "↕"}</span>
      </span>
    </th>
  );
}

export default function TradesTable() {
  const [filter, setFilter] = useState<"all" | "win" | "loss" | "open">("all");
  const [sortKey, setSortKey] = useState<SortKey>("time");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const filtered = useMemo(() => {
    let result = trades;
    if (filter === "win") result = trades.filter((t) => t.pnl !== null && t.pnl > 0);
    else if (filter === "loss") result = trades.filter((t) => t.pnl !== null && t.pnl < 0);
    else if (filter === "open") result = trades.filter((t) => t.outcome === "open");

    const sorted = [...result].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "time") cmp = a.time.localeCompare(b.time);
      else if (sortKey === "entry") cmp = a.entry - b.entry;
      else if (sortKey === "edge") cmp = a.edge - b.edge;
      else if (sortKey === "size") cmp = a.size - b.size;
      else if (sortKey === "pnl") {
        const ap = a.pnl ?? -Infinity;
        const bp = b.pnl ?? -Infinity;
        cmp = ap - bp;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
    return sorted;
  }, [filter, sortKey, sortDir]);

  return (
    <section className="table-card fade-in">
      <div className="card-head">
        <h2>Recent trades</h2>
        <div className="filter-group">
          <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All</button>
          <button className={`filter-btn ${filter === "win" ? "active" : ""}`} onClick={() => setFilter("win")}>Wins</button>
          <button className={`filter-btn ${filter === "loss" ? "active" : ""}`} onClick={() => setFilter("loss")}>Losses</button>
          <button className={`filter-btn ${filter === "open" ? "active" : ""}`} onClick={() => setFilter("open")}>Open</button>
          <span className="muted">{filtered.length} trades</span>
        </div>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <SortHeader label="Time (UTC)" sortKey="time" activeSort={sortKey} sortDir={sortDir} onSort={handleSort} />
              <th>Mode</th>
              <th>Side</th>
              <SortHeader label="Entry" sortKey="entry" activeSort={sortKey} sortDir={sortDir} onSort={handleSort} />
              <SortHeader label="Edge" sortKey="edge" activeSort={sortKey} sortDir={sortDir} onSort={handleSort} />
              <SortHeader label="Size" sortKey="size" activeSort={sortKey} sortDir={sortDir} onSort={handleSort} />
              <th>Regime</th>
              <th>Outcome</th>
              <SortHeader label="PnL" sortKey="pnl" activeSort={sortKey} sortDir={sortDir} onSort={handleSort} />
            </tr>
          </thead>
          <tbody>
            {filtered.map((t: Trade, i) => (
              <tr key={i} className={t.pnl !== null && t.pnl > 0 ? "row-win" : t.pnl !== null && t.pnl < 0 ? "row-loss" : ""}>
                <td className="mono">{t.time}</td>
                <td><Tag type="live">{t.mode}</Tag></td>
                <td><Tag type={t.side === "UP" ? "up" : "down"}>{t.side}</Tag></td>
                <td className="num mono">${t.entry.toFixed(2)}</td>
                <td className="num mono pos">+{t.edge.toFixed(2)}%</td>
                <td className="num mono">${t.size.toFixed(2)}</td>
                <td><Tag type="regime">{t.regime}</Tag></td>
                <td>
                  {t.outcome === "open" ? (
                    <span className="tag tag-open">open</span>
                  ) : (
                    <Tag type={t.outcome === "UP" ? "up" : "down"}>{t.outcome}</Tag>
                  )}
                </td>
                <td className={`num mono ${t.pnl !== null && t.pnl > 0 ? "pos" : t.pnl !== null && t.pnl < 0 ? "neg" : "muted"}`}>
                  {formatPnl(t.pnl)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
