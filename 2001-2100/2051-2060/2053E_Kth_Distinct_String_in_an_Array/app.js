// 2053. Kth Distinct String in an Array
// https://leetcode.com/problems/kth-distinct-string-in-an-array/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const counts = new Map();
  for (const str of arr) {
    counts.set(str, (counts.get(str) ?? 0) + 1);
  }
  for (const [str, count] of counts) {
    if (count === 1) {
      k--;
    }
    if (k === 0) {
      return str;
    }
  }
  return '';
};

var arr = ['d', 'b', 'c', 'b', 'c', 'a'],
  k = 2;
var expected = 'a';
var result = kthDistinct(arr, k);
console.log(result, result === expected);

var arr = ['aaa', 'aa', 'a'],
  k = 1;
var expected = 'aaa';
var result = kthDistinct(arr, k);
console.log(result, result === expected);

var arr = ['a', 'b', 'a'],
  k = 3;
var expected = '';
var result = kthDistinct(arr, k);
console.log(result, result === expected);
