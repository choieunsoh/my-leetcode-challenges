// https://leetcode.com/problems/duplicate-zeros/
// 1089. Duplicate Zeros
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
  console.log(arr.join(' '));
};

var arr = [1, 0, 2, 3, 0, 4, 5, 0];
var expected = [1, 0, 0, 2, 3, 0, 0, 4];
console.log(expected.join(' '));
duplicateZeros(arr);
console.log(expected.join(' ') === arr.join(' '));

var arr = [1, 2, 3];
var expected = [1, 2, 3];
console.log(expected.join(' '));
duplicateZeros(arr);
console.log(expected.join(' ') === arr.join(' '));

var arr = [8, 4, 5, 0, 0, 0, 0, 7];
var expected = [8, 4, 5, 0, 0, 0, 0, 0];
console.log(expected.join(' '));
duplicateZeros(arr);
console.log(expected.join(' ') === arr.join(' '));

var arr = [
  9, 9, 9, 4, 8, 0, 0, 3, 7, 2, 0, 0, 0, 0, 9, 1, 0, 0, 1, 1, 0, 5, 6, 3, 1, 6,
  0, 0, 2, 3, 4, 7, 0, 3, 9, 3, 6, 5, 8, 9, 1, 1, 3, 2, 0, 0, 7, 3, 3, 0, 5, 7,
  0, 8, 1, 9, 6, 3, 0, 8, 8, 8, 8, 0, 0, 5, 0, 0, 0, 3, 7, 7, 7, 7, 5, 1, 0, 0,
  8, 0, 0,
];
var expected = [
  9, 9, 9, 4, 8, 0, 0, 0, 0, 3, 7, 2, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0,
  1, 1, 0, 0, 5, 6, 3, 1, 6, 0, 0, 0, 0, 2, 3, 4, 7, 0, 0, 3, 9, 3, 6, 5, 8, 9,
  1, 1, 3, 2, 0, 0, 0, 0, 7, 3, 3, 0, 0, 5, 7, 0, 0, 8, 1, 9, 6, 3, 0, 0, 8, 8,
  8, 8, 0,
];
console.log(expected.join(' '));
duplicateZeros(arr);
console.log(expected.join(' ') === arr.join(' '));
