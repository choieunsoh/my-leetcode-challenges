// 2565. Subsequence With the Minimum Score
// https://leetcode.com/problems/subsequence-with-the-minimum-score/
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minimumScore = function (s, t) {
  const sLength = s.length;
  const tLength = t.length;
  const prefix = new Array(tLength + 1).fill(sLength);
  prefix[0] = -1;
  const suffix = new Array(tLength + 1).fill(-1);
  suffix[tLength] = sLength;

  let tIndex = 0;
  for (let sIndex = 0; sIndex < sLength; sIndex++) {
    if (tIndex >= tLength) break;
    if (s[sIndex] === t[tIndex]) {
      prefix[tIndex + 1] = sIndex;
      tIndex++;
    }
  }

  tIndex = tLength - 1;
  for (let sIndex = sLength - 1; sIndex >= 0; sIndex--) {
    if (tIndex < 0) break;
    if (s[sIndex] === t[tIndex]) {
      suffix[tIndex] = sIndex;
      tIndex--;
    }
  }

  if (prefix[tLength] < sLength) return 0;

  let result = Math.max(sLength, tLength);
  let left = 0;
  for (let right = 0; right < tLength; right++) {
    left++;
    while (left <= right && prefix[left] < suffix[right + 1]) {
      left++;
    }
    left--;
    if (prefix[left] < suffix[right + 1]) {
      result = Math.min(result, right - left + 1);
    }
  }

  return result;
};

var s = 'abacaba',
  t = 'bzaa';
var expected = 1;
var result = minimumScore(s, t);
console.log(result, result === expected);

var s = 'cde',
  t = 'xyz';
var expected = 3;
var result = minimumScore(s, t);
console.log(result, result === expected);
