// 3798. Largest Even Number
// https://leetcode.com/problems/largest-even-number/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function (s) {
  const idx = s.lastIndexOf('2');
  return idx === -1 ? '' : s.slice(0, idx + 1);
};

var s = '1112';
var expected = '1112';
var result = largestEven(s);
console.log(result, result === expected);

var s = '221';
var expected = '22';
var result = largestEven(s);
console.log(result, result === expected);

var s = '1';
var expected = '';
var result = largestEven(s);
console.log(result, result === expected);
