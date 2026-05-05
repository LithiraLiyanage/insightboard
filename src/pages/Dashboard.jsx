// src/pages/Dashboard.jsx
import { Users, ShoppingCart, DollarSign, Clock } from "lucide-react";
import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";
import OrdersTable from "../components/OrdersTable";
import { statsData, recentOrders, monthlySales, categoryBreakdown } from "../data/mockData";
import {
  RadialBarChart, RadialBar, ResponsiveContainer, PieChart, Pie, Cell, Tooltip,
} from "recharts";

const PIE_COLORS = ["#4DFFDF", "#C8F135", "#BD93F9", "#FFB86C"];

export default function Dashboard() {
  const topMonth = [...monthlySales].sort((a, b) => b.revenue - a.revenue)[0];

  return (
    <div className="p-6 space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Users"
          value={statsData.totalUsers}
          icon={Users}
          trend={12.4}
          trendLabel="vs last month"
          accentColor="#4DFFDF"
          delay={0}
        />
        <StatCard
          title="Total Orders"
          value={statsData.totalOrders}
          icon={ShoppingCart}
          trend={8.1}
          trendLabel="vs last month"
          accentColor="#C8F135"
          delay={80}
        />
        <StatCard
          title="Total Revenue"
          value={statsData.totalRevenue}
          prefix="$"
          icon={DollarSign}
          trend={15.7}
          trendLabel="vs last month"
          accentColor="#BD93F9"
          delay={160}
        />
        <StatCard
          title="Pending Orders"
          value={statsData.pendingOrders}
          icon={Clock}
          trend={-3.2}
          trendLabel="vs last month"
          accentColor="#FF6B6B"
          delay={240}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>

        {/* Category Breakdown */}
        <div className="rounded-2xl p-5" style={{ background: "var(--ink-800)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h2 className="text-base text-white mb-1" style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
            Category Split
          </h2>
          <p className="text-xs text-white/35 mb-5">By sales volume %</p>

          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={categoryBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {categoryBreakdown.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i]} opacity={0.85} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ background: "var(--ink-700)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }}
                itemStyle={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}
                labelStyle={{ color: "rgba(255,255,255,0.5)" }}
                formatter={(v) => [`${v}%`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="space-y-2 mt-2">
            {categoryBreakdown.map((cat, i) => (
              <div key={cat.name} className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: PIE_COLORS[i] }} />
                <span className="text-xs text-white/50 flex-1">{cat.name}</span>
                <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "var(--ink-700)" }}>
                  <div className="h-full rounded-full" style={{ width: `${cat.value}%`, background: PIE_COLORS[i], opacity: 0.7 }} />
                </div>
                <span className="text-xs font-mono text-white/60 w-8 text-right"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  {cat.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <OrdersTable orders={recentOrders} title="Recent Orders" />

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Avg. Order Value", value: "$46.37", note: "+$2.10 this week", color: "var(--glow-blue)" },
          { label: "Best Month",       value: topMonth.month, note: `$${topMonth.revenue.toLocaleString()} revenue`, color: "var(--acid)" },
          { label: "Completion Rate",  value: "78.4%",  note: "of all orders",     color: "var(--glow-purple)" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl p-5 flex items-center gap-4"
               style={{ background: "var(--ink-800)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-1 h-12 rounded-full" style={{ background: s.color }} />
            <div>
              <p className="text-xs text-white/35 uppercase tracking-wider"
                 style={{ fontFamily: "JetBrains Mono, monospace" }}>{s.label}</p>
              <p className="text-2xl text-white mt-1" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>{s.value}</p>
              <p className="text-xs text-white/30 mt-0.5">{s.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
