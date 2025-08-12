import React, { useState } from 'react';
import { Download, Calendar, TrendingUp, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/button';
import { Select, SelectItem } from '../components/ui/Select';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('last-30-days');
  const [selectedReport, setSelectedReport] = useState('sales-summary');

  const reportTypes = [
    { value: 'sales-summary', label: 'Sales Summary' },
    { value: 'inventory-report', label: 'Inventory Report' },
    { value: 'customer-analysis', label: 'Customer Analysis' },
    { value: 'product-performance', label: 'Product Performance' }
  ];

  const timePeriods = [
    { value: 'last-7-days', label: 'Last 7 Days' },
    { value: 'last-30-days', label: 'Last 30 Days' },
    { value: 'last-90-days', label: 'Last 90 Days' },
    { value: 'this-year', label: 'This Year' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const handleExportCSV = (reportType) => {
    // This would typically generate and download a CSV file
    console.log(`Exporting ${reportType} as CSV`);
    alert(`Exporting ${reportType} report as CSV file...`);
  };

  const handleExportPDF = (reportType) => {
    // This would typically generate and download a PDF file
    console.log(`Exporting ${reportType} as PDF`);
    alert(`Exporting ${reportType} report as PDF file...`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          Generate and export detailed business reports
        </p>
      </div>

      {/* Report Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Report Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Report Type</label>
              <Select value={selectedReport} onValueChange={setSelectedReport}>
                {reportTypes.map(type => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Time Period</label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                {timePeriods.map(period => (
                  <SelectItem key={period.value} value={period.value}>
                    {period.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reports */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales Report</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$89,750</div>
            <p className="text-xs text-muted-foreground">Total sales this month</p>
            <div className="flex space-x-2 mt-4">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleExportCSV('sales-report')}
              >
                <Download className="mr-1 h-3 w-3" />
                CSV
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleExportPDF('sales-report')}
              >
                <Download className="mr-1 h-3 w-3" />
                PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory Report</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">60</div>
            <p className="text-xs text-muted-foreground">Products in inventory</p>
            <div className="flex space-x-2 mt-4">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleExportCSV('inventory-report')}
              >
                <Download className="mr-1 h-3 w-3" />
                CSV
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleExportPDF('inventory-report')}
              >
                <Download className="mr-1 h-3 w-3" />
                PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Report</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Active customers</p>
            <div className="flex space-x-2 mt-4">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleExportCSV('customer-report')}
              >
                <Download className="mr-1 h-3 w-3" />
                CSV
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleExportPDF('customer-report')}
              >
                <Download className="mr-1 h-3 w-3" />
                PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Performance Report</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12.5%</div>
            <p className="text-xs text-muted-foreground">Growth this month</p>
            <div className="flex space-x-2 mt-4">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleExportCSV('performance-report')}
              >
                <Download className="mr-1 h-3 w-3" />
                CSV
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleExportPDF('performance-report')}
              >
                <Download className="mr-1 h-3 w-3" />
                PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Report Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Report Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {reportTypes.find(r => r.value === selectedReport)?.label} - {timePeriods.find(p => p.value === selectedPeriod)?.label}
              </h3>
              <div className="flex space-x-2">
                <Button 
                  variant="outline"
                  onClick={() => handleExportCSV(selectedReport)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleExportPDF(selectedReport)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export PDF
                </Button>
              </div>
            </div>
            
            <div className="border rounded-lg p-6 bg-muted/50">
              <div className="text-center py-12">
                <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Report Preview</h3>
                <p className="text-muted-foreground mb-4">
                  Select a report type and time period to generate a detailed report preview.
                </p>
                <Button>Generate Report</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Sales Summary - January 2024</h4>
                <p className="text-sm text-muted-foreground">Generated on Jan 31, 2024</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">View</Button>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Inventory Report - January 2024</h4>
                <p className="text-sm text-muted-foreground">Generated on Jan 30, 2024</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">View</Button>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Customer Analysis - Q4 2023</h4>
                <p className="text-sm text-muted-foreground">Generated on Dec 31, 2023</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">View</Button>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;

