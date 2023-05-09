// 2634. Filter Elements from Array
// https://leetcode.com/problems/filter-elements-from-array/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (fn(n, i)) arr[index++] = n;
  }
  arr.length = index;
  return arr;
};

var arr = [0, 10, 20, 30],
  fn = function greaterThan10(n) {
    return n > 10;
  };
var expected = [20, 30];
var result = filter(arr, fn);
console.log(result, result.join() === expected.join());

var arr = [1, 2, 3],
  fn = function firstIndex(n, i) {
    return i === 0;
  };
var expected = [1];
var result = filter(arr, fn);
console.log(result, result.join() === expected.join());

var arr = [-2, -1, 0, 1, 2],
  fn = function plusOne(n) {
    return n + 1;
  };
var expected = [-2, 0, 1, 2];
var result = filter(arr, fn);
console.log(result, result.join() === expected.join());
