// 1262. Greatest Sum Divisible by Three
// https://leetcode.com/problems/greatest-sum-divisible-by-three/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  let f = [0, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  for (const num of nums) {
    const g = [...f];
    for (let i = 0; i < 3; i++) {
      const mod = (i + (num % 3)) % 3;
      g[mod] = Math.max(g[mod], f[i] + num);
    }
    f = g;
  }
  return f[0];
};

var nums = [3, 6, 5, 1, 8];
var expected = 18;
var result = maxSumDivThree(nums);
console.log(result, result === expected);

var nums = [4];
var expected = 0;
var result = maxSumDivThree(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 4];
var expected = 12;
var result = maxSumDivThree(nums);
console.log(result, result === expected);
