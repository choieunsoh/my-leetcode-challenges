// 2461. Maximum Sum of Distinct Subarrays With Length K
// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const freq = new Array(1e5 + 1).fill(0); // Frequency array for nums[i]
  let left = 0;
  let sum = 0;
  let maxSum = 0;
  let uniqueCount = 0; // To track distinct elements in the window

  for (let right = 0; right < nums.length; right++) {
    const current = nums[right];

    // Add the current element to the sliding window
    if (freq[current] === 0) uniqueCount++;
    freq[current]++;
    sum += current;

    // Shrink the window if its size exceeds `k`
    while (right - left + 1 > k) {
      const leftVal = nums[left];
      freq[leftVal]--;
      if (freq[leftVal] === 0) uniqueCount--;
      sum -= leftVal;
      left++;
    }

    // Check if the current window is valid and update maxSum
    if (right - left + 1 === k && uniqueCount === k) {
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
};

var nums = [1, 5, 4, 2, 9, 9, 9],
  k = 3;
var expected = 15;
var result = maximumSubarraySum(nums, k);
console.log(result, result === expected);

var nums = [4, 4, 4],
  k = 3;
var expected = 0;
var result = maximumSubarraySum(nums, k);
console.log(result, result === expected);

var nums = [9, 18, 10, 13, 17, 9, 19, 2, 1, 18],
  k = 5;
var expected = 68;
var result = maximumSubarraySum(nums, k);
console.log(result, result === expected);
