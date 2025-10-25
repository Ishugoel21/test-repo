/**
 * UTILS MODULE
 * PCUS Intelligent Merge - 5 developers collaborated
 * Auto-merged with 100% confidence
 */

// Zack: Data sanitization
function sanitizeInput(input) {
  if (typeof input === 'string') {
    return input.replace(/[<>]/g, '').trim();
  }
  return input;
}

// Amy: Email validator
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Ben: UUID generator
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Cara: Date formatting
function formatDate(timestamp, format = 'ISO') {
  const date = new Date(timestamp);
  if (format === 'ISO') return date.toISOString();
  if (format === 'US') return date.toLocaleDateString('en-US');
  return date.toString();
}

// Dan: Deep object merge
function deepMerge(target, source) {
  const output = { ...target };
  for (const key in source) {
    if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
      output[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
}


// Export all 5 functions
module.exports = {
  sanitizeInput,
  isValidEmail,
  generateUUID,
  formatDate,
  deepMerge
};
