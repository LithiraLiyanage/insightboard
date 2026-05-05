// src/components/OrdersTable.jsx
import { useState } from "react";
import { ChevronDown, ChevronUp, Filter, Download } from "lucide-react";

const statusConfig = {
  completed:  { label: "Completed",  cls: "badge-completed"  },
  pending:    { label: "Pending",    cls: "badge-pending"    },
  cancelled:  { label: "Cancelled",  cls: "badge-cancelled"  },
  processing: { label: "Processing", cls: "badge-processing" },
};

export default function OrdersTable({ orders, title = "Recent Orders", showAll = false }) {
  const [sortField, setSortField] = useState("id");
  const [sortDir, setSortDir]     = useState("desc");
  const [filter, setFilter]       = useState("all");

  const handleSort = (field) => {
    if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("asc"); }
  };

  const filtered = orders.filter(o => filter === "all" || o.status === filter);
  const sorted   = [...filtered].sort((a, b) => {
    let va = a[sortField], vb = b[sortField];
    if (typeof va === "string") va = va.toLowerCase(), vb = vb.toLowerCase();
    return sortDir === "asc" ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1);
  });

  const SortIcon = ({ field }) => {
    if (sortField !== field) return <ChevronDown size={12} className="text-white/15" />;
    return sortDir === "asc"
      ? <ChevronUp size={12} style={{ color: "var(--acid)" }} />
      : <ChevronDown size={12} style={{ color: "var(--acid)" }} />;
  };

  return (
    <div className="rounded-2xl" style={{ background: "var(--ink-800)", border: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3 p-5 border-b border-white/5">
        <div className="flex-1">
          <h2 className="text-base text-white" style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}>{title}</h2>
          <p className="text-xs text-white/35 mt-0.5">{filtered.length} orders</p>
        </div>

        {/* Status filter */}
        <div className="flex gap-1 rounded-lg p-1" style={{ background: "var(--ink-700)" }}>
          {["all", "completed", "pending", "processing", "cancelled"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className="text-xs px-2.5 py-1.5 rounded-md capitalize transition-all"
              style={{
                background: filter === s ? "rgba(200,241,53,0.15)" : "transparent",
                color: filter === s ? "var(--acid)" : "rgba(255,255,255,0.35)",
                fontWeight: filter === s ? 500 : 400,
              }}
            >
              {s}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all">
          <Download size={13} />
          Export
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              {[
                { key: "id",       label: "Order ID"  },
                { key: "customer", label: "Customer"  },
                { key: "product",  label: "Product"   },
                { key: "amount",   label: "Amount"    },
                { key: "status",   label: "Status"    },
                { key: "date",     label: "Date"      },
              ].map(({ key, label }) => (
                <th key={key} className="text-left px-5 py-3">
                  <button
                    onClick={() => handleSort(key)}
                    className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/30 hover:text-white/60 transition-colors"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {label}
                    <SortIcon field={key} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((order, i) => (
              <tr
                key={order.id}
                className="transition-colors border-b border-white/[0.025] last:border-0 hover:bg-white/[0.025]"
              >
                <td className="px-5 py-3.5">
                  <span className="text-xs font-mono text-white/50" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {order.id}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-700 text-black flex-shrink-0"
                      style={{
                        background: `hsl(${(order.customer.charCodeAt(0) * 37) % 360}, 60%, 60%)`,
                        fontWeight: 700,
                      }}
                    >
                      {order.customer.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-white/75 text-sm truncate max-w-[120px]">{order.customer}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-white/55 text-sm truncate max-w-[140px] block">{order.product}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-white text-sm font-500" style={{ fontWeight: 500 }}>
                    ${order.amount.toFixed(2)}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`${statusConfig[order.status].cls} text-xs px-2.5 py-1 rounded-full font-500`}
                        style={{ fontWeight: 500 }}>
                    {statusConfig[order.status].label}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-white/35 text-xs" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {order.date}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-5 py-3.5 border-t border-white/5 flex items-center justify-between">
        <p className="text-xs text-white/25">Showing {sorted.length} of {orders.length} orders</p>
        <button className="text-xs hover:text-white/70 transition-colors"
                style={{ color: "var(--acid)", fontWeight: 500 }}>
          View All Orders →
        </button>
      </div>
    </div>
  );
}
