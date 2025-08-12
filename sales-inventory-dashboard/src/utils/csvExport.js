import Papa from 'papaparse';

/**
 * Export data to CSV file
 * @param {Array} data - Array of objects to export
 * @param {string} filename - Name of the file (without extension)
 * @param {Array} fields - Optional array of field names to include
 */
export const exportToCSV = (data, filename, fields = null) => {
  try {
    // Filter fields if specified
    let exportData = data;
    if (fields && fields.length > 0) {
      exportData = data.map(item => {
        const filteredItem = {};
        fields.forEach(field => {
          if (item.hasOwnProperty(field)) {
            filteredItem[field] = item[field];
          }
        });
        return filteredItem;
      });
    }

    // Convert to CSV
    const csv = Papa.unparse(exportData, {
      header: true,
      skipEmptyLines: true
    });

    // Create and download file
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `${filename}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
    
    return true;
  } catch (error) {
    console.error('Error exporting CSV:', error);
    return false;
  }
};

/**
 * Export sales data to CSV
 * @param {Array} salesData - Sales data array
 * @param {string} filename - Optional filename
 */
export const exportSalesCSV = (salesData, filename = 'sales-report') => {
  const fields = [
    'id',
    'date',
    'product',
    'category',
    'customer',
    'quantity',
    'unitPrice',
    'totalAmount',
    'status',
    'salesRep'
  ];
  
  return exportToCSV(salesData, filename, fields);
};

/**
 * Export inventory data to CSV
 * @param {Array} inventoryData - Inventory data array
 * @param {string} filename - Optional filename
 */
export const exportInventoryCSV = (inventoryData, filename = 'inventory-report') => {
  const fields = [
    'sku',
    'name',
    'category',
    'currentStock',
    'minStock',
    'maxStock',
    'unitPrice',
    'supplier',
    'lastRestocked',
    'status'
  ];
  
  return exportToCSV(inventoryData, filename, fields);
};

/**
 * Format data for CSV export with custom headers
 * @param {Array} data - Data to format
 * @param {Object} headerMap - Mapping of field names to display names
 */
export const formatDataForExport = (data, headerMap = {}) => {
  return data.map(item => {
    const formattedItem = {};
    Object.keys(item).forEach(key => {
      const displayName = headerMap[key] || key;
      let value = item[key];
      
      // Format specific data types
      if (key.includes('date') || key.includes('Date')) {
        value = new Date(value).toLocaleDateString();
      } else if (key.includes('price') || key.includes('Price') || key.includes('amount') || key.includes('Amount')) {
        value = typeof value === 'number' ? `$${value.toFixed(2)}` : value;
      }
      
      formattedItem[displayName] = value;
    });
    return formattedItem;
  });
};

