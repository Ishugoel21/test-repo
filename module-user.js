const module-profile = require('./module-profile');
const module-auth = require('./module-auth');

function module-user() {
  console.log('module-user.js');
  return { status: 'ok' };
}

module.exports = { module-user };
