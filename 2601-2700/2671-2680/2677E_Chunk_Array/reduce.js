// 2677. Chunk Array
// https://leetcode.com/problems/chunk-array/
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) => {
    return arr.slice(index * size, index * size + size);
  });
};

var arr = [1, 2, 3, 4, 5],
  size = 1;
var expected = [[1], [2], [3], [4], [5]];
var result = chunk(arr, size);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var arr = [1, 9, 6, 3, 2],
  size = 3;
var expected = [
  [1, 9, 6],
  [3, 2],
];
var result = chunk(arr, size);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var arr = [8, 5, 3, 2, 6],
  size = 6;
var expected = [[8, 5, 3, 2, 6]];
var result = chunk(arr, size);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var arr = [],
  size = 1;
var expected = [];
var result = chunk(arr, size);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
