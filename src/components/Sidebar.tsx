import type { TabId } from "../App";
import type { Bot } from "../data";

interface SidebarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  winRate: string;
  totalTrades: number;
  selectedBot: Bot;
}

const navItems: { id: TabId; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "grid" },
  { id: "trades", label: "Trades", icon: "trades" },
  { id: "scans", label: "Scans", icon: "scans" },
  { id: "performance", label: "Performance", icon: "perf" },
];

function NavIcon({ name }: { name: string }) {
  const props = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "grid":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "trades":
      return (
        <svg {...props}>
          <path d="M3 17l6-6 4 4 7-7" />
          <path d="M14 8h6v6" />
        </svg>
      );
    case "scans":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      );
    case "perf":
      return (
        <svg {...props}>
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 4 4 5-5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Sidebar({ activeTab, onTabChange, winRate, totalTrades, selectedBot }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo" style={{ borderColor: selectedBot.color }}>
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <path d="M16 4 L26 10 L26 20 L16 26 L6 20 L6 10 Z" stroke={selectedBot.color} strokeWidth="2" fill="rgba(59,130,246,0.08)" />
            <circle cx="16" cy="15" r="3.5" fill={selectedBot.color} />
          </svg>
        </div>
        <div className="sidebar-brand-text">
          <span className="sidebar-title">{selectedBot.name}</span>
          <span className="sidebar-subtitle">Polymarket Bot</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => onTabChange(item.id)}
          >
            <NavIcon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <span className="sidebar-stat-label">Win Rate</span>
          <span className="sidebar-stat-value">{winRate}%</span>
        </div>
        <div className="sidebar-stat">
          <span className="sidebar-stat-label">Total Trades</span>
          <span className="sidebar-stat-value">{totalTrades}</span>
        </div>
      </div>

      <div className="sidebar-footer">
        <span className="sidebar-status-dot" />
        <span className="sidebar-status-text">Live · auto-refresh 5s</span>
      </div>
    </aside>
  );
}
