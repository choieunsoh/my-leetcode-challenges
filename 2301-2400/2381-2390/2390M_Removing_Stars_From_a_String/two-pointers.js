// 2390. Removing Stars From a String
// https://leetcode.com/problems/removing-stars-from-a-string/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let index = 0;
  let charIndex = 0;
  const stack = [];
  while (index < s.length) {
    const char = s.charAt(index++);
    if (char === '*') {
      charIndex--;
    } else {
      stack[charIndex++] = char;
    }
  }
  stack.length = charIndex;
  return stack.join('');
};

var s = 'leet**cod*e';
var expected = 'lecoe';
var result = removeStars(s);
console.log(result, result === expected);

var s = 'erase*****';
var expected = '';
var result = removeStars(s);
console.log(result, result === expected);

var s = 'abb*cdfg*****x*';
var expected = 'a';
var result = removeStars(s);
console.log(result, result === expected);
