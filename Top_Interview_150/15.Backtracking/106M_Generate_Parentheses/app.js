// 22. Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/
var generateParenthesis = function (n) {
  const result = [];
  dfs(0, 0, 0, []);
  return result;

  function dfs(count, openCount, closeCount, parts) {
    if (count === n * 2) {
      result.push(parts.join(''));
      return;
    }

    if (openCount < n) {
      dfs(count + 1, openCount + 1, closeCount, [...parts, '(']);
    }

    if (closeCount < openCount) {
      dfs(count + 1, openCount, closeCount + 1, [...parts, ')']);
    }
  }
};

var n = 3;
var expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
var result = generateParenthesis(3);
console.log(result, result.join() === expected.join());
