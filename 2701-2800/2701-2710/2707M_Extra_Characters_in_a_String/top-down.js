// 2707. Extra Characters in a String
// https://leetcode.com/problems/extra-characters-in-a-string/
// T.C.: O(n^3)
// S.C.: O(n+m)
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  const n = s.length;
  const words = new Set(dictionary);
  const memo = new Array(n);
  return dp(0);

  function dp(startIndex) {
    if (startIndex === n) return 0;
    if (memo[startIndex] !== undefined) return memo[startIndex];

    let countExtraChar = 1 + dp(startIndex + 1);
    for (let endIndex = startIndex; endIndex < n; endIndex++) {
      const word = s.substring(startIndex, endIndex + 1);
      if (words.has(word)) {
        countExtraChar = Math.min(countExtraChar, dp(endIndex + 1));
      }
    }
    return (memo[startIndex] = countExtraChar);
  }
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

var s = 'nbxhpyyawmcsnuycfvoxhmxjclqadablucgikep',
  dictionary = [
    'yaw',
    'nbxhpy',
    'arpqfg',
    'bluc',
    'thxpp',
    'ox',
    'a',
    'zdaru',
    'kmd',
    'flckz',
    'hnnn',
    'dldal',
    'yqssxn',
    'ycf',
    'lctpj',
    'hmxjc',
    'dv',
    'cs',
    'sxt',
    'am',
    'irfij',
    'dbtg',
    'cjnybn',
    'ab',
    'dngs',
    'azbq',
    'qa',
    'mrx',
    'mljbq',
    'hphmy',
    'b',
    'hu',
    's',
    'g',
  ];
var expected = 10;
var result = minExtraChar(s, dictionary);
console.log(result, result === expected);
