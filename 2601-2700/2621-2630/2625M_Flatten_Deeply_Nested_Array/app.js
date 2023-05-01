// 2625. Flatten Deeply Nested Array
// https://leetcode.com/problems/flatten-deeply-nested-array/
/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;
  const result = [];
  return flatten(arr, n);

  function flatten(values, n) {
    for (let i = 0; i < values.length; i++) {
      if (n > 0 && Array.isArray(values[i])) {
        flatten(values[i], n - 1);
      } else {
        result.push(values[i]);
      }
    }
    return result;
  }
};

var arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
  n = 0;
var expected = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
var result = flat(arr, n);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
  n = 1;
var expected = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15];
var result = flat(arr, n);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, [9, 10, 11], 12],
    [13, 14, 15],
  ],
  n = 2;
var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var result = flat(arr, n);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
