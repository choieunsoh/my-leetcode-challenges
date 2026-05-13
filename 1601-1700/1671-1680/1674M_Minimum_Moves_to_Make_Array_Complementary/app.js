// 1674. Minimum Moves to Make Array Complementary
// https://leetcode.com/problems/minimum-moves-to-make-array-complementary/description/
// T.C.: O(n + L)
// S.C.: O(L)
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function (nums, limit) {
  const n = nums.length;
  const diff = new Array(2 * limit + 2).fill(0);

  for (let i = 0; i < n / 2; i++) {
    const a = Math.min(nums[i], nums[n - 1 - i]);
    const b = Math.max(nums[i], nums[n - 1 - i]);

    diff[2] += 2;
    diff[a + 1] -= 1;
    diff[a + b] -= 1;
    diff[a + b + 1] += 1;
    diff[b + limit + 1] += 1;
  }

  let minOps = n;
  let currentOps = 0;
  for (let c = 2; c <= 2 * limit; c++) {
    currentOps += diff[c];
    minOps = Math.min(minOps, currentOps);
  }
  return minOps;
};

var nums = [1, 2, 4, 3],
  limit = 4;
var expected = 1;
var result = minMoves(nums, limit);
console.log(result, result === expected);

var nums = [1, 2, 2, 1],
  limit = 2;
var expected = 2;
var result = minMoves(nums, limit);
console.log(result, result === expected);

var nums = [1, 2, 1, 2],
  limit = 2;
var expected = 0;
var result = minMoves(nums, limit);
console.log(result, result === expected);
