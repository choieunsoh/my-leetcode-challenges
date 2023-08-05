// 2724. Sort By
// https://leetcode.com/problems/sort-by/
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

var arr = [5, 4, 1, 2, 3],
  fn = (x) => x;
var expected = [1, 2, 3, 4, 5];
var result = sortBy(arr, fn);
console.log(result, result.join() === expected.join());

var arr = [{ x: 1 }, { x: 0 }, { x: -1 }],
  fn = (d) => d.x;
var expected = [{ x: -1 }, { x: 0 }, { x: 1 }];
var result = sortBy(arr, fn);
console.log(result, result.join() === expected.join());

var arr = [
    [3, 4],
    [5, 2],
    [10, 1],
  ],
  fn = (x) => x[1];
var expected = [
  [10, 1],
  [5, 2],
  [3, 4],
];
var result = sortBy(arr, fn);
console.log(result, result.join() === expected.join());
