/**
 * Tests to see if the value is a valid operand
 * @param {string} Potential operand
 * @return {boolean}
 */
function isOperand(str) {
  return /^\d+/g.test(str.toString());
}

// exports
module.exports = isOperand;
