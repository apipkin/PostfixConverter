# Postfix Converter

This Postfix Converter will correctly convert any postfix expression given only numbers and operators (`+`, `-`, `*`, `/`).
The Postfix Converter will tokenize the expression string, pass it to the Converter and return the resulting infix expression.

## Getting Started

**Clone the repository**<br>
`git clone git@github.com:apipkin/PostfixConverter.git`

**Change into the directory**<br>
`cd PostfixConverter`

**Install important packages**<br>
`npm install`

**Start the server**<br>
`npm start`



## Testing

 - *test* `npm test`
 - *test coverage* `npm run test:cover`
 - *test coverage in browser* `test:cover:browser`

### Test Plan

 1. Attempt without spaces
    - Postfix: 22+
    - Expected: 2 + 2
    - Result: 2 + 2

 2. Attempt with spaces
    - Postfix: 2 2 +
    - Expected: 2 + 2
    - Result: 2 + 2

 3. Attempt with too many operands
    - Postfix: 123+
    - Expected: Error - Unbalanced equation.
    - Result: Error - Unbalanced equation.

 4. Attempt with too many operators
    - Postfix: 12+*
    - Expected: Error - Unbalanced equation.
    - Result: Error - Unbalanced equation.

 5. Attempt with invalid characters
    - Postfix: 3&4
    - Expected: Error - Invalid expression.
    - Result: Error - Invalid expression.

 6. Attempt with invalid format
    - Postfix: +12
    - Expected: Error - Invalid expression.
    - Result: Error - Invalid expression.

 7. Attempt with invalid format
    - Postfix: 1+2
    - Expected: Error - Invalid expression.
    - Result: Error - Invalid expression.





## UML Diagram
![UML Diagram]()


## Lessons learned



## Possible Improvements


