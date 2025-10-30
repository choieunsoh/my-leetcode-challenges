// 1526. Minimum Number of Increments on Subarrays to Form a Target Array
// https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
  let result = target[0];
  for (let i = 1; i < target.length; i++) {
    result += Math.max(target[i] - target[i - 1], 0);
  }
  return result;
};

var target = [1, 2, 3, 2, 1];
var expected = 3;
var result = minNumberOperations(target);
console.log(result, result === expected);

var target = [3, 1, 1, 2];
var expected = 4;
var result = minNumberOperations(target);
console.log(result, result === expected);

var target = [3, 1, 5, 4, 2];
var expected = 7;
var result = minNumberOperations(target);
console.log(result, result === expected);
