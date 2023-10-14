// 241. Different Ways to Add Parentheses
// https://leetcode.com/problems/different-ways-to-add-parentheses/
// T.C.: O(n * 2^n)
// S.C.: O(n ^ 2)
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const ops = ['+', '-', '*'];
  if (!isNaN(expression)) {
    return [Number(expression)];
  }

  const result = [];
  for (let i = 0; i < expression.length; i++) {
    if (!ops.includes(expression[i])) continue;

    const leftPart = expression.slice(0, i);
    const rightPart = expression.slice(i + 1);

    const leftResults = diffWaysToCompute(leftPart);
    const rightResults = diffWaysToCompute(rightPart);

    for (const leftResult of leftResults) {
      for (const rightResult of rightResults) {
        result.push(compute(leftResult, rightResult, expression[i]));
      }
    }
  }

  return result;

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
