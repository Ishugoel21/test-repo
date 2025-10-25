const { functionA } = require('./circular-a');

function functionC() {
  console.log('Function C');
  return functionA();
}

module.exports = { functionC };
