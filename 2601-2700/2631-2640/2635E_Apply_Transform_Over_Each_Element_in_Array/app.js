// 2635. Apply Transform Over Each Element in Array
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn.call(this, arr[i], i);
  }
  return arr;
};

var arr = [1, 2, 3],
  fn = function plusone(n) {
    return n + 1;
  };
var expected = [2, 3, 4];
var result = map(arr, fn);
console.log(result, result.join() === expected.join());

var arr = [1, 2, 3],
  fn = function plusI(n, i) {
    return n + i;
  };
var expected = [1, 3, 5];
var result = map(arr, fn);
console.log(result, result.join() === expected.join());

var arr = [10, 20, 30],
  fn = function constant() {
    return 42;
  };
var expected = [42, 42, 42];
var result = map(arr, fn);
console.log(result, result.join() === expected.join());
