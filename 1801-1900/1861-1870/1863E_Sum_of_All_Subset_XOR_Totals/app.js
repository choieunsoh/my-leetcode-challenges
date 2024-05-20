// 1863. Sum of All Subset XOR Totals
// https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/
// T.C.: O(2 ^ n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  return dfs(0, 0);

  function dfs(index, curr) {
    if (index === nums.length) {
      return curr;
    }

    const withXOR = dfs(index + 1, curr ^ nums[index]);
    const withoutXOR = dfs(index + 1, curr);
    return withXOR + withoutXOR;
  }
};

var nums = [1, 3];
var expected = 6;
var result = subsetXORSum(nums);
console.log(result, result === expected);

var nums = [5, 1, 6];
var expected = 28;
var result = subsetXORSum(nums);
console.log(result, result === expected);

var nums = [3, 4, 5, 6, 7, 8];
var expected = 480;
var result = subsetXORSum(nums);
console.log(result, result === expected);
