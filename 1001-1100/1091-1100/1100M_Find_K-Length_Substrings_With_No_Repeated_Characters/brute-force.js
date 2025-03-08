// 1100. Find K-Length Substrings With No Repeated Characters
// https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/description/
// T.C.: O(n*min(m,k))
// S.C.: O(m)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function (s, k) {
  if (k > 26) return 0;

  const a = 'a'.charCodeAt(0);
  const n = s.length;
  let result = 0;
  for (let i = 0; i <= n - k; i++) {
    const freq = new Array(26).fill(0);
    let isUnique = true;
    for (let j = i; j < i + k; j++) {
      const ch = s[j];

      // Incrementing the frequency of current character
      freq[ch.charCodeAt(0) - a]++;

      // If a repeated character is found, we stop the loop
      if (freq[ch.charCodeAt(0) - a] > 1) {
        isUnique = false;
        break;
      }
    }

    // If the substring does not have any repeated characters,
    // we increment the answer
    if (isUnique) {
      result++;
    }
  }

  return result;
};

var s = 'havefunonleetcode',
  k = 5;
var expected = 6;
var result = numKLenSubstrNoRepeats(s, k);
console.log(result, result === expected);

var s = 'home',
  k = 5;
var expected = 0;
var result = numKLenSubstrNoRepeats(s, k);
console.log(result, result === expected);

var s = 'aa',
  k = 1;
var expected = 2;
var result = numKLenSubstrNoRepeats(s, k);
console.log(result, result === expected);
