// 3798. Largest Even Number
// https://leetcode.com/problems/largest-even-number/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function (s) {
  const arr = s.split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === '1') {
      arr[i] = '';
    } else {
      break;
    }
  }
  return arr.join('');
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
