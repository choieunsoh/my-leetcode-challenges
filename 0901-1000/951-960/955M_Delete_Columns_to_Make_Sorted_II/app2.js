// 955. Delete Columns to Make Sorted II
// https://leetcode.com/problems/delete-columns-to-make-sorted-ii/description/
// T.C.: O(n*w)
// S.C.: O(n)
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const n = strs.length;
  const w = strs[0].length;
  const cuts = new Array(n - 1).fill(false);
  let result = 0;
  let curr = new Array(n).fill('');
  search: for (let j = 0; j < w; j++) {
    const temp = Array.from(curr);
    for (let i = 0; i < n - 1; i++) {
      if (!cuts[i] && strs[i][j] > strs[i + 1][j]) {
        result++;
        continue search;
      }
    }

    for (let i = 0; i < n - 1; i++) {
      if (strs[i][j] < strs[i + 1][j]) {
        cuts[i] = true;
      }
    }
  }
  return result;
};

var strs = ['ca', 'bb', 'ac'];
var expected = 1;
var result = minDeletionSize(strs);
console.log(result, result === expected);

var strs = ['xc', 'yb', 'za'];
var expected = 0;
var result = minDeletionSize(strs);
console.log(result, result === expected);

var strs = ['zyx', 'wvu', 'tsr'];
var expected = 3;
var result = minDeletionSize(strs);
console.log(result, result === expected);

var strs = ['xga', 'xfb', 'yfa'];
var expected = 1;
var result = minDeletionSize(strs);
console.log(result, result === expected);
