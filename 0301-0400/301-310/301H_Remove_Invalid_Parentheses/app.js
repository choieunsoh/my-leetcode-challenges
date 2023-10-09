// 301. Remove Invalid Parentheses
// https://leetcode.com/problems/remove-invalid-parentheses/
// T.C.: O(2^n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  const result = new Set();
  const n = s.length;
  let left = 0;
  let right = 0;
  for (const ch of s) {
    if (ch === '(') {
      left++;
    } else if (ch === ')') {
      if (left === 0) {
        right++;
      } else {
        left--;
      }
    }
  }

  dfs(0, 0, 0, left, right, '');
  return Array.from(result);

  function dfs(depth, left, right, leftRemain, rightRemain, curr) {
    if (depth === n) {
      if (left === right && leftRemain === 0 && rightRemain === 0) {
        result.add(curr);
      }
      return;
    }

    const ch = s.charAt(depth);
    if (ch === '(') {
      if (leftRemain > 0) {
        dfs(depth + 1, left, right, leftRemain - 1, rightRemain, curr);
      }
      dfs(depth + 1, left + 1, right, leftRemain, rightRemain, curr + '(');
    } else if (ch === ')') {
      if (rightRemain > 0) {
        dfs(depth + 1, left, right, leftRemain, rightRemain - 1, curr);
      }
      if (left > right) {
        dfs(depth + 1, left, right + 1, leftRemain, rightRemain, curr + ')');
      }
    } else {
      dfs(depth + 1, left, right, leftRemain, rightRemain, curr + ch);
    }
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
