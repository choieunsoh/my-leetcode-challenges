// 3190. Find Minimum Operations to Make All Elements Divisible by Three
// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let count = 0;
  for (const num of nums) {
    if (num % 3 !== 0) count++;
  }
  return count;
};

var nums = [1, 2, 3, 4];
var expected = 3;
var result = minimumOperations(nums);
console.log(result, result === expected);

var nums = [3, 6, 9];
var expected = 0;
var result = minimumOperations(nums);
console.log(result, result === expected);
