/**
 * REQUEST LOGGER
 * 
 * BLACK FRIDAY PREPARATION - MEGA MERGE
 * PCUS Intelligent Merge Result
 * 
 * Contributors: 1 developers from DevOps
 * Functions: 1
 * Auto-merged with 100% confidence
 */

// Will (DevOps): Request logging
function logRequest(method, url, userId, duration) {
  const log = {
    method,
    url,
    userId,
    duration: duration + 'ms',
    timestamp: new Date().toISOString()
  };
  console.log('[Request]', JSON.stringify(log));
  return log;
}


// Export all 1 functions
module.exports = {
  logRequest
};
