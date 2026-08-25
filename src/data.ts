export interface Trade {
  time: string;
  mode: string;
  side: "UP" | "DOWN";
  entry: number;
  edge: number;
  size: number;
  regime: string;
  outcome: "UP" | "DOWN" | "open";
  pnl: number | null;
}

export interface Scan {
  time: string;
  mode: string;
  side: string;
  decision: "TRADE" | "SKIP";
  reason: string;
  probUp: number;
  mom5m: number;
  mom30m: number;
  regime: string;
  market: string;
}

export const trades: Trade[] = [
  { time: "2026-08-25 01:01:26Z", mode: "live", side: "UP", entry: 0.53, edge: 3.25, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-24 23:54:13Z", mode: "live", side: "DOWN", entry: 0.68, edge: 9.55, size: 5.0, regime: "TREND", outcome: "open", pnl: null },
  { time: "2026-08-24 22:21:16Z", mode: "live", side: "DOWN", entry: 0.39, edge: 2.82, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 7.82 },
  { time: "2026-08-24 20:24:29Z", mode: "live", side: "DOWN", entry: 0.27, edge: 10.33, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-24 17:53:30Z", mode: "live", side: "UP", entry: 0.66, edge: 13.91, size: 5.0, regime: "TREND", outcome: "UP", pnl: 3.06 },
  { time: "2026-08-24 16:31:09Z", mode: "live", side: "UP", entry: 0.51, edge: 12.48, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-24 15:45:32Z", mode: "live", side: "DOWN", entry: 0.40, edge: 8.81, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 7.82 },
  { time: "2026-08-24 15:22:28Z", mode: "live", side: "UP", entry: 0.81, edge: 7.97, size: 5.0, regime: "TREND", outcome: "UP", pnl: 1.02 },
  { time: "2026-08-24 15:01:18Z", mode: "live", side: "DOWN", entry: 0.56, edge: 5.99, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-24 14:33:12Z", mode: "live", side: "UP", entry: 0.74, edge: 3.42, size: 5.0, regime: "TREND", outcome: "UP", pnl: 1.85 },
  { time: "2026-08-24 14:16:37Z", mode: "live", side: "UP", entry: 0.60, edge: 3.24, size: 5.0, regime: "TREND", outcome: "UP", pnl: 3.77 },
  { time: "2026-08-24 13:53:07Z", mode: "live", side: "DOWN", entry: 0.66, edge: 5.07, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-24 10:30:05Z", mode: "live", side: "UP", entry: 0.43, edge: 2.35, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-24 09:45:06Z", mode: "live", side: "UP", entry: 0.42, edge: 6.16, size: 5.0, regime: "TREND", outcome: "UP", pnl: 7.02 },
  { time: "2026-08-24 08:30:33Z", mode: "live", side: "DOWN", entry: 0.42, edge: 2.81, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-24 07:16:28Z", mode: "live", side: "UP", entry: 0.30, edge: 4.13, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-24 06:01:53Z", mode: "live", side: "UP", entry: 0.31, edge: 2.32, size: 5.0, regime: "TREND", outcome: "UP", pnl: 11.09 },
  { time: "2026-08-24 04:31:38Z", mode: "live", side: "UP", entry: 0.39, edge: 3.71, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-24 00:38:44Z", mode: "live", side: "DOWN", entry: 0.45, edge: 2.78, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 6.11 },
  { time: "2026-08-23 22:06:10Z", mode: "live", side: "DOWN", entry: 0.71, edge: 11.31, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 1.76 },
  { time: "2026-08-23 20:49:19Z", mode: "live", side: "UP", entry: 0.43, edge: 5.37, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-23 18:36:19Z", mode: "live", side: "UP", entry: 0.36, edge: 9.39, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-23 18:24:05Z", mode: "live", side: "UP", entry: 0.36, edge: 6.25, size: 5.0, regime: "TREND", outcome: "UP", pnl: 8.89 },
  { time: "2026-08-23 17:01:35Z", mode: "live", side: "UP", entry: 0.43, edge: 3.14, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-23 16:01:29Z", mode: "live", side: "DOWN", entry: 0.29, edge: 3.97, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-23 14:37:59Z", mode: "live", side: "UP", entry: 0.46, edge: 2.24, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-23 12:37:06Z", mode: "live", side: "DOWN", entry: 0.36, edge: 2.61, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-23 10:52:10Z", mode: "live", side: "UP", entry: 0.37, edge: 5.95, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-23 08:00:39Z", mode: "live", side: "DOWN", entry: 0.37, edge: 12.49, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-23 07:01:56Z", mode: "live", side: "DOWN", entry: 0.44, edge: 4.06, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-23 06:18:18Z", mode: "live", side: "UP", entry: 0.65, edge: 4.45, size: 5.0, regime: "TREND", outcome: "UP", pnl: 2.69 },
  { time: "2026-08-23 05:54:37Z", mode: "live", side: "DOWN", entry: 0.47, edge: 6.72, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 5.87 },
  { time: "2026-08-23 03:45:15Z", mode: "live", side: "DOWN", entry: 0.36, edge: 4.01, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-23 01:45:08Z", mode: "live", side: "DOWN", entry: 0.41, edge: 3.70, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 5.87 },
  { time: "2026-08-23 00:46:05Z", mode: "live", side: "UP", entry: 0.37, edge: 5.47, size: 5.0, regime: "TREND", outcome: "UP", pnl: 8.33 },
  { time: "2026-08-22 23:16:31Z", mode: "live", side: "DOWN", entry: 0.37, edge: 3.57, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 8.78 },
  { time: "2026-08-22 21:50:54Z", mode: "live", side: "DOWN", entry: 0.60, edge: 2.05, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 3.47 },
  { time: "2026-08-22 19:24:21Z", mode: "live", side: "UP", entry: 0.26, edge: 6.00, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-22 17:16:23Z", mode: "live", side: "DOWN", entry: 0.37, edge: 5.38, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 8.89 },
  { time: "2026-08-22 16:30:14Z", mode: "live", side: "UP", entry: 0.40, edge: 4.13, size: 5.0, regime: "TREND", outcome: "UP", pnl: 7.20 },
  { time: "2026-08-22 12:38:20Z", mode: "live", side: "UP", entry: 0.17, edge: 3.13, size: 5.0, regime: "TREND", outcome: "UP", pnl: 27.81 },
  { time: "2026-08-22 12:21:03Z", mode: "live", side: "UP", entry: 0.52, edge: 2.39, size: 5.0, regime: "TREND", outcome: "UP", pnl: 4.53 },
  { time: "2026-08-22 07:38:24Z", mode: "live", side: "DOWN", entry: 0.63, edge: 2.19, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 2.58 },
  { time: "2026-08-22 07:19:07Z", mode: "live", side: "DOWN", entry: 0.73, edge: 4.74, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-22 06:46:24Z", mode: "live", side: "UP", entry: 0.59, edge: 2.92, size: 5.0, regime: "TREND", outcome: "UP", pnl: 3.47 },
  { time: "2026-08-22 04:05:48Z", mode: "live", side: "DOWN", entry: 0.40, edge: 2.69, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 7.50 },
  { time: "2026-08-22 02:30:20Z", mode: "live", side: "UP", entry: 0.36, edge: 9.41, size: 5.0, regime: "TREND", outcome: "UP", pnl: 6.90 },
  { time: "2026-08-22 02:09:14Z", mode: "live", side: "UP", entry: 0.76, edge: 9.50, size: 5.0, regime: "TREND", outcome: "UP", pnl: 1.25 },
  { time: "2026-08-21 23:49:16Z", mode: "live", side: "DOWN", entry: 0.73, edge: 4.02, size: 10.0, regime: "TREND", outcome: "open", pnl: null },
  { time: "2026-08-21 21:15:20Z", mode: "live", side: "UP", entry: 0.36, edge: 8.06, size: 10.0, regime: "TREND", outcome: "UP", pnl: 17.78 },
  { time: "2026-08-21 20:51:54Z", mode: "live", side: "UP", entry: 0.59, edge: 2.27, size: 10.0, regime: "TREND", outcome: "UP", pnl: 6.95 },
  { time: "2026-08-21 20:08:39Z", mode: "live", side: "DOWN", entry: 0.33, edge: 3.67, size: 10.0, regime: "TREND", outcome: "UP", pnl: -10.0 },
  { time: "2026-08-21 19:54:48Z", mode: "live", side: "DOWN", entry: 0.46, edge: 5.22, size: 10.0, regime: "TREND", outcome: "DOWN", pnl: 11.74 },
  { time: "2026-08-21 10:04:55Z", mode: "live", side: "DOWN", entry: 0.78, edge: 4.41, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-21 09:45:47Z", mode: "live", side: "UP", entry: 0.47, edge: 4.33, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-21 09:38:14Z", mode: "live", side: "UP", entry: 0.83, edge: 5.28, size: 5.0, regime: "TREND", outcome: "UP", pnl: 1.02 },
  { time: "2026-08-21 07:45:46Z", mode: "live", side: "UP", entry: 0.37, edge: 4.75, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-21 03:04:03Z", mode: "live", side: "DOWN", entry: 0.52, edge: 2.02, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-21 02:18:27Z", mode: "live", side: "DOWN", entry: 0.62, edge: 3.24, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-21 01:30:58Z", mode: "live", side: "UP", entry: 0.35, edge: 3.37, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-21 00:34:20Z", mode: "live", side: "UP", entry: 0.38, edge: 8.60, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-20 23:30:30Z", mode: "live", side: "UP", entry: 0.43, edge: 5.99, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-20 19:52:36Z", mode: "live", side: "UP", entry: 0.28, edge: 7.09, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-20 15:20:02Z", mode: "live", side: "UP", entry: 0.42, edge: 3.05, size: 5.0, regime: "TREND", outcome: "UP", pnl: 6.36 },
  { time: "2026-08-20 13:47:46Z", mode: "live", side: "DOWN", entry: 0.65, edge: 2.74, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-20 11:21:35Z", mode: "live", side: "DOWN", entry: 0.58, edge: 5.58, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 4.26 },
  { time: "2026-08-20 09:34:09Z", mode: "live", side: "UP", entry: 0.70, edge: 10.37, size: 5.0, regime: "TREND", outcome: "UP", pnl: 1.73 },
  { time: "2026-08-20 09:04:36Z", mode: "live", side: "UP", entry: 0.51, edge: 2.99, size: 5.0, regime: "TREND", outcome: "UP", pnl: 5.0 },
  { time: "2026-08-20 08:15:29Z", mode: "live", side: "UP", entry: 0.35, edge: 4.93, size: 5.0, regime: "TREND", outcome: "UP", pnl: 9.67 },
  { time: "2026-08-20 05:35:45Z", mode: "live", side: "UP", entry: 0.48, edge: 10.00, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: -5.0 },
  { time: "2026-08-20 03:22:59Z", mode: "live", side: "DOWN", entry: 0.24, edge: 5.03, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 14.23 },
  { time: "2026-08-19 22:06:14Z", mode: "live", side: "DOWN", entry: 0.85, edge: 2.92, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 0.88 },
  { time: "2026-08-19 19:17:59Z", mode: "live", side: "DOWN", entry: 0.27, edge: 6.03, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 13.52 },
  { time: "2026-08-19 17:34:21Z", mode: "live", side: "DOWN", entry: 0.44, edge: 7.59, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-19 16:00:42Z", mode: "live", side: "UP", entry: 0.57, edge: 3.55, size: 5.0, regime: "TREND", outcome: "UP", pnl: 3.47 },
  { time: "2026-08-19 15:35:38Z", mode: "live", side: "UP", entry: 0.39, edge: 3.96, size: 5.0, regime: "TREND", outcome: "UP", pnl: 6.63 },
  { time: "2026-08-19 15:00:22Z", mode: "live", side: "UP", entry: 0.50, edge: 4.03, size: 5.0, regime: "TREND", outcome: "UP", pnl: 4.80 },
  { time: "2026-08-19 14:36:17Z", mode: "live", side: "UP", entry: 0.52, edge: 4.17, size: 5.0, regime: "TREND", outcome: "UP", pnl: 5.0 },
  { time: "2026-08-19 11:53:40Z", mode: "live", side: "DOWN", entry: 0.34, edge: 3.46, size: 5.0, regime: "TREND", outcome: "UP", pnl: -5.0 },
  { time: "2026-08-19 11:37:50Z", mode: "live", side: "DOWN", entry: 0.37, edge: 4.64, size: 5.0, regime: "TREND", outcome: "DOWN", pnl: 7.50 },
  { time: "2026-08-19 06:52:07Z", mode: "live", side: "UP", entry: 0.47, edge: 6.91, size: 1.0, regime: "TREND", outcome: "UP", pnl: 0.96 },
  { time: "2026-08-19 06:00:45Z", mode: "live", side: "DOWN", entry: 0.32, edge: 9.70, size: 1.0, regime: "TREND", outcome: "DOWN", pnl: 2.13 },
];

export const scans: Scan[] = [
  { time: "2026-08-25 02:29:56Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 99.0, mom5m: 0.27, mom30m: 1.50, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:29:25Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 99.0, mom5m: 0.19, mom30m: 1.42, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:28:54Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 99.0, mom5m: 0.39, mom30m: 1.44, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:28:23Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 99.0, mom5m: 0.29, mom30m: 1.34, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:27:52Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 99.0, mom5m: 0.16, mom30m: 1.43, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:27:21Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 99.0, mom5m: 0.17, mom30m: 1.44, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:26:50Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 99.0, mom5m: 0.01, mom30m: 1.46, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:26:19Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 99.0, mom5m: 0.09, mom30m: 1.55, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:25:47Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 99.0, mom5m: -0.05, mom30m: 1.51, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:25:16Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 99.0, mom5m: -0.05, mom30m: 1.51, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:24:45Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 99.0, mom5m: -0.17, mom30m: 1.38, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:24:14Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 99.0, mom5m: -0.28, mom30m: 1.26, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:23:43Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 99.0, mom5m: -0.27, mom30m: 1.40, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:23:12Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 99.0, mom5m: -0.25, mom30m: 1.42, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:22:41Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 99.0, mom5m: -0.21, mom30m: 1.40, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:22:10Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 99.0, mom5m: -0.04, mom30m: 1.57, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:21:39Z", mode: "live", side: "—", decision: "SKIP", reason: "high_realized_volatility", probUp: 80.77, mom5m: 1.27, mom30m: 1.58, regime: "HIGH_VOL", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:21:08Z", mode: "live", side: "—", decision: "SKIP", reason: "high_realized_volatility", probUp: 83.0, mom5m: 1.40, mom30m: 1.72, regime: "HIGH_VOL", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:20:37Z", mode: "live", side: "—", decision: "SKIP", reason: "high_realized_volatility", probUp: 80.72, mom5m: 1.38, mom30m: 1.54, regime: "HIGH_VOL", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:20:06Z", mode: "live", side: "—", decision: "SKIP", reason: "high_realized_volatility", probUp: 76.58, mom5m: 1.22, mom30m: 1.39, regime: "HIGH_VOL", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:19:34Z", mode: "live", side: "—", decision: "SKIP", reason: "high_realized_volatility", probUp: 75.16, mom5m: 1.13, mom30m: 1.31, regime: "HIGH_VOL", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:19:03Z", mode: "live", side: "—", decision: "SKIP", reason: "high_realized_volatility", probUp: 77.29, mom5m: 1.27, mom30m: 1.46, regime: "HIGH_VOL", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:18:32Z", mode: "live", side: "—", decision: "SKIP", reason: "high_realized_volatility", probUp: 75.13, mom5m: 1.19, mom30m: 1.36, regime: "HIGH_VOL", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:18:01Z", mode: "live", side: "—", decision: "SKIP", reason: "high_realized_volatility", probUp: 75.31, mom5m: 1.23, mom30m: 1.42, regime: "HIGH_VOL", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:17:30Z", mode: "live", side: "—", decision: "SKIP", reason: "edge_below_threshold", probUp: 71.40, mom5m: 0.12, mom30m: 0.31, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:16:59Z", mode: "live", side: "—", decision: "SKIP", reason: "edge_below_threshold", probUp: 51.40, mom5m: 0.01, mom30m: 0.21, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:16:28Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 49.14, mom5m: -0.0, mom30m: 0.20, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:15:57Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 41.65, mom5m: -0.09, mom30m: 0.13, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:15:26Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 47.22, mom5m: -0.07, mom30m: 0.15, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:15PM-" },
  { time: "2026-08-25 02:14:54Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 97.39, mom5m: 0.09, mom30m: 0.18, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:14:23Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 55.19, mom5m: 0.05, mom30m: 0.14, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:13:52Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 46.24, mom5m: 0.05, mom30m: 0.11, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:13:21Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 40.67, mom5m: 0.04, mom30m: 0.09, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:12:50Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 58.99, mom5m: 0.10, mom30m: 0.14, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:12:19Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 45.77, mom5m: 0.06, mom30m: 0.11, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:11:48Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 60.66, mom5m: 0.12, mom30m: 0.05, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:11:17Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 74.99, mom5m: 0.17, mom30m: 0.10, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:10:46Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 71.82, mom5m: 0.11, mom30m: 0.05, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:10:14Z", mode: "live", side: "—", decision: "SKIP", reason: "too_close_to_resolution", probUp: 50.22, mom5m: 0.04, mom30m: -0.01, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:09:43Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 21.40, mom5m: -0.04, mom30m: -0.09, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:09:12Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 21.35, mom5m: -0.05, mom30m: -0.10, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:08:41Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 44.15, mom5m: 0.02, mom30m: -0.03, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:08:10Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 33.26, mom5m: -0.03, mom30m: -0.07, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:07:39Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 35.21, mom5m: -0.16, mom30m: -0.01, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:07:08Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 32.87, mom5m: -0.18, mom30m: -0.03, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:06:37Z", mode: "live", side: "—", decision: "SKIP", reason: "edge_below_threshold", probUp: 42.12, mom5m: 0.03, mom30m: 0.06, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:06:06Z", mode: "live", side: "—", decision: "SKIP", reason: "edge_below_threshold", probUp: 40.75, mom5m: 0.02, mom30m: 0.04, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:05:35Z", mode: "live", side: "—", decision: "SKIP", reason: "momentum_not_aligned", probUp: 51.57, mom5m: 0.06, mom30m: 0.15, regime: "TREND", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:05:04Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 43.43, mom5m: -0.0, mom30m: 0.09, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
  { time: "2026-08-25 02:04:33Z", mode: "live", side: "—", decision: "SKIP", reason: "non_trending_regime_range", probUp: 48.99, mom5m: -0.01, mom30m: 0.12, regime: "RANGE", market: "Bitcoin Up or Down - August 24, 10:00PM-" },
];

export const skipReasons: Record<string, number> = {
  too_close_to_resolution: 8200,
  non_trending_regime_range: 5400,
  high_realized_volatility: 1200,
  edge_below_threshold: 850,
  momentum_not_aligned: 256,
};

export const skipTotal = 15906;

export const kpis = {
  tradesToday: 1,
  tradesTodayLimit: 20,
  notionalToday: 5.0,
  notionalCap: 300,
  pnlToday: -5.0,
  lossStreak: 1,
  errors24h: 2,
  errorsLast1h: 0,
  openPositions: 0,
  maxPositions: 1,
};

export interface Bot {
  id: string;
  name: string;
  path: string;
  color: string;
}

export const bots: Bot[] = [
  { id: "btc-15m-main", name: "BTC 15m (mainnet)", path: "/home/user/bots/btc-15m", color: "#4f8cff" },
  { id: "btc-15m-test", name: "BTC 15m (test)", path: "/home/user/bots/btc-15m-test", color: "#10b981" },
  { id: "eth-15m-experimental", name: "ETH 15m (experimental)", path: "/home/user/bots/eth-15m", color: "#f59e0b" },
];

export const health = {
  label: "Healthy",
  sub: "last scan 02:29:56 (5s ago)",
  ok: true,
};

export const subtitle = "UTC 2026-08-25  ·  live=2775  ·  16116 events in db";

export const lastUpdate = "02:30:01Z";

export const signalChartData = {
  labels: Array.from({ length: 60 }, (_, i) => i),
  probUp: Array.from({ length: 60 }, (_, i) => 40 + 30 * Math.sin(i / 10) + 20 * Math.sin(i / 3) + Math.random() * 5),
  momentum: Array.from({ length: 60 }, (_, i) => 0.5 * Math.sin(i / 8) + 0.3 * Math.cos(i / 4) + Math.random() * 0.2),
};

export const pnlChartData = {
  hourly: Array.from({ length: 24 }, (_, i) => {
    let v = 0;
    for (let j = 0; j <= i; j++) v += (Math.random() - 0.45) * 8;
    return v;
  }),
  hourlyLabels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
};
