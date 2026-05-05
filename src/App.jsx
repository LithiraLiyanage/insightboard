// src/App.jsx
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar  from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Orders    from "./pages/Orders";
import Users     from "./pages/Users";
import Reports   from "./pages/Reports";

const pages = {
  dashboard: Dashboard,
  orders:    Orders,
  users:     Users,
  reports:   Reports,
};

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const PageComponent = pages[activePage] || Dashboard;

  return (
    <div className="flex h-screen overflow-hidden grid-bg" style={{ background: "var(--ink-950)" }}>
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Navbar activePage={activePage} />
        <main className="flex-1 overflow-y-auto">
          <PageComponent />
        </main>
      </div>
    </div>
  );
}
