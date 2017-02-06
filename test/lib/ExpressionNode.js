const test = require('tap').test;
var nodeFactory = require('../../src/lib/ExpressionNode').Factory;

test('Evaluate: 2 3 + --> 2+3', (t) => {
  var n = nodeFactory();
  n.operator = '+';
  n.right = '3';
  n.left = '2';

  t.equals(n.toString(), '2 + 3');
  
  t.end();
});

test('Evaluate: 123*+ --> 1 + 2 * 3', (t) => {
  var n = nodeFactory();
  n.operator = '*';
  n.right = '3';
  n.left = '2';

  var n2 = nodeFactory();
  n2.operator = '+';
  n2.right = n;
  n2.left = '1';

  t.equals(n2.toString(), '1 + 2 * 3');

  t.end();
});

test('Evaluate: 2 10 + 9 6 - / --> (2 + 10) / (9 - 6)', (t) => {
  var n = nodeFactory();
  n.operator = '+';
  n.right = '10';
  n.left = '2';

  var n2 = nodeFactory();
  n2.operator = '-';
  n2.right = '6';
  n2.left = '9';

  var n3 = nodeFactory({ right: n2, left: n });
  n3.operator = '/';

  t.equals(n3.toString(), '(2 + 10) / (9 - 6)');
  
  t.end();
});
