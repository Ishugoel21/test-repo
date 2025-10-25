/**
 * PRICING MODULE
 * PCUS Intelligent Merge - 5 developers collaborated
 * Auto-merged with 100% confidence
 */

// Kate: Dynamic pricing algorithm
function calculateDynamicPrice(basePrice, demand, competition) {
  let price = basePrice;
  if (demand > 0.8) price *= 1.15;
  if (demand < 0.3) price *= 0.9;
  if (competition > 5) price *= 0.95;
  return Math.round(price * 100) / 100;
}

// Leo: Bulk discount calculator
function calculateBulkDiscount(quantity, unitPrice) {
  if (quantity >= 100) return unitPrice * 0.8;
  if (quantity >= 50) return unitPrice * 0.85;
  if (quantity >= 20) return unitPrice * 0.9;
  if (quantity >= 10) return unitPrice * 0.95;
  return unitPrice;
}

// Mia: Seasonal pricing
function applySeasonalPricing(price, productCategory) {
  const month = new Date().getMonth();
  if (month === 11 && productCategory === 'toys') return price * 0.85; // Christmas
  if (month === 6 && productCategory === 'clothing') return price * 0.8; // Summer sale
  if (month === 1 && productCategory === 'electronics') return price * 0.9; // New year
  return price;
}

// Noah: Currency conversion
function convertCurrency(amount, fromCurrency, toCurrency) {
  const rates = { USD: 1, EUR: 0.85, GBP: 0.73, JPY: 110 };
  const usdAmount = amount / (rates[fromCurrency] || 1);
  return usdAmount * (rates[toCurrency] || 1);
}

// Olivia: Price rounding rules
function applyPriceRounding(price, strategy = 'psychological') {
  if (strategy === 'psychological') {
    return Math.floor(price) + 0.99;
  } else if (strategy === 'round') {
    return Math.round(price);
  } else if (strategy === 'floor') {
    return Math.floor(price);
  }
  return price;
}


// Export all 5 functions
module.exports = {
  calculateDynamicPrice,
  calculateBulkDiscount,
  applySeasonalPricing,
  convertCurrency,
  applyPriceRounding
};
