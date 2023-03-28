// minSubstringWithAllChars
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function solution(s, t) {
  const chars = t.split('');
  for (let n = t.length; n < s.length; n++) {
    for (let i = 0; i < s.length - n + 1; i++) {
      const substr = s.substring(i, i + n);
      if (chars.every((c) => substr.includes(c))) {
        return substr;
      }
    }
  }
  return s;
}

var s = 'adobecodebanc',
  t = 'abc';
var expected = 'banc';
var result = solution(s, t);
console.log(result, result === expected);

var s = 'zqyvbfeiee',
  t = 'ze';
var expected = 'zqyvbfe';
var result = solution(s, t);
console.log(result, result === expected);
