// 1198. Find Smallest Common Element in All Rows
// https://leetcode.com/problems/find-smallest-common-element-in-all-rows/description/
// T.C.: O(m * n)
// S.C.: O(n)
/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function (mat) {
  const n = mat.length;
  const m = mat[0].length;
  const pos = new Array(n).fill(0);
  let curMax = 0;
  let count = 0;

  while (true) {
    for (let i = 0; i < n; i++) {
      while (pos[i] < m && mat[i][pos[i]] < curMax) {
        pos[i]++;
      }
      if (pos[i] >= m) {
        return -1;
      }
      if (mat[i][pos[i]] !== curMax) {
        count = 1;
        curMax = mat[i][pos[i]];
      } else if (++count === n) {
        return curMax;
      }
    }
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
