// src/components/SalesChart.jsx
import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { monthlySales } from "../data/mockData";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-xl px-4 py-3"
      style={{ background: "var(--ink-700)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
    >
      <p className="text-white/50 text-xs mb-2" style={{ fontFamily: "JetBrains Mono, monospace" }}>{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="text-white/60 capitalize">{p.name}:</span>
          <span className="text-white font-500" style={{ fontWeight: 500 }}>
            {p.name === "revenue" ? `$${p.value.toLocaleString()}` : p.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function SalesChart() {
  const [chartType, setChartType] = useState("area");
  const [metric, setMetric] = useState("both");

  return (
    <div className="rounded-2xl p-5" style={{ background: "var(--ink-800)", border: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex-1">
          <h2 className="text-base text-white" style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
            Monthly Sales Trend
          </h2>
          <p className="text-xs text-white/35 mt-0.5">Orders & Revenue — Jan to Dec 2024</p>
        </div>

        {/* Metric toggles */}
        <div className="flex gap-1 rounded-lg p-1" style={{ background: "var(--ink-700)" }}>
          {["both", "orders", "revenue"].map((m) => (
            <button
              key={m}
              onClick={() => setMetric(m)}
              className="text-xs px-3 py-1.5 rounded-md capitalize transition-all"
              style={{
                background: metric === m ? "var(--acid)" : "transparent",
                color: metric === m ? "#000" : "rgba(255,255,255,0.4)",
                fontWeight: metric === m ? 600 : 400,
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Chart type */}
        <div className="flex gap-1 rounded-lg p-1" style={{ background: "var(--ink-700)" }}>
          {["area", "bar"].map((t) => (
            <button
              key={t}
              onClick={() => setChartType(t)}
              className="text-xs px-3 py-1.5 rounded-md capitalize transition-all"
              style={{
                background: chartType === t ? "rgba(77,255,223,0.15)" : "transparent",
                color: chartType === t ? "var(--glow-blue)" : "rgba(255,255,255,0.4)",
                fontWeight: chartType === t ? 500 : 400,
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={280}>
        {chartType === "area" ? (
          <AreaChart data={monthlySales} margin={{ top: 5, right: 5, bottom: 0, left: -10 }}>
            <defs>
              <linearGradient id="gradOrders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#4DFFDF" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#4DFFDF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#C8F135" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#C8F135" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
            <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            {(metric === "both" || metric === "orders") && (
              <Area type="monotone" dataKey="orders" stroke="#4DFFDF" strokeWidth={2} fill="url(#gradOrders)" dot={false} activeDot={{ r: 5, fill: "#4DFFDF", strokeWidth: 0 }} />
            )}
            {(metric === "both" || metric === "revenue") && (
              <Area type="monotone" dataKey="revenue" stroke="#C8F135" strokeWidth={2} fill="url(#gradRevenue)" dot={false} activeDot={{ r: 5, fill: "#C8F135", strokeWidth: 0 }} />
            )}
          </AreaChart>
        ) : (
          <BarChart data={monthlySales} margin={{ top: 5, right: 5, bottom: 0, left: -10 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
            <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            {(metric === "both" || metric === "orders") && (
              <Bar dataKey="orders" fill="#4DFFDF" fillOpacity={0.7} radius={[4, 4, 0, 0]} />
            )}
            {(metric === "both" || metric === "revenue") && (
              <Bar dataKey="revenue" fill="#C8F135" fillOpacity={0.7} radius={[4, 4, 0, 0]} />
            )}
          </BarChart>
        )}
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex gap-5 mt-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-2 text-xs text-white/40">
          <div className="w-3 h-0.5 rounded-full" style={{ background: "var(--glow-blue)" }} />
          Orders
        </div>
        <div className="flex items-center gap-2 text-xs text-white/40">
          <div className="w-3 h-0.5 rounded-full" style={{ background: "var(--acid)" }} />
          Revenue (USD)
        </div>
      </div>
    </div>
  );
}
