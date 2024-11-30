// 358. Rearrange String k Distance Apart
// https://leetcode.com/problems/rearrange-string-k-distance-apart/
// T.C.: O(n)
// S.C.: O(k)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function (s, k) {
  const freq = new Map();
  let maxFreq = 0;
  for (const ch of s) {
    const count = freq.get(ch) ?? 0;
    freq.set(ch, count + 1);
    maxFreq = Math.max(maxFreq, count + 1);
  }

  const mostChars = new Set();
  const secondChars = new Set();
  for (const [ch, count] of freq) {
    if (count === maxFreq) {
      mostChars.add(ch);
    } else if (count === maxFreq - 1) {
      secondChars.add(ch);
    }
  }

  const segments = new Array(maxFreq).fill('');
  for (let i = 0; i < maxFreq; i++) {
    for (const ch of mostChars) {
      segments[i] += ch;
    }
    if (i < maxFreq - 1) {
      for (const ch of secondChars) {
        segments[i] += ch;
      }
    }
  }

  let segmentIndex = 0;
  for (const [ch, count] of freq) {
    if (mostChars.has(ch) || secondChars.has(ch)) continue;
    for (let j = count; j > 0; j--) {
      segments[segmentIndex] += ch;
      segmentIndex = (segmentIndex + 1) % (maxFreq - 1);
    }
  }

  for (let i = 0; i < maxFreq - 1; i++) {
    if (segments[i].length < k) return '';
  }

  return segments.join('');
};

var s = 'aabbcc',
  k = 3;
var expected = 'abcabc';
var result = rearrangeString(s, k);
console.log(result, result === expected);

var s = 'aaabc',
  k = 3;
var expected = '';
var result = rearrangeString(s, k);
console.log(result, result === expected);

var s = 'aaadbbcc',
  k = 2;
var expected = 'abacabcd';
var result = rearrangeString(s, k);
console.log(result, result === expected);
