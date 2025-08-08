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
  let cur_max = 0;
  let cnt = 0;

  while (true) {
    for (let i = 0; i < n; ++i) {
      pos[i] = metaSearch(mat[i], pos[i], cur_max);
      if (pos[i] >= m) {
        return -1;
      }
      if (mat[i][pos[i]] !== cur_max) {
        cnt = 1;
        cur_max = mat[i][pos[i]];
      } else if (++cnt === n) {
        return cur_max;
      }
    }
  }

  function metaSearch(row, pos, val) {
    const sz = row.length;
    let d = 1;
    while (pos < sz && row[pos] < val) {
      d <<= 1;
      if (row[Math.min(pos + d, sz - 1)] >= val) {
        d = 1;
      }
      pos += d;
    }
    return pos;
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
