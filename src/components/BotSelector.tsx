import { useState, useRef, useEffect } from "react";
import { bots, type Bot } from "../data";

interface BotSelectorProps {
  selectedBot: Bot;
  onSelect: (bot: Bot) => void;
}

export default function BotSelector({ selectedBot, onSelect }: BotSelectorProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bot-selector" ref={ref}>
      <button
        className="bot-selector-trigger"
        onClick={() => setOpen(!open)}
        style={{ borderLeftColor: selectedBot.color }}
      >
        <span className="bot-selector-dot" style={{ background: selectedBot.color }} />
        <span className="bot-selector-name">{selectedBot.name}</span>
        <svg
          className={`bot-selector-chevron ${open ? "open" : ""}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="bot-selector-menu fade-in">
          <div className="bot-selector-header">Select bot to track</div>
          {bots.map((bot) => (
            <button
              key={bot.id}
              className={`bot-selector-item ${bot.id === selectedBot.id ? "selected" : ""}`}
              onClick={() => {
                onSelect(bot);
                setOpen(false);
              }}
            >
              <span className="bot-selector-dot" style={{ background: bot.color }} />
              <div className="bot-selector-item-info">
                <span className="bot-selector-item-name">{bot.name}</span>
                <span className="bot-selector-item-path">{bot.path}</span>
              </div>
              {bot.id === selectedBot.id && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
