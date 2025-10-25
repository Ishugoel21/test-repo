/**
 * LOAD BALANCER
 * 
 * BLACK FRIDAY PREPARATION - MEGA MERGE
 * PCUS Intelligent Merge Result
 * 
 * Contributors: 1 developers from DevOps
 * Functions: 1
 * Auto-merged with 100% confidence
 */

// Umar (DevOps): Load balancing
function selectServer(servers, strategy = 'round-robin') {
  const activeServers = servers.filter(s => s.healthy);
  if (strategy === 'round-robin') {
    return activeServers[Math.floor(Math.random() * activeServers.length)];
  }
  return activeServers[0];
}


// Export all 1 functions
module.exports = {
  selectServer
};
