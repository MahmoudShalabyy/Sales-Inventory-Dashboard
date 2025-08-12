// Mock data for Sales & Inventory Dashboard

export const salesData = [
  {
    id: 1,
    date: '2024-01-15',
    product: 'Laptop Pro 15"',
    category: 'Electronics',
    quantity: 2,
    unitPrice: 1299.99,
    totalAmount: 2599.98,
    status: 'completed',
    customer: 'John Smith',
    salesRep: 'Alice Johnson'
  },
  {
    id: 2,
    date: '2024-01-16',
    product: 'Wireless Mouse',
    category: 'Electronics',
    quantity: 5,
    unitPrice: 29.99,
    totalAmount: 149.95,
    status: 'completed',
    customer: 'Sarah Wilson',
    salesRep: 'Bob Davis'
  },
  {
    id: 3,
    date: '2024-01-17',
    product: 'Office Chair',
    category: 'Furniture',
    quantity: 1,
    unitPrice: 299.99,
    totalAmount: 299.99,
    status: 'pending',
    customer: 'Mike Brown',
    salesRep: 'Carol White'
  },
  {
    id: 4,
    date: '2024-01-18',
    product: 'Desk Lamp',
    category: 'Furniture',
    quantity: 3,
    unitPrice: 49.99,
    totalAmount: 149.97,
    status: 'completed',
    customer: 'Emma Davis',
    salesRep: 'Alice Johnson'
  },
  {
    id: 5,
    date: '2024-01-19',
    product: 'Smartphone',
    category: 'Electronics',
    quantity: 1,
    unitPrice: 799.99,
    totalAmount: 799.99,
    status: 'cancelled',
    customer: 'David Lee',
    salesRep: 'Bob Davis'
  }
];

export const inventoryData = [
  {
    id: 1,
    sku: 'LP001',
    name: 'Laptop Pro 15"',
    category: 'Electronics',
    currentStock: 25,
    minStock: 10,
    maxStock: 100,
    unitPrice: 1299.99,
    supplier: 'TechCorp',
    lastRestocked: '2024-01-10',
    status: 'in-stock'
  },
  {
    id: 2,
    sku: 'WM002',
    name: 'Wireless Mouse',
    category: 'Electronics',
    currentStock: 150,
    minStock: 50,
    maxStock: 300,
    unitPrice: 29.99,
    supplier: 'AccessoryPlus',
    lastRestocked: '2024-01-12',
    status: 'in-stock'
  },
  {
    id: 3,
    sku: 'OC003',
    name: 'Office Chair',
    category: 'Furniture',
    currentStock: 8,
    minStock: 15,
    maxStock: 50,
    unitPrice: 299.99,
    supplier: 'FurnitureCo',
    lastRestocked: '2024-01-05',
    status: 'low-stock'
  },
  {
    id: 4,
    sku: 'DL004',
    name: 'Desk Lamp',
    category: 'Furniture',
    currentStock: 45,
    minStock: 20,
    maxStock: 80,
    unitPrice: 49.99,
    supplier: 'LightingInc',
    lastRestocked: '2024-01-14',
    status: 'in-stock'
  },
  {
    id: 5,
    sku: 'SP005',
    name: 'Smartphone',
    category: 'Electronics',
    currentStock: 0,
    minStock: 5,
    maxStock: 50,
    unitPrice: 799.99,
    supplier: 'MobileTech',
    lastRestocked: '2023-12-20',
    status: 'out-of-stock'
  }
];

export const chartData = {
  salesByMonth: [
    { month: 'Jan', sales: 12500, orders: 45 },
    { month: 'Feb', sales: 15200, orders: 52 },
    { month: 'Mar', sales: 18900, orders: 61 },
    { month: 'Apr', sales: 16700, orders: 58 },
    { month: 'May', sales: 21300, orders: 67 },
    { month: 'Jun', sales: 19800, orders: 63 }
  ],
  salesByCategory: [
    { category: 'Electronics', value: 65, color: '#3b82f6' },
    { category: 'Furniture', value: 25, color: '#10b981' },
    { category: 'Accessories', value: 10, color: '#f59e0b' }
  ],
  inventoryStatus: [
    { status: 'In Stock', count: 45, color: '#10b981' },
    { status: 'Low Stock', count: 12, color: '#f59e0b' },
    { status: 'Out of Stock', count: 3, color: '#ef4444' }
  ]
};

export const dashboardStats = {
  totalSales: 89750,
  totalOrders: 234,
  totalProducts: 60,
  lowStockItems: 12,
  salesGrowth: 12.5,
  orderGrowth: 8.3,
  inventoryTurnover: 4.2,
  avgOrderValue: 383.55
};

export const categories = [
  'All Categories',
  'Electronics',
  'Furniture',
  'Accessories',
  'Office Supplies',
  'Home & Garden'
];

export const salesStatuses = [
  'All Statuses',
  'completed',
  'pending',
  'cancelled'
];

export const inventoryStatuses = [
  'All Statuses',
  'in-stock',
  'low-stock',
  'out-of-stock'
];

