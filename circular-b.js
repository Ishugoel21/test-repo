const { functionC } = require('./circular-c');

function functionB() {
  console.log('Function B');
  return functionC();
}

module.exports = { functionB };
