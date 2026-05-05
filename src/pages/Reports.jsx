// src/pages/Reports.jsx
import { trafficSources, monthlySales } from "../data/mockData";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  AreaChart, Area,
} from "recharts";
import { TrendingUp, Globe, MousePointer, ArrowUpRight } from "lucide-react";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl px-4 py-3"
         style={{ background: "var(--ink-700)", border: "1px solid rgba(255,255,255,0.1)" }}>
      <p className="text-white/50 text-xs mb-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>{label}</p>
      {payload.map(p => (
        <p key={p.name} className="text-sm text-white">
          {p.name === "revenue" ? `$${p.value.toLocaleString()}` : p.value.toLocaleString()}
        </p>
      ))}
    </div>
  );
};

export default function Reports() {
  const totalVisits = trafficSources.reduce((s, t) => s + t.visits, 0);
  const avgConversion = (trafficSources.reduce((s, t) => s + t.conversion, 0) / trafficSources.length).toFixed(1);

  return (
    <div className="p-6 space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Visits",     value: totalVisits.toLocaleString(), icon: Globe,        color: "var(--glow-blue)"   },
          { label: "Avg. Conversion",  value: `${avgConversion}%`,           icon: MousePointer, color: "var(--acid)"        },
          { label: "Peak Month",       value: "Dec",                         icon: TrendingUp,   color: "var(--glow-purple)" },
          { label: "YoY Growth",       value: "+34.2%",                      icon: ArrowUpRight, color: "var(--glow-orange)" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl p-5 flex items-center gap-4"
               style={{ background: "var(--ink-800)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                 style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
              <Icon size={18} style={{ color }} strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-2xl text-white" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>{value}</p>
              <p className="text-xs text-white/40">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Line Chart */}
      <div className="rounded-2xl p-5" style={{ background: "var(--ink-800)", border: "1px solid rgba(255,255,255,0.06)" }}>
        <h2 className="text-base text-white mb-1" style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
          Revenue Over Time
        </h2>
        <p className="text-xs text-white/35 mb-5">Monthly revenue — 2024</p>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={monthlySales} margin={{ top: 5, right: 5, bottom: 0, left: -10 }}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#BD93F9" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#BD93F9" stopOpacity={0}   />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
            <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="revenue" stroke="#BD93F9" strokeWidth={2.5} fill="url(#revGrad)" dot={false}
                  activeDot={{ r: 5, fill: "#BD93F9", strokeWidth: 0 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Traffic Sources */}
      <div className="rounded-2xl p-5" style={{ background: "var(--ink-800)", border: "1px solid rgba(255,255,255,0.06)" }}>
        <h2 className="text-base text-white mb-1" style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
          Traffic Sources
        </h2>
        <p className="text-xs text-white/35 mb-5">Visits and conversion rates by channel</p>

        <div className="space-y-4">
          {trafficSources.map((src, i) => {
            const pct = Math.round((src.visits / totalVisits) * 100);
            const colors = ["var(--glow-blue)", "var(--acid)", "var(--glow-purple)", "var(--glow-orange)", "var(--glow-red)"];
            const c = colors[i];
            return (
              <div key={src.source}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-white/70">{src.source}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-white/35">{src.visits.toLocaleString()} visits</span>
                    <span className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: `${c}18`, color: c, fontFamily: "JetBrains Mono, monospace" }}>
                      {src.conversion}% conv.
                    </span>
                  </div>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--ink-700)" }}>
                  <div className="h-full rounded-full transition-all duration-500"
                       style={{ width: `${pct}%`, background: c, opacity: 0.7 }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
