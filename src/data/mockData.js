// src/data/mockData.js

export const statsData = {
  totalUsers: 24893,
  totalOrders: 8472,
  totalRevenue: 392840,
  pendingOrders: 314,
};

export const monthlySales = [
  { month: "Jan", orders: 420, revenue: 31200 },
  { month: "Feb", orders: 380, revenue: 28900 },
  { month: "Mar", orders: 510, revenue: 41800 },
  { month: "Apr", orders: 620, revenue: 53400 },
  { month: "May", orders: 490, revenue: 38700 },
  { month: "Jun", orders: 710, revenue: 62100 },
  { month: "Jul", orders: 830, revenue: 74300 },
  { month: "Aug", orders: 760, revenue: 68900 },
  { month: "Sep", orders: 910, revenue: 81200 },
  { month: "Oct", orders: 1050, revenue: 93600 },
  { month: "Nov", orders: 980, revenue: 87400 },
  { month: "Dec", orders: 1120, revenue: 101800 },
];

export const recentOrders = [
  { id: "#ORD-8472", customer: "Anika Perera",    product: "Wireless Headphones",  amount: 129.99, status: "completed",  date: "2025-05-04" },
  { id: "#ORD-8471", customer: "Kasun Silva",     product: "Mechanical Keyboard",   amount: 89.50,  status: "pending",    date: "2025-05-04" },
  { id: "#ORD-8470", customer: "Priya Nair",      product: "USB-C Hub (7-in-1)",    amount: 54.00,  status: "processing", date: "2025-05-03" },
  { id: "#ORD-8469", customer: "Daniel Fernando", product: "4K Webcam",             amount: 199.99, status: "completed",  date: "2025-05-03" },
  { id: "#ORD-8468", customer: "Sahan Bandara",   product: "Portable SSD 1TB",      amount: 79.99,  status: "cancelled",  date: "2025-05-02" },
  { id: "#ORD-8467", customer: "Nimali Jayawick.", product: "Smart Watch Pro",       amount: 349.00, status: "completed",  date: "2025-05-02" },
  { id: "#ORD-8466", customer: "Roshan Gunaward.",product: "Gaming Mouse",           amount: 45.00,  status: "pending",    date: "2025-05-01" },
  { id: "#ORD-8465", customer: "Tharushi Mendis", product: "Noise Cancelling Buds", amount: 159.99, status: "processing", date: "2025-05-01" },
];

export const allOrders = [
  ...recentOrders,
  { id: "#ORD-8464", customer: "Lahiru Rathnayake", product: "Standing Desk Mat",     amount: 39.99,  status: "completed",  date: "2025-04-30" },
  { id: "#ORD-8463", customer: "Chamari Dissan.",   product: "Monitor Light Bar",      amount: 65.00,  status: "completed",  date: "2025-04-30" },
  { id: "#ORD-8462", customer: "Nuwan Priyasad.",   product: "Laptop Stand",           amount: 29.50,  status: "pending",    date: "2025-04-29" },
  { id: "#ORD-8461", customer: "Ishara Wijeratne",  product: "Cable Management Kit",   amount: 19.99,  status: "cancelled",  date: "2025-04-29" },
  { id: "#ORD-8460", customer: "Gayan Samarasinghe",product: "RGB Mouse Pad XL",       amount: 34.99,  status: "completed",  date: "2025-04-28" },
  { id: "#ORD-8459", customer: "Dilani Kumari",     product: "Wireless Charger Pad",   amount: 24.99,  status: "processing", date: "2025-04-28" },
];

export const usersData = [
  { id: "USR-001", name: "Anika Perera",       email: "anika@email.com",    role: "Admin",    orders: 24, joined: "2023-01-12", status: "active"    },
  { id: "USR-002", name: "Kasun Silva",         email: "kasun@email.com",    role: "Customer", orders: 8,  joined: "2023-03-08", status: "active"    },
  { id: "USR-003", name: "Priya Nair",          email: "priya@email.com",    role: "Customer", orders: 15, joined: "2023-05-22", status: "active"    },
  { id: "USR-004", name: "Daniel Fernando",     email: "daniel@email.com",   role: "Manager",  orders: 31, joined: "2022-11-04", status: "active"    },
  { id: "USR-005", name: "Sahan Bandara",       email: "sahan@email.com",    role: "Customer", orders: 3,  joined: "2024-01-19", status: "inactive"  },
  { id: "USR-006", name: "Nimali Jayawickrama", email: "nimali@email.com",   role: "Customer", orders: 42, joined: "2022-08-14", status: "active"    },
  { id: "USR-007", name: "Roshan Gunawardena",  email: "roshan@email.com",   role: "Customer", orders: 7,  joined: "2024-02-28", status: "active"    },
  { id: "USR-008", name: "Tharushi Mendis",     email: "tharushi@email.com", role: "Customer", orders: 11, joined: "2023-09-15", status: "active"    },
  { id: "USR-009", name: "Lahiru Rathnayake",   email: "lahiru@email.com",   role: "Editor",   orders: 19, joined: "2023-06-30", status: "active"    },
  { id: "USR-010", name: "Chamari Dissanayake", email: "chamari@email.com",  role: "Customer", orders: 6,  joined: "2024-03-11", status: "inactive"  },
];

export const categoryBreakdown = [
  { name: "Electronics",  value: 38 },
  { name: "Accessories",  value: 27 },
  { name: "Peripherals",  value: 21 },
  { name: "Wearables",    value: 14 },
];

export const trafficSources = [
  { source: "Organic Search", visits: 12430, conversion: 3.4 },
  { source: "Direct",         visits: 8920,  conversion: 4.1 },
  { source: "Social Media",   visits: 6710,  conversion: 2.8 },
  { source: "Email Campaign", visits: 4320,  conversion: 5.2 },
  { source: "Referral",       visits: 2870,  conversion: 3.9 },
];
