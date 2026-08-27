// 3720. Lexicographically Smallest Permutation Greater Than Target
// https://leetcode.com/problems/lexicographically-smallest-permutation-greater-than-target/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexGreaterPermutation = function (s, target) {
  const cnt = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    cnt[s.charCodeAt(i) - 97]++;
    cnt[target.charCodeAt(i) - 97]--;
  }

  // Try from right to left
  const t = target.split('');
  for (let i = s.length - 1; i >= 0; i--) {
    const b = t[i].charCodeAt(0) - 97;
    cnt[b]++; // Reversal of consumption
    // Check if the prefix can fully match
    if (Math.min(...cnt) < 0) {
      continue;
    }
    // Find the smallest available character larger than b.
    for (let j = b + 1; j < 26; j++) {
      if (cnt[j] > 0) {
        cnt[j]--;
        t[i] = String.fromCharCode(97 + j);
        return t.slice(0, i + 1).join('') + getMinString(cnt);
      }
    }
  }

  return '';

  // Get the lexicographically smallest string (in ascending order)
  function getMinString(cnt) {
    let result = '';
    for (let i = 0; i < 26; i++) {
      result += String.fromCharCode(97 + i).repeat(cnt[i]);
    }
    return result;
  }
};

var s = 'abc',
  target = 'bba';
var expected = 'bca';
var result = lexGreaterPermutation(s, target);
console.log(result, result === expected);

var s = 'leet',
  target = 'code';
var expected = 'eelt';
var result = lexGreaterPermutation(s, target);
console.log(result, result === expected);

var s = 'baba',
  target = 'bbaa';
var expected = '';
var result = lexGreaterPermutation(s, target);
console.log(result, result === expected);
