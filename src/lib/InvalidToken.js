// Custom Error
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

/**
 * Custom error message to throw if there is an attempt to parse an invalid character
 * @param {string} [Optional] custom message
 */
function InvalidToken (msg) {
  this.name = 'InvalidToken';
  this.message = msg || 'Invalid token.';
  this.stack = (new Error()).stack;
}

InvalidToken.prototype = Object.create(Error.prototype);
InvalidToken.prototype.constructor = InvalidToken;

// exports
module.exports = InvalidToken;
