/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  const n = s.length;
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let left = 0; left < n; left++) {
    dp[left + 1] = Math.min(dp[left + 1], dp[left] + 1);
    for (const word of dictionary) {
      const right = left + word.length;
      const substr = s.substring(left, right);
      if (right <= n && substr === word) {
        dp[right] = Math.min(dp[right], dp[left]);
      }
    }
  }
  console.log(dp);
  return dp[n];
};

var s = 'leetscode',
  dictionary = ['leet', 'code', 'leetcode'];
var expected = 1;
var result = minExtraChar(s, dictionary);
console.log(result, result === expected);

var s = 'sayhelloworld',
  dictionary = ['hello', 'world'];
var expected = 3;
var result = minExtraChar(s, dictionary);
console.log(result, result === expected);

var s = 'eglglxa',
  dictionary = [
    'rs',
    'j',
    'h',
    'g',
    'fy',
    'l',
    'fc',
    's',
    'zf',
    'i',
    'k',
    'x',
    'gl',
    'qr',
    'qj',
    'b',
    'm',
    'cm',
    'pe',
    'y',
    'ei',
    'wg',
    'e',
    'c',
    'll',
    'u',
    'lb',
    'kc',
    'r',
    'gs',
    'p',
    'ga',
    'pq',
    'o',
    'wq',
    'mp',
    'ms',
    'vp',
    'kg',
    'cu',
  ];
var expected = 1;
var result = minExtraChar(s, dictionary);
console.log(result, result === expected);

var s = 'dwmodizxvvbosxxw',
  dictionary = ['ox', 'lb', 'diz', 'gu', 'v', 'ksv', 'o', 'nuq', 'r', 'txhe', 'e', 'wmo', 'cehy', 'tskz', 'ds', 'kzbu'];
var expected = 7;
var result = minExtraChar(s, dictionary);
console.log(result, result === expected);
