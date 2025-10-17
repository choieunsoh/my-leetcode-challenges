// 2351. First Letter to Appear Twice
// https://leetcode.com/problems/first-letter-to-appear-twice/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const a = 'a'.charCodeAt(0);
  const seen = new Array(26).fill(false);
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - a;
    if (seen[index]) {
      return s[i];
    }
    seen[index] = true;
  }
  return '';
};

var s = 'abccbaacz';
var expected = 'c';
var result = repeatedCharacter(s);
console.log(result, result === expected);

var s = 'abcdd';
var expected = 'd';
var result = repeatedCharacter(s);
console.log(result, result === expected);
