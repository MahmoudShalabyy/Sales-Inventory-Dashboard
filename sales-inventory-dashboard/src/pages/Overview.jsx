import React from 'react';
import { TrendingUp, TrendingDown, Package, ShoppingCart, DollarSign, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { LineChart, BarChart, DoughnutChart } from '../components/Charts';
import { dashboardStats, chartData } from '../data/mockData';

const StatCard = ({ title, value, change, icon: Icon, trend }) => {
  const isPositive = trend === 'up';
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs text-muted-foreground">
          {isPositive ? (
            <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
          ) : (
            <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
          )}
          <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
            {change}%
          </span>
          <span className="ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
};

const Overview = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: `$${dashboardStats.totalSales.toLocaleString()}`,
      change: dashboardStats.salesGrowth,
      icon: DollarSign,
      trend: 'up'
    },
    {
      title: 'Total Orders',
      value: dashboardStats.totalOrders.toLocaleString(),
      change: dashboardStats.orderGrowth,
      icon: ShoppingCart,
      trend: 'up'
    },
    {
      title: 'Total Products',
      value: dashboardStats.totalProducts.toLocaleString(),
      change: 2.1,
      icon: Package,
      trend: 'up'
    },
    {
      title: 'Low Stock Items',
      value: dashboardStats.lowStockItems.toLocaleString(),
      change: -5.2,
      icon: Package,
      trend: 'down'
    }
  ];

  // Chart data configurations
  const salesLineData = {
    labels: chartData.salesByMonth.map(item => item.month),
    datasets: [
      {
        label: 'Sales ($)',
        data: chartData.salesByMonth.map(item => item.sales),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Orders',
        data: chartData.salesByMonth.map(item => item.orders * 100), // Scale for visibility
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        yAxisID: 'y1'
      }
    ]
  };

  const categoryDoughnutData = {
    labels: chartData.salesByCategory.map(item => item.category),
    datasets: [
      {
        data: chartData.salesByCategory.map(item => item.value),
        backgroundColor: chartData.salesByCategory.map(item => item.color),
        borderWidth: 2,
        borderColor: '#fff'
      }
    ]
  };

  const inventoryBarData = {
    labels: chartData.inventoryStatus.map(item => item.status),
    datasets: [
      {
        label: 'Products',
        data: chartData.inventoryStatus.map(item => item.count),
        backgroundColor: chartData.inventoryStatus.map(item => item.color),
        borderRadius: 4,
        borderSkipped: false
      }
    ]
  };

  const lineChartOptions = {
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Sales ($)'
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Orders'
        },
        grid: {
          drawOnChartArea: false,
        },
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Sales Trend Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Sales Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <LineChart data={salesLineData} options={lineChartOptions} />
            </div>
          </CardContent>
        </Card>

        {/* Sales by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <DoughnutChart data={categoryDoughnutData} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Charts and Info */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Inventory Status */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <BarChart data={inventoryBarData} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New order received</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Inventory updated</p>
                  <p className="text-xs text-muted-foreground">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Low stock alert</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Avg. Order Value</span>
                <span className="text-sm font-bold">${dashboardStats.avgOrderValue}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Inventory Turnover</span>
                <span className="text-sm font-bold">{dashboardStats.inventoryTurnover}x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Customer Satisfaction</span>
                <span className="text-sm font-bold">4.8/5</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;

