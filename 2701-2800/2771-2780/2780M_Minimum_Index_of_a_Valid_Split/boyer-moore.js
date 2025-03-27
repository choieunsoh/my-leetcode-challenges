// 2780. Minimum Index of a Valid Split
// https://leetcode.com/problems/minimum-index-of-a-valid-split/
// Boyer-Moore Majority Voting Algorithm
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
  let [majority, totalFreq] = majorityElement(nums);
  let freq = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (majority === nums[i]) {
      freq++;
    }
    if (freq * 2 > i + 1 && (totalFreq - freq) * 2 > n - (i + 1)) {
      return i;
    }
  }
  return -1;

  function majorityElement(nums) {
    // pass1: find majority element
    let count = 0;
    let ele = nums[0];
    nums.forEach((num) => {
      if (count === 0) {
        ele = num;
      }
      count += ele === num ? 1 : -1;
    });

    // pass2: find freq of majority element
    count = 0;
    nums.forEach((num) => (count += ele === num ? 1 : 0));
    return [ele, count];
  }
};

var nums = [1, 2, 2, 2];
var expected = 2;
var result = minimumIndex(nums);
console.log(result, result === expected);

var nums = [2, 1, 3, 1, 1, 1, 7, 1, 2, 1];
var expected = 4;
var result = minimumIndex(nums);
console.log(result, result === expected);

var nums = [3, 3, 3, 3, 7, 2, 2];
var expected = -1;
var result = minimumIndex(nums);
console.log(result, result === expected);
