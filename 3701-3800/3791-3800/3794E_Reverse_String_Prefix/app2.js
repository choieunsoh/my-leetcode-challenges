// 3794. Reverse String Prefix
// https://leetcode.com/problems/reverse-string-prefix/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function (s, k) {
  const arr = s.split('');
  let left = 0;
  let right = k - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join('');
};

var s = 'abcd',
  k = 2;
var expected = 'bacd';
var result = reversePrefix(s, k);
console.log(result, result === expected);

var s = 'xyz',
  k = 3;
var expected = 'zyx';
var result = reversePrefix(s, k);
console.log(result, result === expected);

var s = 'hey',
  k = 1;
var expected = 'hey';
var result = reversePrefix(s, k);
console.log(result, result === expected);
