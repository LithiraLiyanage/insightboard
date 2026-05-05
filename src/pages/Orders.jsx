// src/pages/Orders.jsx
import { allOrders, monthlySales } from "../data/mockData";
import OrdersTable from "../components/OrdersTable";
import { ShoppingCart, CheckCircle, XCircle, Clock, Loader } from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from "recharts";

const statusCounts = (orders) => ({
  completed:  orders.filter(o => o.status === "completed").length,
  pending:    orders.filter(o => o.status === "pending").length,
  processing: orders.filter(o => o.status === "processing").length,
  cancelled:  orders.filter(o => o.status === "cancelled").length,
});

export default function Orders() {
  const counts = statusCounts(allOrders);

  return (
    <div className="p-6 space-y-6">
      {/* Status Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Completed",  count: counts.completed,  icon: CheckCircle, color: "var(--glow-blue)"   },
          { label: "Pending",    count: counts.pending,    icon: Clock,       color: "var(--glow-orange)" },
          { label: "Processing", count: counts.processing, icon: Loader,      color: "var(--glow-purple)" },
          { label: "Cancelled",  count: counts.cancelled,  icon: XCircle,     color: "var(--glow-red)"    },
        ].map(({ label, count, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl p-5 flex items-center gap-4"
               style={{ background: "var(--ink-800)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                 style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
              <Icon size={18} style={{ color }} strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-2xl text-white" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>{count}</p>
              <p className="text-xs text-white/40 mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Monthly Orders Chart */}
      <div className="rounded-2xl p-5" style={{ background: "var(--ink-800)", border: "1px solid rgba(255,255,255,0.06)" }}>
        <h2 className="text-base text-white mb-1" style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
          Monthly Order Volume
        </h2>
        <p className="text-xs text-white/35 mb-5">Total orders placed per month — 2024</p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={monthlySales} margin={{ top: 0, right: 5, bottom: 0, left: -15 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
            <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ background: "var(--ink-700)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }}
              itemStyle={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
            />
            <Bar dataKey="orders" fill="#C8F135" fillOpacity={0.75} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Full Orders Table */}
      <OrdersTable orders={allOrders} title="All Orders" showAll />
    </div>
  );
}
