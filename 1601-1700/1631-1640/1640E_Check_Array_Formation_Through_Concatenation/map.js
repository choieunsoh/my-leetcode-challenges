// 1640. Check Array Formation Through Concatenation
// https://leetcode.com/problems/check-array-formation-through-concatenation/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  const n = arr.length;
  const map = new Map();
  for (const piece of pieces) {
    map.set(piece[0], piece);
  }

  let i = 0;
  while (i < n) {
    if (!map.has(arr[i])) {
      return false;
    }

    const targetPiece = map.get(arr[i]);
    for (const num of targetPiece) {
      if (num !== arr[i++]) {
        return false;
      }
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
