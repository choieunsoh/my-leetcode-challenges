// 3720. Lexicographically Smallest Permutation Greater Than Target
// https://leetcode.com/problems/lexicographically-smallest-permutation-greater-than-target/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexGreaterPermutation = function (s, target) {
  let result = '';
  const n = target.length;
  const cnt = new Array(26).fill(0);
  for (const c of s) {
    cnt[c.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < n; i++) {
    const targetChar = target.charCodeAt(i) - 97;

    // Case 1: First try to place the same character as target[i] at the current position
    if (cnt[targetChar] > 0) {
      cnt[targetChar]--;
      // Check if the remaining characters can form a string greater than target[i+1:]
      if (canFormGreater(cnt, target, i + 1)) {
        result += target[i];
        continue;
      }
      // Cannot form a larger string, backtrack
      cnt[targetChar]++;
    }

    // Case 2: Place a character greater than target[i] at the current position
    for (let j = targetChar + 1; j < 26; j++) {
      if (cnt[j] > 0) {
        cnt[j]--;
        result += String.fromCharCode(97 + j);
        // Fill remaining positions with the smallest lexicographical order
        result += getMinString(cnt);
        return result;
      }
    }

    // No feasible solution found, return directly
    return '';
  }

  return '';

  // Check if the remaining characters can form a string greater than the suffix.
  function canFormGreater(cnt, target, start) {
    const maxStr = getMaxString(cnt);
    const suffix = target.substring(start);
    return maxStr > suffix;
  }

  // Get the maximum lexicographical string (in descending order)
  function getMaxString(cnt) {
    let result = '';
    for (let i = 25; i >= 0; i--) {
      result += String.fromCharCode(97 + i).repeat(cnt[i]);
    }
    return result;
  }

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
