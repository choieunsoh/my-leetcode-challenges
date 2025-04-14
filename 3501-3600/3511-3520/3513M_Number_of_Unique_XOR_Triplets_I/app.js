// 3513. Number of Unique XOR Triplets I
// https://leetcode.com/problems/number-of-unique-xor-triplets-i/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function (nums) {
  const n = nums.length;
  if (n < 3) return n;
  const nearest = Math.log2(n) | 0;
  return 1 << (nearest + 1);
};

var nums = [1, 2];
var expected = 2;
var result = uniqueXorTriplets(nums);
console.log(result, result === expected);

var nums = [3, 1, 2];
var expected = 4;
var result = uniqueXorTriplets(nums);
console.log(result, result === expected);

var nums = [4, 5, 3, 1, 2];
var expected = 8;
var result = uniqueXorTriplets(nums);
console.log(result, result === expected);
