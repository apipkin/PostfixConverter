/**
 * Postfix 
 * 
 * A postfix expression is an expression where the operands appear before the 
 * operators. Postfix expressions can be evaluated using stacks or an 
 * expression tree. 
 */

const isOperand = require('../utils/isOperand');
const isOperator = require('../utils/isOperator');

const nodeFactory = require('./ExpressionNode').Factory;
const Tokenize = require('./Tokenize');

/**
 * Converts postfix expression to an infix expression
 * @param {string} Postfix Expression
 * @returns {string} Infix Expression
 */
const toInfix = function (expression) {
  const tokens = Tokenize(expression);
  const stack = [];
  let cNode = nodeFactory();
  let cToken;

  while (tokens.length) {
    cToken = tokens.shift();

    if (isOperand(cToken)) {
      stack.push(cToken);
    }
    else if (isOperator(cToken)) {
      if (cNode.operator) {
        cNode = nodeFactory({ right: cNode });
      } else {
        cNode.right = stack.pop();
      }

      cNode.left = stack.pop();
      cNode.operator = cToken;
    }

    if (cNode.isFull()) {
      stack.push(cNode);
      cNode = nodeFactory();
    }
  }

  return stack.pop().toString();
};

// exports
module.exports = {
  toInfix: toInfix
};
