// Custom Error
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

/**
 * Custom error message to throw if the equation is not balanced
 * @param {string} [Optional] custom message
 */
function InvalidExpression (msg) {
  this.name = 'InvalidExpression';
  this.message = msg || 'Invalid expression.';
  this.stack = (new Error()).stack;
}

InvalidExpression.prototype = Object.create(Error.prototype);
InvalidExpression.prototype.constructor = InvalidExpression;

// exports
module.exports = InvalidExpression;
