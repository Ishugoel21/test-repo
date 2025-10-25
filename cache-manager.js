/**
 * CACHE MANAGER
 * 
 * BLACK FRIDAY PREPARATION - MEGA MERGE
 * PCUS Intelligent Merge Result
 * 
 * Contributors: 1 developers from DevOps
 * Functions: 2
 * Auto-merged with 100% confidence
 */

// Seth (DevOps): Cache management
const cache = new Map();

function setCache(key, value, ttl = 3600) {
  cache.set(key, { value, expiresAt: Date.now() + ttl * 1000 });
}

function getCache(key) {
  const item = cache.get(key);
  if (item && Date.now() < item.expiresAt) return item.value;
  return null;
}


// Export all 2 functions
module.exports = {
  setCache,
  getCache
};
