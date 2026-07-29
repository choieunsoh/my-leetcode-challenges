// 3518. Smallest Palindromic Rearrangement II
// https://leetcode.com/problems/smallest-palindromic-rearrangement-ii/description/
// T.C.: O(n⋅σ⋅(σ+min(n,log k)))
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function (s, k) {
  const C = (n, m, kLimit) => {
    let res = 1;
    m = Math.min(m, n - m);

    for (let i = 1; i <= m; i++) {
      res = (res * (n - i + 1)) / i;
      if (res > kLimit) {
        return kLimit + 1;
      }
    }
    return res;
  };

  const partition = Math.floor(s.length / 2);
  const bucket = new Int32Array(26);

  for (let i = 0; i < partition; i++) {
    bucket[s.charCodeAt(i) - 97] += 1;
  }

  const permutations = (rem) => {
    let ways = 1;
    for (let i = 0; i < 26; i++) {
      if (bucket[i] === 0) {
        continue;
      }

      ways *= C(rem, bucket[i], k);
      if (ways > k) {
        break;
      }
      rem -= bucket[i];
    }
    return ways;
  };

  let left = '';
  let startIndex = 1;

  for (let pos = 0; pos < partition; pos++) {
    for (let i = 0; i < 26; i++) {
      if (bucket[i] === 0) {
        continue;
      }

      bucket[i] -= 1;

      const ways = permutations(partition - pos - 1);
      if (startIndex + ways > k) {
        left += String.fromCharCode(i + 97);
        break;
      }

      bucket[i] += 1;
      startIndex += ways;
    }
  }

  if (left.length < partition) {
    return '';
  }

  const mid = s.length % 2 !== 0 ? s[partition] : '';
  const right = left.split('').reverse().join('');

  return left + mid + right;
};

var s = 'abba',
  k = 2;
var expected = 'baab';
var result = smallestPalindrome(s, k);
console.log(result, result === expected);

var s = 'aa',
  k = 2;
var expected = '';
var result = smallestPalindrome(s, k);
console.log(result, result === expected);

var s = 'bacab',
  k = 1;
var expected = 'abcba';
var result = smallestPalindrome(s, k);
console.log(result, result === expected);
