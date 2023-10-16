// 1331. Rank Transform of an Array
// https://leetcode.com/problems/rank-transform-of-an-array/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const set = new Set(arr);
  const nums = [...set.values()].sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i + 1);
  }

  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = map.get(arr[i]);
  }

  return result;
};

var arr = [40, 10, 20, 30];
var expected = [4, 1, 2, 3];
var result = arrayRankTransform(arr);
console.log(result, result.join() === expected.join());

var arr = [100, 100, 100];
var expected = [1, 1, 1];
var result = arrayRankTransform(arr);
console.log(result, result.join() === expected.join());

var arr = [37, 12, 28, 9, 100, 56, 80, 5, 12];
var expected = [5, 3, 4, 2, 8, 6, 7, 1, 3];
var result = arrayRankTransform(arr);
console.log(result, result.join() === expected.join());
