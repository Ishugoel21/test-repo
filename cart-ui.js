/**
 * CART UI
 * 
 * BLACK FRIDAY PREPARATION - MEGA MERGE
 * PCUS Intelligent Merge Result
 * 
 * Contributors: 1 developers from Frontend
 * Functions: 1
 * Auto-merged with 100% confidence
 */

// Emma (Frontend): Shopping cart UI
function renderCartItem(item) {
  return {
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    total: item.quantity * item.price
  };
}


// Export all 1 functions
module.exports = {
  renderCartItem
};
