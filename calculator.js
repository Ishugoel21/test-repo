// Base Calculator
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Dev1: Added multiply function
function multiply(a, b) {
  console.log(`Multiplying ${a} * ${b}`);
  return a * b;
}

// Dev2: Added divide function
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  console.log(`Dividing ${a} / ${b}`);
  return a / b;
}

// Dev3: Added power function
function power(base, exponent) {
  console.log(`Calculating ${base} ^ ${exponent}`);
  return Math.pow(base, exponent);
}

module.exports = { add, subtract, multiply, divide, power };
