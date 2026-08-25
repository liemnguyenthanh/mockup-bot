import { useState, useMemo } from "react";
import { scans, type Scan } from "../data";

function Tag({ type, children }: { type: string; children: React.ReactNode }) {
  return <span className={`tag tag-${type}`}>{children}</span>;
}

type ScanSortKey = "time" | "probUp" | "mom5m" | "mom30m";
type ScanSortDir = "asc" | "desc";

function SortHeader({ label, sortKey, activeSort, sortDir, onSort }: { label: string; sortKey: ScanSortKey; activeSort: ScanSortKey; sortDir: ScanSortDir; onSort: (k: ScanSortKey) => void }) {
  const active = activeSort === sortKey;
  return (
    <th className={`sortable ${active ? "sort-active" : ""}`} onClick={() => onSort(sortKey)}>
      <span className="th-content">
        {label}
        <span className="sort-arrow">{active ? (sortDir === "asc" ? "▲" : "▼") : "↕"}</span>
      </span>
    </th>
  );
}

export default function ScansTable() {
  const [decision, setDecision] = useState<"" | "TRADE" | "SKIP">("");
  const [sortKey, setSortKey] = useState<ScanSortKey>("time");
  const [sortDir, setSortDir] = useState<ScanSortDir>("desc");

  const handleSort = (key: ScanSortKey) => {
    if (key === sortKey) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const filtered = useMemo(() => {
    let result = decision ? scans.filter((s) => s.decision === decision) : scans;
    const sorted = [...result].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "time") cmp = a.time.localeCompare(b.time);
      else if (sortKey === "probUp") cmp = a.probUp - b.probUp;
      else if (sortKey === "mom5m") cmp = a.mom5m - b.mom5m;
      else if (sortKey === "mom30m") cmp = a.mom30m - b.mom30m;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return sorted;
  }, [decision, sortKey, sortDir]);

  return (
    <section className="table-card fade-in">
      <div className="card-head">
        <h2>Recent scans</h2>
        <div className="filter-group">
          <select className="select" value={decision} onChange={(e) => setDecision(e.target.value as "" | "TRADE" | "SKIP")}>
            <option value="">all</option>
            <option value="TRADE">TRADE</option>
            <option value="SKIP">SKIP</option>
          </select>
          <span className="muted">{filtered.length} scans</span>
        </div>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <SortHeader label="Time (UTC)" sortKey="time" activeSort={sortKey} sortDir={sortDir} onSort={handleSort} />
              <th>Mode</th>
              <th>Side</th>
              <th>Decision</th>
              <th>Reason</th>
              <SortHeader label="Prob(UP)" sortKey="probUp" activeSort={sortKey} sortDir={sortDir} onSort={handleSort} />
              <SortHeader label="Mom 5m" sortKey="mom5m" activeSort={sortKey} sortDir={sortDir} onSort={handleSort} />
              <SortHeader label="Mom 30m" sortKey="mom30m" activeSort={sortKey} sortDir={sortDir} onSort={handleSort} />
              <th>Regime</th>
              <th>Market</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s: Scan, i) => (
              <tr key={i}>
                <td className="mono">{s.time}</td>
                <td><Tag type="live">{s.mode}</Tag></td>
                <td className="muted">{s.side}</td>
                <td><Tag type={s.decision === "SKIP" ? "skip" : "trade"}>{s.decision}</Tag></td>
                <td className="reason">{s.reason}</td>
                <td className="num mono">{s.probUp.toFixed(2)}%</td>
                <td className={`num mono ${s.mom5m >= 0 ? "pos" : "neg"}`}>
                  {s.mom5m >= 0 ? "+" : ""}{s.mom5m.toFixed(2)}%
                </td>
                <td className={`num mono ${s.mom30m >= 0 ? "pos" : "neg"}`}>
                  {s.mom30m >= 0 ? "+" : ""}{s.mom30m.toFixed(2)}%
                </td>
                <td><Tag type="regime">{s.regime}</Tag></td>
                <td className="market-cell">{s.market}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
