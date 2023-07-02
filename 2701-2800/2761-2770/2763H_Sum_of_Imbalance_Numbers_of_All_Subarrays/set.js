// 2763. Sum of Imbalance Numbers of All Subarrays
// https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumImbalanceNumbers = function (nums) {
  const n = nums.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    const set = new Set();
    set.add(nums[i]);
    let curr = 0;
    for (let j = i + 1; j < n; j++) {
      if (!set.has(nums[j])) {
        let d = 1;
        if (set.has(nums[j] - 1)) d--;
        if (set.has(nums[j] + 1)) d--;
        set.add(nums[j]);
        curr += d;
      }
      result += curr;
    }
  }
  return result;
};

var nums = [2, 3, 1, 4];
var expected = 3;
var result = sumImbalanceNumbers(nums);
console.log(result, result === expected);

var nums = [1, 3, 3, 3, 5];
var expected = 8;
var result = sumImbalanceNumbers(nums);
console.log(result, result === expected);
