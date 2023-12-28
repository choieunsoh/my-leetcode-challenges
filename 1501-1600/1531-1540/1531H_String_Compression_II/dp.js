// 1531. String Compression II
// https://leetcode.com/problems/string-compression-ii/description/
// T.C.: O(n * k^2)
// S.C.: O(n * k^2)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function (s, k) {
  const memo = new Map();
  const add = new Set([1, 9, 99]);
  const a = 'a'.charCodeAt();
  return dp(s, 0, String.fromCharCode(a + 26), 0, k);

  function dp(s, idx, lastChar, lastCharCount, k) {
    if (k < 0) {
      return Number.MAX_SAFE_INTEGER / 2;
    }

    if (idx === s.length) {
      return 0;
    }

    const key = idx * 101 * 27 * 101 + (lastChar.charCodeAt() - a) * 101 * 101 + lastCharCount * 101 + k;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let keepChar;
    const deleteChar = dp(s, idx + 1, lastChar, lastCharCount, k - 1);
    if (s.charAt(idx) === lastChar) {
      const extraLength = add.has(lastCharCount) ? 1 : 0;
      keepChar = dp(s, idx + 1, lastChar, lastCharCount + 1, k) + extraLength;
    } else {
      keepChar = dp(s, idx + 1, s.charAt(idx), 1, k) + 1;
    }

    const length = Math.min(keepChar, deleteChar);
    memo.set(key, length);
    return length;
  }
};

var s = 'aaabcccd',
  k = 2;
var expected = 4;
var result = getLengthOfOptimalCompression(s, k);
console.log(result, result === expected);

var s = 'aabbaa',
  k = 2;
var expected = 2;
var result = getLengthOfOptimalCompression(s, k);
console.log(result, result === expected);

var s = 'aaaaaaaaaaa',
  k = 0;
var expected = 3;
var result = getLengthOfOptimalCompression(s, k);
console.log(result, result === expected);
