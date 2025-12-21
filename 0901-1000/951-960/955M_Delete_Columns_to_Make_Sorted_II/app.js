// 955. Delete Columns to Make Sorted II
// https://leetcode.com/problems/delete-columns-to-make-sorted-ii/description/
// T.C.: O(n*w^2)
// S.C.: O(n*w)
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const n = strs.length;
  const w = strs[0].length;
  let result = 0;
  let curr = new Array(n).fill('');
  for (let j = 0; j < w; j++) {
    const temp = Array.from(curr);
    for (let i = 0; i < n; i++) {
      temp[i] += strs[i][j];
    }

    if (isSorted(temp)) {
      curr = temp;
    } else {
      result++;
    }
  }
  return result;

  function isSorted(strs) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i - 1] > strs[i]) {
        return false;
      }
    }
    return true;
  }
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
