// 2141. Maximum Running Time of N Computers
// https://leetcode.com/problems/maximum-running-time-of-n-computers/
/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function (n, batteries) {
  batteries.sort((a, b) => b - a);
  let sumPower = batteries.reduce((sum, power) => sum + power, 0);
  for (const power of batteries) {
    if (sumPower >= power * n) {
      return Math.floor(sumPower / n);
    } else {
      n--;
      sumPower -= power;
    }
  }
};

var n = 2,
  batteries = [3, 3, 3];
var expected = 4;
var result = maxRunTime(n, batteries);
console.log(result, result === expected);

var n = 2,
  batteries = [1, 1, 1, 1];
var expected = 2;
var result = maxRunTime(n, batteries);
console.log(result, result === expected);
