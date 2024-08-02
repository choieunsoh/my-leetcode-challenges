// 2134. Minimum Swaps to Group All 1's Together II
// https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  const n = nums.length;
  // Calculate the minimum swaps needed to group all 1s or all 0s together
  const op1 = suffixSum(0); // Grouping all 0s together
  const op2 = suffixSum(1); // Grouping all 1s together
  return Math.min(op1, op2);

  // Helper function to calculate the minimum swaps required to group all `val` together
  function suffixSum(target) {
    const rightSuffixSum = new Array(n + 1).fill(0);

    // Construct the suffix sum array for counting opposite values (val ^ 1)
    for (let i = n - 1; i >= 0; i--) {
      rightSuffixSum[i] = rightSuffixSum[i + 1];
      if (nums[i] === target) rightSuffixSum[i]++;
    }

    // Total zeros in the array if `val` is 1 (or vice versa)
    const totalSwapsNeeded = rightSuffixSum[0];

    // Track current number of required swaps in the current segment
    let currentSwapCount = 0;
    let minimumSwaps = totalSwapsNeeded - rightSuffixSum[n - totalSwapsNeeded];

    // Iterate to find the minimum swaps by sliding the potential block of grouped `target`
    for (let i = 0; i < totalSwapsNeeded; i++) {
      if (nums[i] === target) currentSwapCount++;
      let remaining = totalSwapsNeeded - i - 1;
      let requiredSwaps = i + 1 - currentSwapCount + (remaining - rightSuffixSum[n - remaining]);
      minimumSwaps = Math.min(minimumSwaps, requiredSwaps);
    }
    return minimumSwaps;
  }
};

var nums = [0, 1, 0, 1, 1, 0, 0];
var expected = 1;
var result = minSwaps(nums);
console.log(result, result === expected);

var nums = [0, 1, 1, 1, 0, 0, 1, 1, 0];
var expected = 2;
var result = minSwaps(nums);
console.log(result, result === expected);

var nums = [1, 1, 0, 0, 1];
var expected = 0;
var result = minSwaps(nums);
console.log(result, result === expected);
