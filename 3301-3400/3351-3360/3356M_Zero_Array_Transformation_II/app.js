// 3356. Zero Array Transformation II
// https://leetcode.com/problems/zero-array-transformation-ii/description/
// T.C.: O((n+m) log m)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  const n = nums.length;
  let left = 0;
  let right = queries.length;
  if (!canBeZeroArray(right)) return -1;

  while (left <= right) {
    const mid = (left + right) >> 1;
    if (canBeZeroArray(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;

  function canBeZeroArray(k) {
    const diff = new Array(n + 1).fill(0);
    for (let i = 0; i < k; i++) {
      const [left, right, val] = queries[i];
      diff[left] += val;
      diff[right + 1] -= val;
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += diff[i];
      if (sum < nums[i]) return false;
    }
    return true;
  }
};

var nums = [2, 0, 2],
  queries = [
    [0, 2, 1],
    [0, 2, 1],
    [1, 1, 3],
  ];
var expected = 2;
var result = minZeroArray(nums, queries);
console.log(result, result === expected);

var nums = [4, 3, 2, 1],
  queries = [
    [1, 3, 2],
    [0, 2, 1],
  ];
var expected = -1;
var result = minZeroArray(nums, queries);
console.log(result, result === expected);
