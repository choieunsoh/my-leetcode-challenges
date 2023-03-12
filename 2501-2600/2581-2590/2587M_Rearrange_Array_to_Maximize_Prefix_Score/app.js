// 2587. Rearrange Array to Maximize Prefix Score
// https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  nums.sort((a, b) => b - a);
  let sum = 0;
  let result = 0;
  for (const num of nums) {
    sum += num;
    if (sum <= 0) break;
    if (sum > 0) result++;
  }
  return result;
};

var nums = [2, -1, 0, 1, -3, 3, -3];
var expected = 6;
var result = maxScore(nums);
console.log(result, result === expected);

var nums = [-2, -3, 0];
var expected = 0;
var result = maxScore(nums);
console.log(result, result === expected);

var nums = [
  -687767, -860350, 950296, 52109, 510127, 545329, -291223, -966728, 852403, 828596, 456730, -483632, -529386, 356766,
  147293, 572374, 243605, 931468, 641668, 494446,
];
var expected = 20;
var result = maxScore(nums);
console.log(result, result === expected);
