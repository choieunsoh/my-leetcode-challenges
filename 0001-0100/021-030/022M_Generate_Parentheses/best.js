// https://leetcode.com/problems/generate-parentheses/
// 22. Generate Parentheses
var generateParenthesis = function (n) {
  const result = [];

  function dfs(count, openCount, closeCount, parts) {
    if (count === n * 2) {
      result.push(parts.join(''));
      return;
    }

    if (openCount < n) {
      parts.push('(');
      dfs(count + 1, openCount + 1, closeCount, parts);
      parts.pop();
    }

    if (closeCount < openCount) {
      parts.push(')');
      dfs(count + 1, openCount, closeCount + 1, parts);
      parts.pop();
    }
  }
  dfs(0, 0, 0, []);
  return result;
};

console.log(generateParenthesis(3));
