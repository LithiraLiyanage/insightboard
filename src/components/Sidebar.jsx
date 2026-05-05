// src/components/Sidebar.jsx
import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  Bell,
  ChevronRight,
  Zap,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", page: "dashboard" },
  { icon: ShoppingCart,    label: "Orders",    page: "orders"    },
  { icon: Users,           label: "Users",     page: "users"     },
  { icon: BarChart3,       label: "Reports",   page: "reports"   },
];

const bottomItems = [
  { icon: Bell,     label: "Notifications", badge: 3 },
  { icon: Settings, label: "Settings"              },
];

export default function Sidebar({ activePage, onNavigate }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-6 border-b border-white/5">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
             style={{ background: "var(--acid)" }}>
          <Zap size={16} className="text-black" strokeWidth={2.5} />
        </div>
        {!collapsed && (
          <span className="font-display font-700 text-white text-lg tracking-tight"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
            Insight<span style={{ color: "var(--acid)" }}>Board</span>
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto text-white/30 hover:text-white/70 transition-colors hidden lg:block"
        >
          <ChevronRight size={16} className={`transition-transform ${collapsed ? "" : "rotate-180"}`} />
        </button>
      </div>

      {/* Nav Section Label */}
      {!collapsed && (
        <div className="px-5 pt-6 pb-2">
          <p className="text-xs font-mono uppercase tracking-widest text-white/25"
             style={{ fontFamily: "JetBrains Mono, monospace" }}>
            Navigation
          </p>
        </div>
      )}

      {/* Nav Items */}
      <nav className="flex-1 px-3 space-y-1 mt-2">
        {navItems.map(({ icon: Icon, label, page }) => {
          const isActive = activePage === page;
          return (
            <button
              key={page}
              onClick={() => { onNavigate(page); setMobileOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-all duration-200
                ${isActive
                  ? "nav-active text-white"
                  : "text-white/40 hover:text-white/80 hover:bg-white/5"
                }
                ${collapsed ? "justify-center" : ""}
              `}
              title={collapsed ? label : ""}
            >
              <Icon size={18} className={isActive ? "" : ""} strokeWidth={isActive ? 2 : 1.5} />
              {!collapsed && (
                <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: isActive ? 500 : 400 }}>
                  {label}
                </span>
              )}
              {!collapsed && isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: "var(--acid)" }} />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Items */}
      <div className="px-3 pb-4 space-y-1 border-t border-white/5 pt-4">
        {!collapsed && (
          <p className="text-xs font-mono uppercase tracking-widest text-white/25 px-3 pb-2"
             style={{ fontFamily: "JetBrains Mono, monospace" }}>
            Account
          </p>
        )}
        {bottomItems.map(({ icon: Icon, label, badge }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/40 hover:text-white/70 hover:bg-white/5 transition-all relative"
            title={collapsed ? label : ""}
          >
            <Icon size={17} strokeWidth={1.5} />
            {!collapsed && <span>{label}</span>}
            {badge && (
              <span className="ml-auto text-xs px-1.5 py-0.5 rounded-full text-black font-600 text-[10px]"
                    style={{ background: "var(--acid)", fontWeight: 600 }}>
                {badge}
              </span>
            )}
          </button>
        ))}

        {/* User Profile */}
        <div className={`flex items-center gap-3 px-3 py-3 mt-2 rounded-lg bg-white/5 border border-white/8 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-700 flex-shrink-0 text-black"
               style={{ background: "linear-gradient(135deg, var(--acid) 0%, #8FBF00 100%)", fontWeight: 700 }}>
            AD
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/80 font-500 truncate" style={{ fontWeight: 500 }}>Admin User</p>
              <p className="text-[10px] text-white/30 truncate">admin@insightboard.io</p>
            </div>
          )}
          {!collapsed && <LogOut size={14} className="text-white/25 flex-shrink-0" />}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ background: "var(--ink-800)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {mobileOpen ? <X size={16} className="text-white" /> : <Menu size={16} className="text-white" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/70 z-30" onClick={() => setMobileOpen(false)} />
      )}

      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col h-screen sticky top-0 flex-shrink-0 transition-all duration-300 border-r border-white/5`}
        style={{
          width: collapsed ? "64px" : "220px",
          background: "var(--ink-900)",
        }}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full z-40 flex flex-col transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ width: "220px", background: "var(--ink-900)", borderRight: "1px solid rgba(255,255,255,0.05)" }}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
