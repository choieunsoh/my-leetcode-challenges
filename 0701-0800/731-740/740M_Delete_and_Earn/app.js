// 740. Delete and Earn
// https://leetcode.com/problems/delete-and-earn/
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const freq = Array(10001).fill(0);
  for (let i = 0; i < nums.length; i++) {
    freq[nums[i]]++;
  }

  for (let i = 2; i < freq.length; i++) {
    const withElement = freq[i - 2] + i * freq[i];
    const withoutElement = freq[i - 1];
    freq[i] = Math.max(withElement, withoutElement);
  }
  return freq[freq.length - 1];
};

var nums = [3, 4, 2];
var expected = 6;
var result = deleteAndEarn(nums);
console.log(result, result === expected);

var nums = [2, 2, 3, 3, 3, 4];
var expected = 9;
var result = deleteAndEarn(nums);
console.log(result, result === expected);
