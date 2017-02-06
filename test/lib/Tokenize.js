const test = require('tap').test;
var Tokenize = require('../../src/lib/Tokenize');
var InvalidToken = require('../../src/lib/InvalidToken');
const InvalidExpression = require('../../src/lib/InvalidExpression');

test('Tokenize: "12*34+/" --> [1,2,*,3,4,+,/]', (t) => {
  t.deepEquals(Tokenize('12*34+/'), ["1", "2", "*", "3", "4", "+", "/"]);
  t.end();
});

test('Tokenize: " 1 2 *  3 4 + / " --> [1,2,*,3,4,+,/]', (t) => {
  t.deepEquals(Tokenize(' 1 2 *  3 4 + / '), ["1", "2", "*", "3", "4", "+", "/"]);
  t.end();
});

// TEST FOR THROWS
test('Tokenize: "33#" --> Error', (t) => {
  t.throws(function () { Tokenize('33#'); }, InvalidToken);
  t.end();
});

test('Tokenize: "+33" --> Error', (t) => {
  t.throws(function () { Tokenize('+33'); }, InvalidExpression);
  t.end();
});

test('Tokenize: "3+3" --> Error', (t) => {
  t.throws(function () { Tokenize('3+3'); }, InvalidExpression);
  t.end();
});

test('Tokenize: "33" --> Error', (t) => {
  t.throws(function () { Tokenize('33'); }, InvalidExpression, 'Missing operands.');
  t.end();
});

test('Tokenize: "33" --> Error', (t) => {
  t.throws(function () { Tokenize('33'); }, InvalidExpression, 'Missing operators.');
  t.end();
});

test('Tokenize: "33++" --> Error', (t) => {
  t.throws(function () { Tokenize('33++'); }, InvalidExpression, 'Unbalanced equation.');
  t.end();
});
