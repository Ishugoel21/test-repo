/**
 * FILTERS UI
 * 
 * BLACK FRIDAY PREPARATION - MEGA MERGE
 * PCUS Intelligent Merge Result
 * 
 * Contributors: 1 developers from Frontend
 * Functions: 1
 * Auto-merged with 100% confidence
 */

// Hugo (Frontend): Product filters
function applyFilters(products, filters) {
  let filtered = products;
  if (filters.priceMin) filtered = filtered.filter(p => p.price >= filters.priceMin);
  if (filters.priceMax) filtered = filtered.filter(p => p.price <= filters.priceMax);
  if (filters.category) filtered = filtered.filter(p => p.category === filters.category);
  return filtered;
}


// Export all 1 functions
module.exports = {
  applyFilters
};
