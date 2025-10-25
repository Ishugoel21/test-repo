const module-user = require('./module-user');
const module-session = require('./module-session');

function module-auth() {
  console.log('module-auth.js');
  return { status: 'ok' };
}

module.exports = { module-auth };
