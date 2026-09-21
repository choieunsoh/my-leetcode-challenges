// 3524. Find X Value of Array I
// https://leetcode.com/problems/find-x-value-of-array-i/description/
// T.C.: O(n * k)
// S.C.: O(k)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function (nums, k) {
  const result = new Array(k).fill(0);
  let freq = new Array(k).fill(0);
  for (let j = 0; j < nums.length; j++) {
    const v = nums[j] % k;
    const nf = new Array(k).fill(0);
    for (let r = 0; r < k; r++) if (freq[r]) nf[(r * v) % k] += freq[r];
    nf[v]++; // the single-element subarray [j]
    for (let r = 0; r < k; r++) result[r] += nf[r];
    freq = nf;
  }
  return result;
};

var nums = [1, 2, 3, 4, 5],
  k = 3;
var expected = [9, 2, 4];
var result = resultArray(nums, k);
console.log(result, result.toString() === expected.toString());

var nums = [1, 2, 4, 8, 16, 32],
  k = 4;
var expected = [18, 1, 2, 0];
var result = resultArray(nums, k);
console.log(result, result.toString() === expected.toString());
