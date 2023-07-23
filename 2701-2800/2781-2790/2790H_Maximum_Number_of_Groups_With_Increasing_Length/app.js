// 2790. Maximum Number of Groups With Increasing Length
// https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/
/**
 * @param {number[]} usageLimits
 * @return {number}
 */
var maxIncreasingGroups = function (usageLimits) {
  usageLimits.sort((a, b) => a - b);
  let total = 0;
  let count = 0;
  for (const limit of usageLimits) {
    total += limit;
    if (total >= ((count + 1) * (count + 2)) / 2) {
      count++;
    }
  }
  return count;
};

var usageLimits = [1, 2, 5];
var expected = 3;
var result = maxIncreasingGroups(usageLimits);
console.log(result, result === expected);

var usageLimits = [2, 1, 2];
var expected = 2;
var result = maxIncreasingGroups(usageLimits);
console.log(result, result === expected);

var usageLimits = [1, 1];
var expected = 1;
var result = maxIncreasingGroups(usageLimits);
console.log(result, result === expected);
