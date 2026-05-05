# InsightBoard — React Admin Analytics Dashboard

> A sleek, dark-themed admin analytics dashboard built with **React**, **Tailwind CSS**, and **Recharts**.

## Features

- 4 Stat Cards — Total Users, Orders, Revenue, Pending Orders with trend indicators
- Interactive Sales Chart — Area & Bar chart toggle, filter by Orders / Revenue / Both
- Category Pie Chart — Breakdown by product category
- Orders Table — Sortable, filterable by status
- Users Management — Search, role filter, status badges
- Reports Page — Revenue trend, traffic sources with conversion rates
- Dark UI — Custom dark theme with acid-green accents
- Fully Responsive — Mobile sidebar, collapsible desktop sidebar

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── StatCard.jsx
│   ├── SalesChart.jsx
│   └── OrdersTable.jsx
├── data/
│   └── mockData.js
├── pages/
│   ├── Dashboard.jsx
│   ├── Orders.jsx
│   ├── Users.jsx
│   └── Reports.jsx
├── App.jsx
└── main.jsx
```

## Getting Started

```bash
git clone https://github.com/yourusername/insightboard.git
cd insightboard
npm install
npm run dev
```

Open http://localhost:5173

## Tech Stack

- React 18 + Vite
- Tailwind CSS 3
- Recharts
- Lucide React icons

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build
```

## Connecting to a Real API

Replace imports in pages from `"../data/mockData"` with your own API hooks/services.

## License

MIT
