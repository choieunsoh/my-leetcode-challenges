// 2643. Row With Maximum Ones
// https://leetcode.com/problems/row-with-maximum-ones/
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let max = 0;
  let result = [0, 0];
  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++;
        if (count > max) {
          max = count;
          result = [i, max];
        }
      }
    }
  }
  return result;
};

var mat = [
  [0, 1],
  [1, 0],
];
var expected = [0, 1];
var result = rowAndMaximumOnes(mat);
console.log(result, result.join() === expected.join());

var mat = [
  [0, 0, 0],
  [0, 1, 1],
];
var expected = [1, 2];
var result = rowAndMaximumOnes(mat);
console.log(result, result.join() === expected.join());

var mat = [
  [0, 0],
  [1, 1],
  [0, 0],
];
var expected = [1, 2];
var result = rowAndMaximumOnes(mat);
console.log(result, result.join() === expected.join());
