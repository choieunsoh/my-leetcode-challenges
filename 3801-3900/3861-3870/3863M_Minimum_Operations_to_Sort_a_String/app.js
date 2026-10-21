// 3863. Minimum Operations to Sort a String
// https://leetcode.com/problems/minimum-operations-to-sort-a-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let min = Infinity;
  let max = -Infinity;
  let num = 0;
  let sum = 1;
  let bool = true;
  let number = 1;
  let minindex = -1;
  let maxindex = -1;

  for (let x = 0; x < s.length; x++) {
    num = s.charCodeAt(x);
    if (num < min) {
      min = num;
      sum = 1;
      minindex = x;
    } else if (num === min) {
      sum++;
    }
    if (num > max) {
      max = num;
      number = 1;
      maxindex = x;
    } else if (num === max) {
      number++;
      maxindex = x;
    }
    if (x > 0 && s.charCodeAt(x) < s.charCodeAt(x - 1)) {
      bool = false;
    }
  }

  if (bool) return 0;
  if (s.length < 3) return -1;
  if (minindex === 0 || maxindex === s.length - 1) return 1;
  if (sum === 1 && number === 1 && minindex === s.length - 1 && maxindex === 0) return 3;
  return 2;
};

var s = 'dog';
var expected = 1;
var result = minOperations(s);
console.log(result, result === expected);

var s = 'card';
var expected = 2;
var result = minOperations(s);
console.log(result, result === expected);

var s = 'gf';
var expected = -1;
var result = minOperations(s);
console.log(result, result === expected);
