import { useMemo, useState } from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { signalChartData, pnlChartData, skipReasons, skipTotal } from "../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend
);

const chartTextColor = "#9aa8bd";
const chartGridColor = "rgba(35, 47, 66, 0.5)";

function Card({
  title,
  children,
  controls,
}: {
  title: string;
  children: React.ReactNode;
  controls?: React.ReactNode;
}) {
  return (
    <div className="chart-card fade-in">
      <div className="card-head">
        <h2>{title}</h2>
        {controls}
      </div>
      <div className="chart-wrap">{children}</div>
    </div>
  );
}

export function SignalChart() {
  const [window, setWindow] = useState(360);

  const data = useMemo(() => {
    const len = Math.min(window, signalChartData.labels.length);
    const labels = signalChartData.labels.slice(0, len);
    return {
      labels,
      datasets: [
        {
          label: "P(UP) %",
          data: signalChartData.probUp.slice(0, len),
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.08)",
          fill: true,
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 4,
          yAxisID: "y",
        },
        {
          label: "Momentum",
          data: signalChartData.momentum.slice(0, len),
          borderColor: "#06b6d4",
          backgroundColor: "transparent",
          tension: 0.35,
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 4,
          yAxisID: "y1",
        },
      ],
    };
  }, [window]);

  const options: ChartOptions<"line"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: {
          labels: { color: chartTextColor, font: { size: 11 }, boxWidth: 12, boxHeight: 12 },
        },
        tooltip: {
          backgroundColor: "#111824",
          borderColor: "#2a3a52",
          borderWidth: 1,
          titleColor: "#e8eef5",
          bodyColor: "#9aa8bd",
          padding: 10,
          cornerRadius: 8,
        },
      },
      scales: {
        x: {
          grid: { color: chartGridColor },
          ticks: { color: chartTextColor, font: { size: 10 }, maxTicksLimit: 8 },
        },
        y: {
          position: "left",
          grid: { color: chartGridColor },
          ticks: { color: chartTextColor, font: { size: 10 }, callback: (v) => `${v}%` },
          min: 0,
          max: 100,
        },
        y1: {
          position: "right",
          grid: { drawOnChartArea: false },
          ticks: { color: chartTextColor, font: { size: 10 } },
        },
      },
    }),
    []
  );

  return (
    <Card
      title="BTC momentum & P(UP)"
      controls={
        <select
          className="select"
          value={window}
          onChange={(e) => setWindow(Number(e.target.value))}
        >
          <option value={60}>last 1h</option>
          <option value={360}>last 6h</option>
          <option value={1440}>last 24h</option>
          <option value={10080}>last 7d</option>
        </select>
      }
    >
      <Line data={data} options={options} />
    </Card>
  );
}

export function PnlChart() {
  const [bucket, setBucket] = useState<"hour" | "day">("hour");

  const data = useMemo(() => {
    return {
      labels: pnlChartData.hourlyLabels,
      datasets: [
        {
          label: "Cumulative PnL $",
          data: pnlChartData.hourly,
          borderColor: "#10b981",
          backgroundColor: (ctx: { chart: { ctx: CanvasRenderingContext2D; chartArea?: { top: number; bottom: number } } }) => {
            const chart = ctx.chart;
            const { ctx: canvasCtx, chartArea } = chart;
            if (!chartArea) return "rgba(16,185,129,0.1)";
            const gradient = canvasCtx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            gradient.addColorStop(0, "rgba(16, 185, 129, 0.25)");
            gradient.addColorStop(1, "rgba(16, 185, 129, 0)");
            return gradient;
          },
          fill: true,
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 5,
        },
      ],
    };
  }, [bucket]);

  const options: ChartOptions<"line"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#111824",
          borderColor: "#2a3a52",
          borderWidth: 1,
          titleColor: "#e8eef5",
          bodyColor: "#9aa8bd",
          padding: 10,
          cornerRadius: 8,
          callbacks: { label: (ctx) => `${(ctx.parsed.y ?? 0).toFixed(2)}` },
        },
      },
      scales: {
        x: {
          grid: { color: chartGridColor },
          ticks: { color: chartTextColor, font: { size: 10 }, maxTicksLimit: 8 },
        },
        y: {
          grid: { color: chartGridColor },
          ticks: {
            color: chartTextColor,
            font: { size: 10 },
            callback: (v) => `$${v}`,
          },
        },
      },
    }),
    []
  );

  return (
    <Card
      title="PnL cumulative"
      controls={
        <select
          className="select"
          value={bucket}
          onChange={(e) => setBucket(e.target.value as "hour" | "day")}
        >
          <option value="hour">hourly</option>
          <option value="day">daily</option>
        </select>
      }
    >
      <Line data={data} options={options} />
    </Card>
  );
}

export function SkipReasonsChart() {
  const labels = Object.keys(skipReasons);
  const values = Object.values(skipReasons);
  const colors = ["#3b82f6", "#06b6d4", "#f59e0b", "#8b5cf6", "#ec4899"];

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderColor: "#1a2433",
        borderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "62%",
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: chartTextColor,
          font: { size: 11 },
          boxWidth: 10,
          boxHeight: 10,
          padding: 10,
        },
      },
      tooltip: {
        backgroundColor: "#111824",
        borderColor: "#2a3a52",
        borderWidth: 1,
        titleColor: "#e8eef5",
        bodyColor: "#9aa8bd",
        padding: 10,
        cornerRadius: 8,
        callbacks: {
          label: (ctx) => {
            const total = values.reduce((a, b) => a + b, 0);
            const pct = ((ctx.parsed / total) * 100).toFixed(1);
            return ` ${ctx.label}: ${ctx.parsed.toLocaleString()} (${pct}%)`;
          },
        },
      },
    },
  };

  return (
    <Card title="Skip reasons" controls={<span className="muted">total {skipTotal.toLocaleString()}</span>}>
      <Doughnut data={data} options={options} />
    </Card>
  );
}

export function PositionsPanel() {
  return (
    <Card title="Open positions" controls={<span className="muted">live from state.json</span>}>
      <div className="positions-empty">
        <div className="positions-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 3v18h18" />
            <path d="M7 14l4-4 4 4 5-5" />
          </svg>
        </div>
        <p>No open positions</p>
      </div>
    </Card>
  );
}
