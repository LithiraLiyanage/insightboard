<div align="center">

<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/Recharts-3-FF6384?style=for-the-badge&logo=chart.js&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/License-MIT-C8F135?style=for-the-badge" />

<br /><br />

```
    ██╗███╗   ██╗███████╗██╗ ██████╗ ██╗  ██╗████████╗██████╗  ██████╗  █████╗ ██████╗ ██████╗ 
    ██║████╗  ██║██╔════╝██║██╔════╝ ██║  ██║╚══██╔══╝██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔══██╗
    ██║██╔██╗ ██║███████╗██║██║  ███╗███████║   ██║   ██████╔╝██║   ██║███████║██████╔╝██║  ██║
    ██║██║╚██╗██║╚════██║██║██║   ██║██╔══██║   ██║   ██╔══██╗██║   ██║██╔══██║██╔══██╗██║  ██║
    ██║██║ ╚████║███████║██║╚██████╔╝██║  ██║   ██║   ██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝
    ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ 
```

### ⚡ A sleek, dark-themed Admin Analytics Dashboard
**Built with React · Tailwind CSS · Recharts · Vite**

[🚀 Live Demo](#) · [📦 Download](#) · [🐛 Report Bug](../../issues) · [✨ Request Feature](../../issues)

<br />

</div>

---

## 📸 Preview

![InsightBoard Dashboard Preview](assets/dashboard-preview.png)

> *Dark-themed dashboard with acid-green accents, interactive charts, and fully responsive sidebar*

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📊 **Stat Cards** | Total Users, Orders, Revenue & Pending Orders with live trend indicators |
| 📈 **Sales Chart** | Switchable Area/Bar chart — filter by Orders, Revenue, or Both |
| 🥧 **Category Pie** | Interactive donut chart with product category breakdown |
| 🗂️ **Orders Table** | Fully sortable & filterable by status — with CSV export button |
| 👥 **User Management** | Search by name/email, filter by role, status badges |
| 📉 **Reports Page** | Revenue trends, traffic sources & conversion rate analytics |
| 🌙 **Dark Theme** | Custom dark UI with acid-green `#C8F135` accent system |
| 📱 **Responsive** | Mobile-first — collapsible desktop sidebar + mobile drawer |
| ⚡ **Animations** | Staggered card entrances, hover states, smooth transitions |
| 🔌 **API Ready** | All data in `mockData.js` — swap with real API in minutes |

---

## 🗂️ Project Structure

```
insightboard/
├── 📁 public/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 🧩 Sidebar.jsx        ← Collapsible nav sidebar
│   │   ├── 🧩 Navbar.jsx         ← Top header with search & notifications
│   │   ├── 🧩 StatCard.jsx       ← Reusable metric card component
│   │   ├── 🧩 SalesChart.jsx     ← Area/Bar chart (Recharts)
│   │   └── 🧩 OrdersTable.jsx    ← Sortable & filterable data table
│   ├── 📁 data/
│   │   └── 📄 mockData.js        ← All mock data (replace with API later)
│   ├── 📁 pages/
│   │   ├── 📄 Dashboard.jsx      ← Main overview page
│   │   ├── 📄 Orders.jsx         ← Orders management page
│   │   ├── 📄 Users.jsx          ← User management page
│   │   └── 📄 Reports.jsx        ← Analytics & reports page
│   ├── ⚛️  App.jsx               ← Root component + page routing
│   ├── ⚛️  main.jsx              ← React entry point
│   └── 🎨 index.css             ← Global styles + Tailwind directives
├── 🔧 tailwind.config.js
├── 🔧 vite.config.js
└── 📦 package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js v18+** installed:

```bash
node -v   # Should print v18.x.x or higher
```

> 💡 Don't have Node.js? Download it from [nodejs.org](https://nodejs.org) (choose LTS version)

---

### ⚙️ Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/insightboard.git
cd insightboard
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

**4. Open in browser**
```
http://localhost:5173
```

🎉 **You should now see the InsightBoard dashboard!**

---

## 📦 Available Scripts

```bash
npm run dev       # 🔥 Start development server (hot reload)
npm run build     # 📦 Build for production
npm run preview   # 👀 Preview production build locally
npm run lint      # 🔍 Run ESLint checks
```

---

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center"><img src="https://skillicons.dev/icons?i=react" width="40"/><br/><b>React 18</b><br/>UI Framework</td>
    <td align="center"><img src="https://skillicons.dev/icons?i=vite" width="40"/><br/><b>Vite 8</b><br/>Build Tool</td>
    <td align="center"><img src="https://skillicons.dev/icons?i=tailwind" width="40"/><br/><b>Tailwind CSS 3</b><br/>Styling</td>
    <td align="center"><img src="https://skillicons.dev/icons?i=js" width="40"/><br/><b>Recharts 3</b><br/>Charts</td>
    <td align="center"><img src="https://skillicons.dev/icons?i=git" width="40"/><br/><b>Lucide React</b><br/>Icons</td>
  </tr>
</table>

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--ink-950` | `#0A0C10` | Page background |
| `--ink-800` | `#161B26` | Card background |
| `--acid` | `#C8F135` | Primary accent |
| `--glow-blue` | `#4DFFDF` | Success / Users |
| `--glow-purple` | `#BD93F9` | Revenue / Info |
| `--glow-orange` | `#FFB86C` | Pending / Warning |
| `--glow-red` | `#FF6B6B` | Cancelled / Danger |

### Typography

| Role | Font |
|------|------|
| Display / Headings | [Syne](https://fonts.google.com/specimen/Syne) |
| Body / UI Text | [DM Sans](https://fonts.google.com/specimen/DM+Sans) |
| Code / Labels | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |

---

## 🔌 Connecting to a Real API

All mock data lives in `src/data/mockData.js`. To connect a real backend:

**1. Create a custom hook:**
```js
// src/hooks/useStats.js
import { useState, useEffect } from "react";

export function useStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/stats")
      .then(res => res.json())
      .then(data => { setStats(data); setLoading(false); });
  }, []);

  return { stats, loading };
}
```

**2. Use in your page:**
```js
// Replace mockData import with your hook
import { useStats } from "../hooks/useStats";

export default function Dashboard() {
  const { stats, loading } = useStats();
  if (loading) return <p>Loading...</p>;
  // ...
}
```

---

## 📄 Pages Overview

| Page | Description | Key Components |
|------|-------------|---------------|
| 🏠 **Dashboard** | KPI overview with charts | StatCard, SalesChart, PieChart, OrdersTable |
| 🛒 **Orders** | Order management + volume chart | OrdersTable, BarChart, Status badges |
| 👥 **Users** | User list with search & filters | Search input, Role filter, Status badges |
| 📊 **Reports** | Revenue & traffic analytics | AreaChart, Progress bars, Traffic sources |

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm not found` | Install Node.js from [nodejs.org](https://nodejs.org) |
| `Port 5173 in use` | Run `npm run dev -- --port 3000` |
| `Module not found` | Delete `node_modules` → run `npm install` again |
| Blank page | Check browser console for errors |
| Styles not loading | Make sure `npm install` completed without errors |

---

## 🤝 Contributing

Contributions are always welcome! Here's how:

1. 🍴 Fork the project
2. 🌿 Create your branch: `git checkout -b feature/AmazingFeature`
3. 💾 Commit changes: `git commit -m 'feat: Add AmazingFeature'`
4. 📤 Push to branch: `git push origin feature/AmazingFeature`
5. 🔁 Open a Pull Request

---

👨‍💻 Developer
💼 Lithira Liyanage 

---

## 📝 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

**Built with ❤️ using React + Tailwind CSS + Recharts**

⭐ **Star this repo if you found it helpful!** ⭐

</div>
