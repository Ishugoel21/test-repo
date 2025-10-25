const module-user = require('./module-user');

function module-profile() {
  console.log('module-profile.js');
  return { status: 'ok' };
}

module.exports = { module-profile };
