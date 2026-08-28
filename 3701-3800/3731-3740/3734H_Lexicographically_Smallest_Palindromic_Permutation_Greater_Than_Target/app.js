// 3734. Lexicographically Smallest Palindromic Permutation Greater Than Target
// https://leetcode.com/problems/lexicographically-smallest-palindromic-permutation-greater-than-target/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexPalindromicPermutation = function (s, target) {
  const freq = new Array(26).fill(0);
  const n = s.length;
  for (let i = 0; i < n; i++) {
    freq[s.charCodeAt(i) - 97]++;
  }

  let odd = 26;
  for (let i = 0; i < 26; i++) {
    if (freq[i] & 1) {
      if (odd == 26) {
        odd = i;
        freq[i] = Math.floor(freq[i] / 2);
      } else {
        return '';
      }
    } else {
      freq[i] = Math.floor(freq[i] / 2);
    }
  }

  const half = Math.floor(n / 2);
  const ans = new Array(half);
  let flag = -1;

  for (let i = 0; i < half; i++) {
    const code = target.charCodeAt(i) - 97;
    if (freq[code]) {
      ans[i] = code;
      freq[code]--;
    } else {
      let nxt = checkLarger(freq, target.charCodeAt(i) - 97);
      if (nxt !== -1) {
        flag = i;
        ans[i] = nxt;
        freq[ans[i]]--;
        break;
      }

      i--;
      while (i >= 0) {
        freq[ans[i]]++;

        const nxt = checkLarger(freq, target.charCodeAt(i) - 97);
        if (nxt !== -1) {
          flag = i;
          ans[i] = nxt;
          freq[ans[i]]--;
          break;
        }
        ans[i] = -1;
        i--;
      }
      if (i === -1) return '';
      break;
    }
  }

  if (flag === -1) {
    let currentPal = '';
    for (let j = 0; j < half; j++) {
      currentPal += String.fromCharCode(ans[j] + 97);
    }
    if (n & 1) {
      currentPal += String.fromCharCode(odd + 97);
    }
    for (let j = half - 1; j >= 0; j--) {
      currentPal += String.fromCharCode(ans[j] + 97);
    }

    if (currentPal <= target) {
      let i = half - 1;
      while (i >= 0) {
        freq[ans[i]]++;

        const nxt = checkLarger(freq, target.charCodeAt(i) - 97);
        if (nxt !== -1) {
          flag = i;
          ans[i] = nxt;
          freq[ans[i]]--;
          break;
        }
        ans[i] = -1;
        i--;
      }
      if (i === -1) return '';
    }
  }

  if (flag !== -1 && flag !== n) {
    for (let i = 0; i < 26; i++) {
      while (freq[i] > 0) {
        freq[i]--;
        flag++;
        ans[flag] = i;
      }
    }
  }

  let ans1 = '';
  let temp = '';
  for (const ch of ans) {
    ans1 = ans1 + String.fromCharCode(ch + 97);
  }

  for (let j = ans.length - 1; j >= 0; j--) {
    temp += String.fromCharCode(ans[j] + 97);
  }

  if (n & 1) {
    ans1 = ans1 + String.fromCharCode(odd + 97);
  }

  return ans1 + temp;

  function checkLarger(freq, ch) {
    for (let i = ch + 1; i < 26; i++) {
      if (freq[i] > 0) {
        return i;
      }
    }
    return -1;
  }
};

var s = 'baba',
  target = 'abba';
var expected = 'baab';
var result = lexPalindromicPermutation(s, target);
console.log(result, result === expected);

var s = 'baba',
  target = 'bbaa';
var expected = '';
var result = lexPalindromicPermutation(s, target);
console.log(result, result === expected);

var s = 'abc',
  target = 'abb';
var expected = '';
var result = lexPalindromicPermutation(s, target);
console.log(result, result === expected);

var s = 'aac',
  target = 'abb';
var expected = 'aca';
var result = lexPalindromicPermutation(s, target);
console.log(result, result === expected);
