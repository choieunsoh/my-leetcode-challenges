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
  let minimumRemoved = Infinity;
  recurse(0, 0, 0, [], 0);
  return [...validExpressions];

  function recurse(index, leftCount, rightCount, expression, removedCount) {
    if (index === s.length) {
      if (leftCount === rightCount && removedCount <= minimumRemoved) {
        if (removedCount < minimumRemoved) {
          validExpressions.clear();
          minimumRemoved = removedCount;
        }
        validExpressions.add(expression.join(''));
      }
      return;
    }

    const currentCharacter = s[index];

    if (currentCharacter !== '(' && currentCharacter !== ')') {
      expression.push(currentCharacter);
      recurse(index + 1, leftCount, rightCount, expression, removedCount);
      expression.pop();
      return;
    }

    recurse(index + 1, leftCount, rightCount, expression, removedCount + 1);
    expression.push(currentCharacter);

    if (currentCharacter === '(') {
      recurse(index + 1, leftCount + 1, rightCount, expression, removedCount);
    } else if (rightCount < leftCount) {
      recurse(index + 1, leftCount, rightCount + 1, expression, removedCount);
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
