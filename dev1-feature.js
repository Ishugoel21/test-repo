// Developer 1 - PCUS Universe Test
// Feature: dev-feature-1

function processFeature1(data) {
  console.log('Processing feature 1');
  return { success: true, feature: 1, data };
}

function validateFeature1(input) {
  return input != null && input != undefined;
}

module.exports = { processFeature1, validateFeature1 };
