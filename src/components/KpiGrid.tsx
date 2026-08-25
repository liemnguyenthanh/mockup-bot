import { kpis } from "../data";

interface KpiCardProps {
  label: string;
  value: string;
  sub: string;
  variant?: "default" | "up" | "down" | "warn";
  delay: number;
}

function KpiCard({ label, value, sub, variant = "default", delay }: KpiCardProps) {
  return (
    <div
      className={`kpi-card kpi-${variant} fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-sub">{sub}</div>
    </div>
  );
}

export default function KpiGrid() {
  const pnlVariant = kpis.pnlToday < 0 ? "down" : "up";

  return (
    <section className="kpi-grid">
      <KpiCard
        label="Trades today"
        value={String(kpis.tradesToday)}
        sub={`limit ${kpis.tradesTodayLimit}`}
        delay={0}
      />
      <KpiCard
        label="Notional today"
        value={`$${kpis.notionalToday.toFixed(2)}`}
        sub={`cap $${kpis.notionalCap}`}
        delay={60}
      />
      <KpiCard
        label="Realized PnL today"
        value={`${kpis.pnlToday < 0 ? "" : "+"}$${kpis.pnlToday.toFixed(2)}`}
        sub="from state.json"
        variant={pnlVariant}
        delay={120}
      />
      <KpiCard
        label="Loss streak"
        value={String(kpis.lossStreak)}
        sub="no cooldown"
        delay={180}
      />
      <KpiCard
        label="Errors (24h)"
        value={String(kpis.errors24h)}
        sub={`last 1h: ${kpis.errorsLast1h}`}
        variant={kpis.errors24h > 0 ? "warn" : "default"}
        delay={240}
      />
      <KpiCard
        label="Open positions"
        value={String(kpis.openPositions)}
        sub={`max ${kpis.maxPositions}`}
        delay={300}
      />
    </section>
  );
}
