// 2966. Divide Array Into Arrays With Max Difference
// https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i + 2] - nums[i] > k) {
      return [];
    }
    result.push([nums[i], nums[i + 1], nums[i + 2]]);
  }
  return result;
};

var nums = [1, 3, 4, 8, 7, 9, 3, 5, 1],
  k = 2;
var expected = [
  [1, 1, 3],
  [3, 4, 5],
  [7, 8, 9],
];
var result = divideArray(nums, k);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var nums = [1, 3, 3, 2, 7, 3],
  k = 3;
var expected = [];
var result = divideArray(nums, k);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var nums = [15, 13, 12, 13, 12, 14, 12, 2, 3, 13, 12, 14, 14, 13, 5, 12, 12, 2, 13, 2, 2],
  k = 2;
var expected = [];
var result = divideArray(nums, k);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
