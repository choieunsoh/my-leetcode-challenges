// 301. Remove Invalid Parentheses
// https://leetcode.com/problems/remove-invalid-parentheses/
// T.C.: O(2^n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  const validExpressions = new Set();
  let leftRem = 0;
  let rightRem = 0;

  for (const character of s) {
    if (character === '(') {
      leftRem++;
    } else if (character === ')') {
      if (leftRem === 0) {
        rightRem++;
      } else {
        leftRem--;
      }
    }
  }

  recurse(0, 0, 0, leftRem, rightRem, []);
  return [...validExpressions];

  function recurse(index, leftCount, rightCount, leftRem, rightRem, expression) {
    if (index === s.length) {
      if (leftRem === 0 && rightRem === 0) {
        validExpressions.add(expression.join(''));
      }
      return;
    }

    const character = s[index];

    if ((character === '(' && leftRem > 0) || (character === ')' && rightRem > 0)) {
      recurse(
        index + 1,
        leftCount,
        rightCount,
        leftRem - (character === '(' ? 1 : 0),
        rightRem - (character === ')' ? 1 : 0),
        expression
      );
    }

    expression.push(character);

    if (character !== '(' && character !== ')') {
      recurse(index + 1, leftCount, rightCount, leftRem, rightRem, expression);
    } else if (character === '(') {
      recurse(index + 1, leftCount + 1, rightCount, leftRem, rightRem, expression);
    } else if (rightCount < leftCount) {
      recurse(index + 1, leftCount, rightCount + 1, leftRem, rightRem, expression);
    }

    expression.pop();
  }
};

var s = '()())()';
var expected = ['(())()', '()()()'];
var result = removeInvalidParentheses(s);
console.log(result, result.join() === expected.join());

var s = '(a)())()';
var expected = ['(a())()', '(a)()()'];
var result = removeInvalidParentheses(s);
console.log(result, result.join() === expected.join());

var s = ')(';
var expected = [''];
var result = removeInvalidParentheses(s);
console.log(result, result.join() === expected.join());
