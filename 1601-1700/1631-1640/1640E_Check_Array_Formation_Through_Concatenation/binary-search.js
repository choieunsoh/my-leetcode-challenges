// 1640. Check Array Formation Through Concatenation
// https://leetcode.com/problems/check-array-formation-through-concatenation/
// T.C.: O(n log m)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  const n = arr.length;
  const pLen = pieces.length;
  // sort the pieces array by first element
  pieces.sort((a, b) => a[0] - b[0]);

  let i = 0;
  while (i < n) {
    let found = -1;
    let left = 0;
    let right = pLen - 1;
    // use binary search to find target piece
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (pieces[mid][0] === arr[i]) {
        found = mid;
        break;
      } else if (pieces[mid][0] > arr[i]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    if (found === -1) {
      return false;
    }
    // check target piece
    const targetPiece = pieces[found];
    for (const x of targetPiece) {
      if (x !== arr[i]) {
        return false;
      }
      i++;
    }
  }
  return true;
};

var arr = [15, 88],
  pieces = [[88], [15]];
var expected = true;
var result = canFormArray(arr, pieces);
console.log(result, result === expected);

var arr = [49, 18, 16],
  pieces = [[16, 18, 49]];
var expected = false;
var result = canFormArray(arr, pieces);
console.log(result, result === expected);

var arr = [91, 4, 64, 78],
  pieces = [[78], [4, 64], [91]];
var expected = true;
var result = canFormArray(arr, pieces);
console.log(result, result === expected);

var arr = [1, 3, 5, 7],
  pieces = [[2, 4, 6, 8]];
var expected = false;
var result = canFormArray(arr, pieces);
console.log(result, result === expected);

var arr = [1, 2, 3],
  pieces = [[2], [1, 3]];
var expected = false;
var result = canFormArray(arr, pieces);
console.log(result, result === expected);
