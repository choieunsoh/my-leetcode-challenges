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
    const replace = s.slice(i, i + k).reverse();
    s.splice(i, k, ...replace);
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
