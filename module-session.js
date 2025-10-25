const module-auth = require('./module-auth');

function module-session() {
  console.log('module-session.js');
  return { status: 'ok' };
}

module.exports = { module-session };
