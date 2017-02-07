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

### Unit Tests
 - *test* `npm test`
 - *test coverage* `npm run test:cover`
 - *test coverage in browser* `test:cover:browser`

### Test Plan

 1. Attempt without spaces
    - **Postfix**: `22+`
    - **Expected**: `2 + 2`
    - **Result**: `2 + 2`

 2. Attempt with spaces
    - **Postfix**: `2 2 +`
    - **Expected**: `2 + 2`
    - **Result**: `2 + 2`

 3. Attempt with too many operands
    - **Postfix**: `123+`
    - **Expected**: Error - `Unbalanced equation.`
    - **Result**: Error - `Unbalanced equation.`

 4. Attempt with too many operators
    - **Postfix**: `12+*`
    - **Expected**: Error - `Unbalanced equation.`
    - **Result**: Error - `Unbalanced equation.`

 5. Attempt with invalid characters
    - **Postfix**: `3&4`
    - **Expected**: Error - `Invalid expression.`
    - **Result**: Error - `Invalid expression.`

 6. Attempt with invalid format
    - **Postfix**: `+12`
    - **Expected**: Error - `Invalid expression.`
    - **Result**: Error - `Invalid expression.`

 7. Attempt with invalid format
    - **Postfix**: `1+2`
    - **Expected**: Error - `Invalid expression.`
    - **Result**: Error - `Invalid expression.`
 
 8. Attempt with a complex expression.
    - **Postfix**: `723*5+842/-*-`
    - **Expected**: `7 - (2 * 3 + 5) * (8 - 4 / 2)`
    - **Result**: `7 - (2 * 3 + 5) * (8 - 4 / 2)`


## UML Diagram
![UML Diagram](https://raw.githubusercontent.com/apipkin/PostfixConverter/master/uml_diagram.png)


## Lessons learned
This was my first attempt at using a tree as part of an organic data structure. Understanding that a node can have 
more than one property made a huge difference. It made sense to add check-value methods as well as the three
properties:  `operator` for *, /, -, + as well as `left` and `right` for either side of the operator. This was 
even taken farther when the nodes linked to eachother by letting right and left also consist of an ExpressionNode.

I also realized how the pattern in one statement can be transpiled to the format of another statement. I have 
experienced this in spoken and written languages, but I never really thought of mathematical statements in that 
manner. Going through this exercise I could see how the compiler is able to parse the given language file and 
then give that file in an required format for the next phase in the application operation. 


## Possible Improvements
There is so much I would like to do with this application. Given the current UI and titling, I would want to make
this into a much fuller application. I would also like to devise a way to make the current converter accept 
multi-digit numbers and allow for negative numbers. Also, as with the Infix Evaluator, I would like to add 
exponents and clean up the returned syntax. I would also like to implement an auto update Infix value with inline 
error messages so the user did not have to press the `Convert` button.
