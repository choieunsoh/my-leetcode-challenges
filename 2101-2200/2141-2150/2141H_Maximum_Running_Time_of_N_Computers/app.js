// 2141. Maximum Running Time of N Computers
// https://leetcode.com/problems/maximum-running-time-of-n-computers/
/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function (n, batteries) {
  let result = 0;
  let left = 0;
  let right = 1e14;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let extraPower = 0;
    for (const power of batteries) {
      extraPower += Math.min(power, mid);
    }

    const needPower = n * mid;
    if (extraPower >= needPower) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
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
