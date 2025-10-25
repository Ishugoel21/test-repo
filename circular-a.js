const { functionB } = require('./circular-b');

function functionA() {
  console.log('Function A');
  return functionB();
}

module.exports = { functionA };
