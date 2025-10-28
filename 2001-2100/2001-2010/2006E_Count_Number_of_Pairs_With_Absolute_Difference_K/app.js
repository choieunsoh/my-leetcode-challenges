// 2006. Count Number of Pairs With Absolute Difference K
// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  const counts = new Array(101).fill(0);
  let pairs = 0;
  for (const num of nums) {
    const target1 = num - k;
    const target2 = num + k;
    if (target1 > 0 && counts[target1] > 0) {
      pairs += counts[target1];
    }
    if (target2 > 0 && counts[target2] > 0) {
      pairs += counts[target2];
    }
    counts[num]++;
  }
  return pairs;
};

var nums = [1, 2, 2, 1],
  k = 1;
var expected = 4;
var result = countKDifference(nums, k);
console.log(result, result === expected);

var nums = [1, 3],
  k = 3;
var expected = 0;
var result = countKDifference(nums, k);
console.log(result, result === expected);

var nums = [3, 2, 1, 5, 4],
  k = 2;
var expected = 3;
var result = countKDifference(nums, k);
console.log(result, result === expected);
