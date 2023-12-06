// 1716. Calculate Money in Leetcode Bank
// https://leetcode.com/problems/calculate-money-in-leetcode-bank/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  const fullWeeks = (n / 7) | 0;
  const daysLeft = n % 7;
  const moneyDaysLeft = (daysLeft * (daysLeft + 1)) / 2;
  const moneyAWeek = (7 * 8) / 2;
  const extraMoneyWeeks = (((fullWeeks - 1) * fullWeeks) / 2) * 7;
  return moneyAWeek * fullWeeks + moneyDaysLeft + daysLeft * fullWeeks + extraMoneyWeeks;
};

var n = 4;
var expected = 10;
var result = totalMoney(n);
console.log(result, result === expected);

var n = 10;
var expected = 37;
var result = totalMoney(n);
console.log(result, result === expected);

var n = 20;
var expected = 96;
var result = totalMoney(n);
console.log(result, result === expected);

var n = 21;
var expected = 105;
var result = totalMoney(n);
console.log(result, result === expected);

var n = 23;
var expected = 114;
var result = totalMoney(n);
console.log(result, result === expected);
