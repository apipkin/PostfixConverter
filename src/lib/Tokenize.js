/**
 * Parses a string and tokenizes the input keeping only grouping elements,
 *   mathmatical operators, and numbers
 * @param {string} Expresion to be tokenized
 * @return {array} List of tokenized values
 * @throws InvalidToken
 * @throws InvalidExpression
 */

const isOperator = require('../utils').isOperator;
const isOperand = require('../utils').isOperand;
const InvalidToken = require('./InvalidToken');
const InvalidExpression = require('./InvalidExpression');

function Tokenize (str) {
  const tokens = [];
  let index = 0;
  let chr = '';

  let operatorCount = 0;
  let operandCount = 0;


  // remove whitespace characters
  str = str.replace(/\s/g, '');

  //  not empty           cant start as operator       cant end in an operand
  if (str.length === 0 || isOperator(str.charAt(0)) || isOperand(str.slice(-1)) ) {
    throw new InvalidExpression();
  }
  
  while (index < str.length) {
    chr = str.charAt(index);
    
    if (isOperator(chr)) {
      tokens.push(chr);
      operatorCount++;
    }
    else if (isOperand(chr)) {
      tokens.push(chr);
      operandCount++;
    }
    else {
      throw new InvalidToken('Invalid token: `' + chr + '`');
    }
    
    index++;
  }


  if (operandCount - operatorCount !== 1) {
    throw new InvalidExpression('Unbalanced equation.');
  }
  
  
  return tokens; 
}

// exports
module.exports = Tokenize;
