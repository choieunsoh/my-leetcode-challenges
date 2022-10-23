// 784. Letter Case Permutation
// https://leetcode.com/problems/letter-case-permutation/
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = (s) => {
  function isChar(c) {
    return c >= '0' && c <= '9' ? false : true;
  }

  const result = [];
  const queue = [];

  function backTracking(charIndex = 0) {
    if (queue.length === s.length) {
      result.push(queue.join(''));
      return;
    }

    const char = s[charIndex];
    queue.push(char);
    backTracking(charIndex + 1);
    queue.pop();

    if (isChar(char)) {
      queue.push(char.toUpperCase());
      backTracking(charIndex + 1);
      queue.pop();
    }
  }

  backTracking();
  return result;
};

var s = 'a1b2';
var expected = ['a1b2', 'a1B2', 'A1b2', 'A1B2'];
var result = letterCasePermutation(s);
console.log(result, result.join() === expected.join());

var s = '3z4';
var expected = ['3z4', '3Z4'];
var result = letterCasePermutation(s);
console.log(result, result.join() === expected.join());
