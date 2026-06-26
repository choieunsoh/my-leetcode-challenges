// 3739. Count Subarrays With Majority Element II
// https://leetcode.com/problems/count-subarrays-with-majority-element-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
  const n = nums.length;
  const pre = new Array(n * 2 + 1).fill(0);
  pre[n] = 1;
  let count = n;
  let result = 0;
  let preSum = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === target) {
      preSum += pre[count];
      count++;
      pre[count]++;
    } else {
      count--;
      preSum -= pre[count];
      pre[count]++;
    }
    result += preSum;
  }
  return result;
};

var nums = [1, 2, 2, 3],
  target = 2;
var expected = 5;
var result = countMajoritySubarrays(nums, target);
console.log(result, result === expected);

var nums = [1, 1, 1, 1],
  target = 1;
var expected = 10;
var result = countMajoritySubarrays(nums, target);
console.log(result, result === expected);

var nums = [1, 2, 3],
  target = 4;
var expected = 0;
var result = countMajoritySubarrays(nums, target);
console.log(result, result === expected);
