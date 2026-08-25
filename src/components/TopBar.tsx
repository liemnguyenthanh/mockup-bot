import { health, subtitle } from "../data";
import BotSelector from "./BotSelector";
import type { Bot } from "../data";

interface TopBarProps {
  utcTime: string;
  selectedBot: Bot;
  onBotChange: (bot: Bot) => void;
}

export default function TopBar({ utcTime, selectedBot, onBotChange }: TopBarProps) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <BotSelector selectedBot={selectedBot} onSelect={onBotChange} />
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="topbar-right">
        <div className="clock-display">
          <span className="clock-label">UTC</span>
          <span className="clock-time">{utcTime}</span>
        </div>
        <div className={`health ${health.ok ? "health-ok" : "health-warn"}`}>
          <span className="health-dot" />
          <div className="health-info">
            <span className="health-label">{health.label}</span>
            <span className="health-sub">{health.sub}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
