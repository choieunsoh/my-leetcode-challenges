// 2287. Rearrange Characters to Make Target String
// https://leetcode.com/problems/rearrange-characters-to-make-target-string/
// T.C.: O(n+m)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  const a = 'a'.charCodeAt(0);
  const targetFreq = new Array(26).fill(0);
  const sFreq = new Array(26).fill(0);
  for (let i = 0; i < target.length; i++) {
    targetFreq[target.charCodeAt(i) - a]++;
  }
  for (let i = 0; i < s.length; i++) {
    sFreq[s.charCodeAt(i) - a]++;
  }

  let result = s.length;
  for (let i = 0; i < 26; i++) {
    if (targetFreq[i] > 0) {
      result = Math.min(result, (sFreq[i] / targetFreq[i]) | 0);
    }
  }
  return result;
};

var s = 'ilovecodingonleetcode',
  target = 'code';
var expected = 2;
var result = rearrangeCharacters(s, target);
console.log(result, result === expected);

var s = 'abcba',
  target = 'abc';
var expected = 1;
var result = rearrangeCharacters(s, target);
console.log(result, result === expected);

var s = 'abbaccaddaeea',
  target = 'aaaaa';
var expected = 1;
var result = rearrangeCharacters(s, target);
console.log(result, result === expected);

var s = 'abbaccaddaeea',
  target = 'aaaaaaaa';
var expected = 0;
var result = rearrangeCharacters(s, target);
console.log(result, result === expected);

var s = 'abcba',
  target = 'abcz';
var expected = 0;
var result = rearrangeCharacters(s, target);
console.log(result, result === expected);
