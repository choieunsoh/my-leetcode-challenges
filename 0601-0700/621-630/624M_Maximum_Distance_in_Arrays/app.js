// 624. Maximum Distance in Arrays
// https://leetcode.com/problems/maximum-distance-in-arrays/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let min = arrays[0][0];
  let max = arrays[0].at(-1);
  let result = 0;
  for (let i = 1; i < arrays.length; i++) {
    const arr = arrays[i];
    result = Math.max(result, Math.abs(arr[0] - max), Math.abs(min - arr.at(-1)));
    min = Math.min(min, arr[0]);
    max = Math.max(max, arr.at(-1));
  }
  return result;
};

var arrays = [
  [1, 2, 3],
  [4, 5],
  [1, 2, 3],
];
var expected = 4;
var result = maxDistance(arrays);
console.log(result, result === expected);

var arrays = [[1], [1]];
var expected = 0;
var result = maxDistance(arrays);
console.log(result, result === expected);

var arrays = [
  [1, 5],
  [3, 4],
];
var expected = 3;
var result = maxDistance(arrays);
console.log(result, result === expected);

var arrays = [
  [3, 4],
  [1, 5],
];
var expected = 3;
var result = maxDistance(arrays);
console.log(result, result === expected);
