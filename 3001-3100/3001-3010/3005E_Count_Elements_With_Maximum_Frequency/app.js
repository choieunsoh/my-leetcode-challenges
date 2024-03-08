// 3005. Count Elements With Maximum Frequency
// https://leetcode.com/problems/count-elements-with-maximum-frequency/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let maxFreq = 0;
  const counts = new Array(101).fill(0);
  for (const num of nums) {
    maxFreq = Math.max(maxFreq, ++counts[num]);
  }
  return counts.filter((count) => count === maxFreq).length * maxFreq;
};

var nums = [1, 2, 2, 3, 1, 4];
var expected = 4;
var result = maxFrequencyElements(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = 5;
var result = maxFrequencyElements(nums);
console.log(result, result === expected);

var nums = [1, 2, 2, 3, 1, 4, 3, 4, 5, 5];
var expected = 10;
var result = maxFrequencyElements(nums);
console.log(result, result === expected);
