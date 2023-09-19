// 164. Maximum Gap
// https://leetcode.com/problems/maximum-gap/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0;

  nums = radixSort(nums);
  let maxGap = 0;
  for (let i = 1; i < nums.length; i++) {
    const gap = nums[i] - nums[i - 1];
    maxGap = Math.max(maxGap, gap);
  }
  return maxGap;

  function radixSort(nums) {
    const maxNum = Math.max(...nums);
    for (let digit = 1; Math.floor(maxNum / digit) > 0; digit *= 10) {
      const buckets = Array.from({ length: 10 }, () => []);
      for (let num of nums) {
        const bucketIndex = Math.floor((num / digit) % 10);
        buckets[bucketIndex].push(num);
      }
      nums = buckets.flat();
    }
    return nums;
  }
};

var nums = [3, 6, 9, 1];
var expected = 3;
var result = maximumGap(nums);
console.log(result, result === expected);

var nums = [10];
var expected = 0;
var result = maximumGap(nums);
console.log(result, result === expected);
