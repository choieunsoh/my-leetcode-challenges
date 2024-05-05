// 2303. Calculate Amount Paid in Taxes
// https://leetcode.com/problems/calculate-amount-paid-in-taxes/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let result = 0;
  let remain = income;
  let prevUpper = 0;
  for (const [upper, percent] of brackets) {
    const range = Math.min(remain, upper - prevUpper);
    result += range * (percent / 100);
    prevUpper = upper;
    remain -= range;
    if (remain < 1) break;
  }
  return Math.round(result * 1e5) / 1e5;
};

var brackets = [
    [3, 50],
    [7, 10],
    [12, 25],
  ],
  income = 10;
var expected = 2.65;
var result = calculateTax(brackets, income);
console.log(result, result === expected);

var brackets = [
    [1, 0],
    [4, 25],
    [5, 50],
  ],
  income = 2;
var expected = 0.25;
var result = calculateTax(brackets, income);
console.log(result, result === expected);

var brackets = [[2, 50]],
  income = 0;
var expected = 0.0;
var result = calculateTax(brackets, income);
console.log(result, result === expected);
