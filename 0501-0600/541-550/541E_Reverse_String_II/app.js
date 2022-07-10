// https://leetcode.com/problems/reverse-string-ii/
// 541. Reverse String II
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split('');
  for (let i = 0; i < s.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, s.length - 1);
    while (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }

  return s.join('');
};

var s = 'abcdefg',
  k = 2,
  expected = 'bacdfeg';
var result = reverseStr(s, k);
console.log(result, expected === result);

var s = 'abcd',
  k = 2,
  expected = 'bacd';
var result = reverseStr(s, k);
console.log(result, expected === result);
