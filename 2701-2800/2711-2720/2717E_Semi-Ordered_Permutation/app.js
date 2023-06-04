// 2717. Semi-Ordered Permutation
// https://leetcode.com/problems/semi-ordered-permutation/
/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
  const n = nums.length;
  if (nums[0] === 1 && nums.at(-1) === n) return 0;
  const index1 = nums.indexOf(1);
  const indexN = nums.indexOf(n);
  const result = index1 + n - indexN - 1;
  return indexN < index1 ? result - 1 : result;
};

var nums = [2, 1, 4, 3];
var expected = 2;
var result = semiOrderedPermutation(nums);
console.log(result, result === expected);

var nums = [2, 4, 1, 3];
var expected = 3;
var result = semiOrderedPermutation(nums);
console.log(result, result === expected);

var nums = [1, 3, 4, 2, 5];
var expected = 0;
var result = semiOrderedPermutation(nums);
console.log(result, result === expected);

var nums = [4, 3, 5, 2, 1];
var expected = 5;
var result = semiOrderedPermutation(nums);
console.log(result, result === expected);
