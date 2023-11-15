// 1234. Replace the Substring for Balanced String
// https://leetcode.com/problems/replace-the-substring-for-balanced-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  const n = s.length;
  const freq = n / 4;
  const exceedFreq = freq + 1;
  const counts = { Q: 0, W: 0, E: 0, R: 0 };
  let exceed = 0;
  for (const ch of s) {
    if (++counts[ch] === exceedFreq) exceed++;
  }
  if (exceed === 0) return 0;

  let left = 0;
  let right = 0;
  let result = n;
  while (right < n) {
    if (--counts[s.charAt(right)] === freq) exceed--;
    while (exceed === 0) {
      if (++counts[s.charAt(left)] === exceedFreq) exceed++;
      result = Math.min(result, right - left + 1);
      left++;
    }
    right++;
  }
  return result;
};

var s = 'QWER';
var expected = 0;
var result = balancedString(s);
console.log(result, result === expected);

var s = 'QQWE';
var expected = 1;
var result = balancedString(s);
console.log(result, result === expected);

var s = 'QQQW';
var expected = 2;
var result = balancedString(s);
console.log(result, result === expected);
