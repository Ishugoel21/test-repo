// PCUS Intelligent Merge Result
// Both developers renamed the function differently - keeping both for compatibility

// Developer A's version (main branch)
function calculateTotal(items) {
  return items.reduce((s,i)=>s+i,0);
}

// Developer B's version (feature branch)  
function computeFinalTotal(items) {
  return items.reduce((s,i)=>s+i,0);
}

// Backward compatibility wrapper (delegates to calculateTotal as primary)
function placeholder(items) {
  return calculateTotal(items);
}

module.exports = { calculateTotal, computeFinalTotal, placeholder };
