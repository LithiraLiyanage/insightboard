// src/pages/Users.jsx
import { useState } from "react";
import { usersData } from "../data/mockData";
import { Search, UserCheck, UserX, Shield, User } from "lucide-react";

const roleColors = {
  Admin:    { bg: "rgba(200,241,53,0.12)",  text: "#C8F135" },
  Manager:  { bg: "rgba(77,255,223,0.12)",  text: "#4DFFDF" },
  Editor:   { bg: "rgba(189,147,249,0.12)", text: "#BD93F9" },
  Customer: { bg: "rgba(255,255,255,0.06)", text: "rgba(255,255,255,0.5)" },
};

export default function Users() {
  const [search, setSearch]  = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const roles = ["all", "Admin", "Manager", "Editor", "Customer"];

  const filtered = usersData.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
                        u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === "all" || u.role === roleFilter;
    return matchSearch && matchRole;
  });

  const activeCount   = usersData.filter(u => u.status === "active").length;
  const inactiveCount = usersData.filter(u => u.status === "inactive").length;

  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Users",    value: usersData.length, icon: User,      color: "var(--glow-blue)"   },
          { label: "Active",         value: activeCount,       icon: UserCheck, color: "var(--acid)"        },
          { label: "Inactive",       value: inactiveCount,     icon: UserX,     color: "var(--glow-red)"    },
          { label: "Admins",         value: usersData.filter(u => u.role === "Admin" || u.role === "Manager").length, icon: Shield, color: "var(--glow-purple)" },
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

      {/* Users Table */}
      <div className="rounded-2xl" style={{ background: "var(--ink-800)", border: "1px solid rgba(255,255,255,0.06)" }}>
        {/* Header */}
        <div className="flex flex-wrap items-center gap-3 p-5 border-b border-white/5">
          <h2 className="text-base text-white flex-1" style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
            User Management
          </h2>

          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
               style={{ background: "var(--ink-700)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <Search size={14} className="text-white/30" />
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-transparent text-white/70 placeholder-white/25 text-xs outline-none w-32"
            />
          </div>

          {/* Role filter */}
          <div className="flex gap-1 rounded-lg p-1" style={{ background: "var(--ink-700)" }}>
            {roles.map(r => (
              <button
                key={r}
                onClick={() => setRoleFilter(r)}
                className="text-xs px-2.5 py-1.5 rounded-md capitalize transition-all"
                style={{
                  background: roleFilter === r ? "rgba(200,241,53,0.15)" : "transparent",
                  color: roleFilter === r ? "var(--acid)" : "rgba(255,255,255,0.35)",
                  fontWeight: roleFilter === r ? 500 : 400,
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                {["User", "Email", "Role", "Orders", "Joined", "Status"].map(h => (
                  <th key={h} className="text-left px-5 py-3">
                    <span className="text-xs uppercase tracking-wider text-white/30"
                          style={{ fontFamily: "JetBrains Mono, monospace" }}>
                      {h}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(user => (
                <tr key={user.id} className="border-b border-white/[0.025] last:border-0 hover:bg-white/[0.025] transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-700 text-black flex-shrink-0"
                           style={{ background: `hsl(${user.name.charCodeAt(0) * 47 % 360}, 55%, 60%)`, fontWeight: 700 }}>
                        {user.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">{user.name}</p>
                        <p className="text-white/30 text-xs" style={{ fontFamily: "JetBrains Mono, monospace" }}>{user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-white/45 text-sm">{user.email}</td>
                  <td className="px-5 py-3.5">
                    <span className="text-xs px-2.5 py-1 rounded-full"
                          style={{ background: roleColors[user.role]?.bg, color: roleColors[user.role]?.text, fontWeight: 500 }}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-white/60 font-mono text-sm"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {user.orders}
                  </td>
                  <td className="px-5 py-3.5 text-white/35 text-xs"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {user.joined}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs px-2.5 py-1 rounded-full ${user.status === "active" ? "badge-completed" : "badge-cancelled"}`}
                          style={{ fontWeight: 500 }}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3.5 border-t border-white/5">
          <p className="text-xs text-white/25">Showing {filtered.length} of {usersData.length} users</p>
        </div>
      </div>
    </div>
  );
}
