// src/components/Navbar.jsx
import { Search, Bell, Sun, RefreshCw } from "lucide-react";

const pageTitles = {
  dashboard: { title: "Dashboard",   sub: "Welcome back — here's what's happening" },
  orders:    { title: "Orders",      sub: "Track and manage all customer orders"    },
  users:     { title: "Users",       sub: "Manage your user base and permissions"   },
  reports:   { title: "Reports",     sub: "Analytics, traffic & performance data"   },
};

export default function Navbar({ activePage }) {
  const { title, sub } = pageTitles[activePage] || pageTitles.dashboard;
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });

  return (
    <header className="flex items-center gap-4 px-6 py-4 border-b border-white/5 flex-shrink-0"
            style={{ background: "var(--ink-950)" }}>
      {/* Title */}
      <div className="flex-1 pl-8 lg:pl-0">
        <h1 className="text-xl text-white" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
          {title}
        </h1>
        <p className="text-xs text-white/35 mt-0.5">{sub}</p>
      </div>

      {/* Date */}
      <div className="hidden md:flex items-center gap-1.5 text-white/30 text-xs"
           style={{ fontFamily: "JetBrains Mono, monospace" }}>
        <Sun size={12} />
        {dateStr}
      </div>

      {/* Search */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-white/35 text-sm"
           style={{ background: "var(--ink-800)", border: "1px solid rgba(255,255,255,0.06)" }}>
        <Search size={14} />
        <span className="hidden md:block text-xs text-white/30">Search...</span>
        <kbd className="hidden md:block text-[10px] px-1.5 py-0.5 rounded text-white/20"
             style={{ background: "var(--ink-700)", fontFamily: "JetBrains Mono, monospace" }}>
          ⌘K
        </kbd>
      </div>

      {/* Refresh */}
      <button className="w-9 h-9 rounded-lg flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/5 transition-all">
        <RefreshCw size={15} />
      </button>

      {/* Notifications */}
      <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/5 transition-all">
        <Bell size={15} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
              style={{ background: "var(--acid)" }} />
      </button>
    </header>
  );
}
