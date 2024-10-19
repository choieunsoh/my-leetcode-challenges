// 439. Ternary Expression Parser
// https://leetcode.com/problems/ternary-expression-parser/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function (expression) {
  // Pointer for Traversal. It will maintain Loop Invariant.
  let i = 0;

  // Loop invariant: We will always be at the first character of
  // expression which we should FOCUS on.
  while (true) {
    // If this first character is not boolean, it means no nesting
    // is there. Thus, we can simply return this character.
    if (!['T', 'F'].includes(expression[i])) {
      return expression[i];
    }

    // If this is last character, then we can simply return this
    if (i === expression.length - 1) {
      return expression[i];
    }

    // If succeeding character is :, it means we have processed
    // the FOCUS part. Ignore the ahead part and return this character.
    if (expression[i + 1] === ':') {
      return expression[i];
    }

    // Now it means this character is boolean followed by ?.
    // If this boolean is T, then process after ? sub-expression.
    if (expression[i] === 'T') {
      i = i + 2;
    }

    // If this boolean is F, then make i point to the character
    // after ": of this ?". To have corresponding :, we
    // can maintain count
    else {
      let count = 1;
      i += 2;
      while (count != 0) {
        if (expression[i] == ':') {
          count--;
        } else if (expression[i] == '?') {
          count++;
        }
        i++;
      }
    }
  }
};

var expression = 'T?2:3';
var expected = '2';
var result = parseTernary(expression);
console.log(result, result === expected);

var expression = 'F?1:T?4:5';
var expected = '4';
var result = parseTernary(expression);
console.log(result, result === expected);

var expression = 'T?T?F:5:3';
var expected = 'F';
var result = parseTernary(expression);
console.log(result, result === expected);
