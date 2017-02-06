/**
 * Expression Tree Node for mathematical expressions. 
 */

/**
 * Factory: Used to create an Expression Tree Node. The Node has three properties: `operator`, `left`, and `right`.
 * Left and right may contain an operand or an Expression Tree Node. 
 * @param {primer} [optional] Instance values to override default values
 * @return {object} Expression Node
 * @throws InvalidToken
 */
var Factory = function (primer) {

  return Object.assign({
    operator: null,
    left: null,
    right: null
  }, primer, {
    hasOperator: hasOperator,
    hasLeft: hasLeft,
    hasRight: hasRight,
    isFull: isFull,
    toString: toString,
  });
};

// exports
module.exports = {
  Factory: Factory
};

/**
 * Returns an infix expression 
 * @returns {String}
 */
function toString () {
  var o = this.operator;
  var l = this.left;
  var r = this.right;

  if (typeof l === 'object' && (o == '*' || o == '/')) {
    l = '(' + l + ')';
  }

  if (typeof r === 'object' && (o == '*' || o == '/')) {
    r = '(' + r + ')';
  }

  return l + ' ' + o + ' ' + r;
}

/**
 * Evaluates the presence of an operator
 * @returns {boolean}
 */
function hasOperator () {
  return this.operator !== null;
}

/**
 * Evaluates the presence of a left value
 * @returns {boolean}
 */
function hasLeft () {
  return this.left !== null;
}

/**
 * Evaluates the presence of a right value
 * @returns {boolean}
 */
function hasRight () {
  return this.right !== null;
}

/**
 * Evaluates the presence of an operator, a left value, and a right value
 * @returns {boolean}
 */
function isFull () {
  return this.hasOperator() && this.hasLeft() && this.hasRight();
}
