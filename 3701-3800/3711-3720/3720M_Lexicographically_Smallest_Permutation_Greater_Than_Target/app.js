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
  const n = s.length;
  const cnt = new Int32Array(26);
  for (let i = 0; i < n; i++) {
    cnt[s.charCodeAt(i) - 97]++;
  }

  let best = -1;
  let bestChar = -1;
  for (let i = 0; i < n; i++) {
    const t = target.charCodeAt(i) - 97;
    for (let c = t + 1; c < 26; c++) {
      if (cnt[c] > 0) {
        best = i;
        bestChar = c;
        break;
      }
    }
    if (cnt[t] === 0) break;
    cnt[t]--;
  }
  if (best === -1) return '';

  cnt.fill(0);
  for (let i = 0; i < n; i++) {
    cnt[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < best; i++) {
    cnt[target.charCodeAt(i) - 97]--;
  }
  cnt[bestChar]--;

  let result = target.slice(0, best) + String.fromCharCode(97 + bestChar);
  for (let c = 0; c < 26; c++) {
    if (cnt[c] > 0) {
      result += String.fromCharCode(97 + c).repeat(cnt[c]);
    }
  }
  return result;
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
