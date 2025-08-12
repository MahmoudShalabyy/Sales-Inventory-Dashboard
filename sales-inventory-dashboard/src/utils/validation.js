/**
 * Validation utility functions
 */

// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (US format)
export const validatePhone = (phone) => {
  const phoneRegex = /^\+?1?[-.\s]?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
  return phoneRegex.test(phone);
};

// Required field validation
export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== '';
};

// Number validation
export const validateNumber = (value, min = null, max = null) => {
  const num = parseFloat(value);
  if (isNaN(num)) return false;
  if (min !== null && num < min) return false;
  if (max !== null && num > max) return false;
  return true;
};

// Integer validation
export const validateInteger = (value, min = null, max = null) => {
  const num = parseInt(value);
  if (isNaN(num) || !Number.isInteger(num)) return false;
  if (min !== null && num < min) return false;
  if (max !== null && num > max) return false;
  return true;
};

// String length validation
export const validateLength = (value, minLength = 0, maxLength = null) => {
  if (!value) return minLength === 0;
  const length = value.toString().length;
  if (length < minLength) return false;
  if (maxLength !== null && length > maxLength) return false;
  return true;
};

// Date validation
export const validateDate = (dateString) => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};

// SKU validation (alphanumeric with optional hyphens/underscores)
export const validateSKU = (sku) => {
  const skuRegex = /^[A-Za-z0-9_-]+$/;
  return skuRegex.test(sku) && sku.length >= 3 && sku.length <= 20;
};

// Price validation (positive number with up to 2 decimal places)
export const validatePrice = (price) => {
  const priceRegex = /^\d+(\.\d{1,2})?$/;
  const num = parseFloat(price);
  return priceRegex.test(price) && num > 0;
};

// Stock validation (non-negative integer)
export const validateStock = (stock) => {
  const num = parseInt(stock);
  return Number.isInteger(num) && num >= 0;
};

// Form validation helper
export const validateForm = (data, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach(field => {
    const value = data[field];
    const fieldRules = rules[field];
    
    // Check required
    if (fieldRules.required && !validateRequired(value)) {
      errors[field] = `${fieldRules.label || field} is required`;
      return;
    }
    
    // Skip other validations if field is empty and not required
    if (!validateRequired(value) && !fieldRules.required) {
      return;
    }
    
    // Check type-specific validations
    if (fieldRules.type === 'email' && !validateEmail(value)) {
      errors[field] = `${fieldRules.label || field} must be a valid email`;
    } else if (fieldRules.type === 'phone' && !validatePhone(value)) {
      errors[field] = `${fieldRules.label || field} must be a valid phone number`;
    } else if (fieldRules.type === 'number' && !validateNumber(value, fieldRules.min, fieldRules.max)) {
      errors[field] = `${fieldRules.label || field} must be a valid number${fieldRules.min !== null ? ` (min: ${fieldRules.min})` : ''}${fieldRules.max !== null ? ` (max: ${fieldRules.max})` : ''}`;
    } else if (fieldRules.type === 'integer' && !validateInteger(value, fieldRules.min, fieldRules.max)) {
      errors[field] = `${fieldRules.label || field} must be a valid integer${fieldRules.min !== null ? ` (min: ${fieldRules.min})` : ''}${fieldRules.max !== null ? ` (max: ${fieldRules.max})` : ''}`;
    } else if (fieldRules.type === 'sku' && !validateSKU(value)) {
      errors[field] = `${fieldRules.label || field} must be a valid SKU (3-20 alphanumeric characters)`;
    } else if (fieldRules.type === 'price' && !validatePrice(value)) {
      errors[field] = `${fieldRules.label || field} must be a valid price`;
    } else if (fieldRules.type === 'stock' && !validateStock(value)) {
      errors[field] = `${fieldRules.label || field} must be a non-negative integer`;
    }
    
    // Check length
    if (fieldRules.minLength || fieldRules.maxLength) {
      if (!validateLength(value, fieldRules.minLength || 0, fieldRules.maxLength)) {
        errors[field] = `${fieldRules.label || field} must be between ${fieldRules.minLength || 0} and ${fieldRules.maxLength || 'unlimited'} characters`;
      }
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Profile form validation rules
export const profileValidationRules = {
  firstName: {
    required: true,
    label: 'First Name',
    minLength: 2,
    maxLength: 50
  },
  lastName: {
    required: true,
    label: 'Last Name',
    minLength: 2,
    maxLength: 50
  },
  email: {
    required: true,
    type: 'email',
    label: 'Email'
  },
  phone: {
    required: false,
    type: 'phone',
    label: 'Phone'
  },
  position: {
    required: false,
    label: 'Position',
    maxLength: 100
  },
  company: {
    required: false,
    label: 'Company',
    maxLength: 100
  }
};

// Inventory form validation rules
export const inventoryValidationRules = {
  sku: {
    required: true,
    type: 'sku',
    label: 'SKU'
  },
  name: {
    required: true,
    label: 'Product Name',
    minLength: 2,
    maxLength: 200
  },
  currentStock: {
    required: true,
    type: 'stock',
    label: 'Current Stock'
  },
  minStock: {
    required: true,
    type: 'stock',
    label: 'Minimum Stock'
  },
  maxStock: {
    required: true,
    type: 'stock',
    label: 'Maximum Stock'
  },
  unitPrice: {
    required: true,
    type: 'price',
    label: 'Unit Price'
  }
};

