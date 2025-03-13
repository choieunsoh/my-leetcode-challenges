// 3356. Zero Array Transformation II
// https://leetcode.com/problems/zero-array-transformation-ii/description/
// T.C.: O(n+m)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  const n = nums.length;
  const diff = new Array(n + 1).fill(0);
  let k = 0;
  let sum = 0;
  for (let index = 0; index < n; index++) {
    while (sum + diff[index] < nums[index]) {
      if (k + 1 > queries.length) return -1;

      const [left, right, val] = queries[k++];
      if (right >= index) {
        diff[Math.max(left, index)] += val;
        diff[right + 1] -= val;
      }
    }
    sum += diff[index];
  }
  return k;
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
