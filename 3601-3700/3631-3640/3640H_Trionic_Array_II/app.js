// 3640. Trionic Array II
// https://leetcode.com/problems/trionic-array-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumTrionic = function (nums) {
  const n = nums.length;
  let result = -Infinity;

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let res = 0;

    // first segment: increasing segment
    while (j < n && nums[j - 1] < nums[j]) {
      j++;
    }

    const p = j - 1;
    if (p === i) {
      continue;
    }

    // second segment: decreasing segment
    res += nums[p] + nums[p - 1];
    while (j < n && nums[j - 1] > nums[j]) {
      res += nums[j];
      j++;
    }

    const q = j - 1;
    if (q === p || q === n - 1 || (j < n && nums[j] <= nums[q])) {
      i = q;
      continue;
    }

    // third segment: increasing segment
    res += nums[q + 1];

    // find the maximum sum of the third segment
    let maxSum = 0;
    let sum = 0;
    for (let k = q + 2; k < n && nums[k] > nums[k - 1]; k++) {
      sum += nums[k];
      maxSum = Math.max(maxSum, sum);
    }
    res += maxSum;

    // find the maximum sum of the first segment
    maxSum = 0;
    sum = 0;
    for (let k = p - 2; k >= i; k--) {
      sum += nums[k];
      maxSum = Math.max(maxSum, sum);
    }
    res += maxSum;

    // update answer
    result = Math.max(result, res);
    i = q - 1;
  }

  return result;
};

var nums = [0, -2, -1, -3, 0, 2, -1];
var expected = -4;
var result = maxSumTrionic(nums);
console.log(result, result === expected);

var nums = [1, 4, 2, 7];
var expected = 14;
var result = maxSumTrionic(nums);
console.log(result, result === expected);
