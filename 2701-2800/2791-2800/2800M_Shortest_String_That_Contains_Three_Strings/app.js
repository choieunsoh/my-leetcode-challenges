// 2800. Shortest String That Contains Three Strings
// https://leetcode.com/problems/shortest-string-that-contains-three-strings/
/**
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @return {string}
 */
var minimumString = function (a, b, c) {
  const list = [
    shortestString(a, b, c),
    shortestString(a, c, b),
    shortestString(b, a, c),
    shortestString(b, c, a),
    shortestString(c, a, b),
    shortestString(c, b, a),
  ];

  let result = a + b + c;
  for (const str of list) {
    if (str.length === result.length) {
      if (str < result) result = str;
    } else if (str.length < result.length) {
      result = str;
    }
  }
  return result;

  function mergeStrings(a, b) {
    let str = '';
    const length = Math.min(a.length, b.length);
    for (let i = 1; i <= length; i++) {
      const strA = a.substring(a.length - i);
      const strB = b.substring(0, i);
      if (strA === strB) {
        str = strA;
      }
    }
    return a + b.substring(str.length);
  }

  function shortestString(a, b, c) {
    const s = a.includes(b) ? a : mergeStrings(a, b);
    return s.includes(c) ? s : mergeStrings(s, c);
  }
};

var a = 'abc',
  b = 'bca',
  c = 'aaa';
var expected = 'aaabca';
var result = minimumString(a, b, c);
console.log(result, result === expected);

var a = 'ab',
  b = 'ba',
  c = 'aba';
var expected = 'aba';
var result = minimumString(a, b, c);
console.log(result, result === expected);
