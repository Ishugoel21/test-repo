/**
 * API VERSIONING
 * 
 * BLACK FRIDAY PREPARATION - MEGA MERGE
 * PCUS Intelligent Merge Result
 * 
 * Contributors: 1 developers from DevOps
 * Functions: 2
 * Auto-merged with 100% confidence
 */

// Tara (DevOps): API versioning
function getAPIVersion(request) {
  return request.headers['api-version'] || 'v1';
}

function routeToVersion(endpoint, version) {
  return `/${version}${endpoint}`;
}


// Export all 2 functions
module.exports = {
  getAPIVersion,
  routeToVersion
};
