const test = require('tap').test;
const isOperand = require('../../src/utils/isOperand');

test('isOperand returns true if param is a valad operand', (t) => {
    var i = 0;

    for (; i < 100; i++) {
        t.equals(isOperand(i), true);
        t.equals(isOperand(i.toString()), true);
    }

    t.end();
});

test('isOperand returns false if param is an invalad operand', (t) => {
    t.equals(isOperand('+'), false);
    t.equals(isOperand('}'), false);
    t.equals(isOperand('/'), false);
    t.equals(isOperand('*'), false);
    t.equals(isOperand('+'), false);
    t.equals(isOperand('.'), false);
    t.equals(isOperand('('), false);
    t.equals(isOperand('a'), false);

    t.end();
});