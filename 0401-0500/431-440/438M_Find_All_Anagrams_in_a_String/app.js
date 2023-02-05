// 438. Find All Anagrams in a String
// https://leetcode.com/problems/find-all-anagrams-in-a-string/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];
  const result = [];

  const offset = p.length;
  const a = 'a'.charCodeAt(0);
  const countS = Array(26).fill(0);
  const countP = Array(26).fill(0);
  for (let i = 0; i < offset; i++) {
    const chP = p.charCodeAt(i) - a;
    countP[chP]++;
  }

  for (let i = 0; i < s.length; i++) {
    const chR = s.charCodeAt(i) - a;
    countS[chR]++;
    if (i - offset >= 0) {
      const chL = s.charCodeAt(i - offset) - a;
      countS[chL]--;
    }
    if (matched(countS, countP)) result.push(i - offset + 1);
  }

  function matched(s, p) {
    for (let i = 0; i < 26; i++) {
      if (s[i] !== p[i]) return false;
    }
    return true;
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
