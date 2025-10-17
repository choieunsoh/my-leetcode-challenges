// 2335. Minimum Amount of Time to Fill Cups
// https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  let secondsNeeded = 0;
  while (amount[0] + amount[1] + amount[2] > 0) {
    amount.sort((a, b) => b - a);
    if (amount[0] > 0 && amount[1] > 0) {
      secondsNeeded++;
      amount[0]--;
      amount[1]--;
    } else if (amount[0] > 0) {
      secondsNeeded += amount[0];
      amount[0] = 0;
    }
  }
  return secondsNeeded;
};

var amount = [1, 4, 2];
var expected = 4;
var result = fillCups(amount);
console.log(result, result === expected);

var amount = [5, 4, 4];
var expected = 7;
var result = fillCups(amount);
console.log(result, result === expected);

var amount = [5, 0, 0];
var expected = 5;
var result = fillCups(amount);
console.log(result, result === expected);
