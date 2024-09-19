// 241. Different Ways to Add Parentheses
// https://leetcode.com/problems/different-ways-to-add-parentheses/
// T.C.: O(n*2^n)
// S.C.: O(n^2*2^n)
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const n = expression.length;
  const memo = Array.from({ length: n }, () => new Array(n));
  return dp(0, n - 1);

  function dp(start, end) {
    if (memo[start][end]) return memo[start][end];

    const results = [];
    if (start === end) {
      results.push(Number(expression[start]));
      return results;
    }

    if (end - start === 1 && isDigit(expression[start])) {
      results.push(Number(expression[start]) * 10 + Number(expression[end]));
      return results;
    }

    for (let i = start; i <= end; i++) {
      if (isDigit(expression[i])) continue;

      const leftResults = dp(start, i - 1);
      const rightResults = dp(i + 1, end);

      for (const leftResult of leftResults) {
        for (const rightResult of rightResults) {
          results.push(compute(leftResult, rightResult, expression[i]));
        }
      }
    }

    memo[start][end] = results;
    return results;
  }

  function compute(left, right, op) {
    switch (op) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      default:
        return left * right;
    }
  }

  function isDigit(exp) {
    return exp >= '0' && exp <= '9';
  }
};

var expression = '2-1-1';
var expected = [0, 2];
var result = diffWaysToCompute(expression);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var expression = '2*3-4*5';
var expected = [-34, -14, -10, -10, 10];
var result = diffWaysToCompute(expression);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());
