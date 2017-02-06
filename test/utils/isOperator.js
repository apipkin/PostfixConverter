const test = require('tap').test;
const isOperator = require('../../src/utils/isOperator');

test('isOperator returns true if param is a valad operator', (t) => {
    t.equals(isOperator('+'), true);
    t.equals(isOperator('-'), true);
    t.equals(isOperator('*'), true);
    t.equals(isOperator('/'), true);

    t.end();
});

test('isOperator returns false if param is an invalad operand', (t) => {
    var i = 0;

    for (; i < 10; i++) {
        t.equals(isOperator(i), false);
        t.equals(isOperator(i.toString()), false);
    }

    t.equals(isOperator('}'), false);
    t.equals(isOperator('.'), false);
    t.equals(isOperator('('), false);
    t.equals(isOperator('a'), false);

    t.end();
});