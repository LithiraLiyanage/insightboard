// src/components/StatCard.jsx
import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon: Icon,
  prefix = "",
  suffix = "",
  trend,
  trendLabel,
  accentColor = "var(--glow-blue)",
  delay = 0,
}) {
  const positive = trend >= 0;

  return (
    <div
      className="animate-card rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden hover:scale-[1.01] transition-transform duration-200"
      style={{
        background: "var(--ink-800)",
        border: "1px solid rgba(255,255,255,0.06)",
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
      }}
    >
      {/* Glow accent */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: accentColor, transform: "translate(30%,-30%)" }}
      />

      {/* Header */}
      <div className="flex items-start justify-between">
        <p className="text-xs uppercase tracking-widest text-white/40"
           style={{ fontFamily: "JetBrains Mono, monospace" }}>
          {title}
        </p>
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${accentColor}18`, border: `1px solid ${accentColor}30` }}
        >
          <Icon size={17} style={{ color: accentColor }} strokeWidth={1.8} />
        </div>
      </div>

      {/* Value */}
      <div>
        <p className="text-3xl text-white" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
          {prefix}
          {typeof value === "number" ? value.toLocaleString() : value}
          {suffix}
        </p>

        {/* Trend */}
        {trend !== undefined && (
          <div className="flex items-center gap-1.5 mt-2">
            <span
              className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
              style={{
                background: positive ? "rgba(77,255,223,0.1)" : "rgba(255,107,107,0.1)",
                color: positive ? "var(--glow-blue)" : "var(--glow-red)",
              }}
            >
              {positive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
              {positive ? "+" : ""}{trend}%
            </span>
            {trendLabel && (
              <span className="text-xs text-white/30">{trendLabel}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
