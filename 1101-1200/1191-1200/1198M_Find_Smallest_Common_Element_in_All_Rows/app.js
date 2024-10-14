// 1198. Find Smallest Common Element in All Rows
// https://leetcode.com/problems/find-smallest-common-element-in-all-rows/description/
// T.C.: O(m * n)
// S.C.: O(k)
/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const counts = new Array(10001).fill(0);
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      const num = mat[i][j];
      if (counts[num] === m - 1) return num;
      counts[num]++;
    }
  }
  return -1;
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
