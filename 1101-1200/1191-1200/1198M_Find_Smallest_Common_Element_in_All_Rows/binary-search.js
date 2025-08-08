// 1198. Find Smallest Common Element in All Rows
// https://leetcode.com/problems/find-smallest-common-element-in-all-rows/description/
// T.C.: O(m * n log m)
// S.C.: O(n)
/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function (mat) {
  const n = mat.length;
  const m = mat[0].length;
  const pos = new Array(n).fill(0);
  for (let j = 0; j < m; ++j) {
    let found = true;
    for (let i = 1; i < n && found; ++i) {
      pos[i] = binarySearch(mat[i], pos[i], m, mat[0][j]);
      if (pos[i] < 0) {
        found = false;
        pos[i] = -pos[i] - 1;
        if (pos[i] >= m) {
          return -1;
        }
      }
    }
    if (found) {
      return mat[0][j];
    }
  }
  return -1;

  function binarySearch(arr, start, end, target) {
    let left = start;
    let right = end - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }
};

var mat = [
  [1, 2, 3, 4, 5],
  [2, 4, 5, 8, 10],
  [3, 5, 7, 9, 11],
  [1, 3, 5, 7, 9],
];
var expected = 5;
var result = smallestCommonElement(mat);
console.log(result, result === expected);

var mat = [
  [1, 2, 3],
  [2, 3, 4],
  [2, 3, 5],
];
var expected = 2;
var result = smallestCommonElement(mat);
console.log(result, result === expected);
