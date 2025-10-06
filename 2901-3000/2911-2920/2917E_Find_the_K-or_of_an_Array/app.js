// 2917. Find the K-or of an Array
// https://leetcode.com/problems/find-the-k-or-of-an-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function (nums, k) {
  let kor = 0;
  for (let i = 0; i < 32; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] & (1 << i)) {
        count++;
      }
      if (count === k) {
        kor |= 1 << i;
        break;
      }
    }
  }
  return kor;
};

var nums = [7, 12, 9, 8, 9, 15],
  k = 4;
var expected = 9;
var result = findKOr(nums, k);
console.log(result, result === expected);

var nums = [2, 12, 1, 11, 4, 5],
  k = 6;
var expected = 0;
var result = findKOr(nums, k);
console.log(result, result === expected);

var nums = [10, 8, 5, 9, 11, 6, 8],
  k = 1;
var expected = 15;
var result = findKOr(nums, k);
console.log(result, result === expected);
