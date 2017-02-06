const test = require('tap').test;
var toInfix = require('../../src/lib/Postfix').toInfix;



test('toInfix: [2,3,+] --> 2+3', (t) => {
  t.equals(toInfix('23+'), '2 + 3');
  t.end();
});

test('toInfix: [1,2,3,*,+] --> 1+2*3', (t) => {
  t.equals(toInfix('123*+'), '1 + 2 * 3');
  t.end();
});

test('toInfix: [2,7,+,9,6,-,/] --> (2+7)/(9-6)', (t) => {
  t.equals(toInfix('27+96-/'), '(2 + 7) / (9 - 6)');
  t.end();
});

test('toInfix: [723*5+842/-*-] --> 7-(2*3+5)*(8-4/2)', (t) => {
  t.equals(toInfix('723*5+842/-*-'), '7 - (2 * 3 + 5) * (8 - 4 / 2)');
  t.end();
});

test('toInfix: [359+-23*/] --> (3-5+9)/(2*3)', (t) => {
  t.equals(toInfix('359+-23*/'), '(3 - 5 + 9) / (2 * 3)');
  t.end();
});

