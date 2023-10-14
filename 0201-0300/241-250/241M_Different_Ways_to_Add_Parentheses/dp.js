// 241. Different Ways to Add Parentheses
// https://leetcode.com/problems/different-ways-to-add-parentheses/
// T.C.: O(n * 2^n)
// S.C.: O(n ^ 2)
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const map = new Map();
  return dp(expression);

  function dp(input) {
    const result = [];
    if (!isNaN(input)) {
      result.push(Number(input));
      map.set(input, result);
      return result;
    }

    for (let i = 0; i < input.length; i++) {
      if (!['+', '-', '*'].includes(input[i])) continue;

      const leftPart = input.slice(0, i);
      const rightPart = input.slice(i + 1);

      const leftResults = map.get(leftPart) ?? diffWaysToCompute(leftPart);
      const rightResults = map.get(rightPart) ?? diffWaysToCompute(rightPart);

      for (const leftResult of leftResults) {
        for (const rightResult of rightResults) {
          result.push(compute(leftResult, rightResult, input[i]));
        }
      }
    }

    map.set(input, result);
    return result;
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
};

var expression = '2-1-1';
var expected = [0, 2];
var result = diffWaysToCompute(expression);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var expression = '2*3-4*5';
var expected = [-34, -14, -10, -10, 10];
var result = diffWaysToCompute(expression);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());
