// 438. Find All Anagrams in a String
// https://leetcode.com/problems/find-all-anagrams-in-a-string/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = [];
  const a = 'a'.charCodeAt(0);
  const letters = Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    const chP = p.charCodeAt(i) - a;
    letters[chP]++;
  }

  let left = -1;
  for (let right = 0; right < s.length; right++) {
    const chR = s.charCodeAt(right) - a;
    if (letters[chR] - 1 < 0) {
      while (s[++left] !== s[right]) {
        const chL = s.charCodeAt(left) - a;
        letters[chL]++;
      }
    } else {
      letters[chR]--;
    }
    if (right - left === p.length) {
      result.push(left + 1);
    }
  }

  return result;
};

var s = 'cbaebabacd',
  p = 'abc';
var expected = [0, 6];
var result = findAnagrams(s, p);
console.log(result, result.join() === expected.join());

var s = 'abab',
  p = 'ab';
var expected = [0, 1, 2];
var result = findAnagrams(s, p);
console.log(result, result.join() === expected.join());
