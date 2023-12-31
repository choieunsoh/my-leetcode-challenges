// 1624. Largest Substring Between Two Equal Characters
// https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let result = -1;
  const map = new Array(26);
  const a = 'a'.charCodeAt();
  for (let index = 0; index < s.length; index++) {
    const charIndex = s.charCodeAt(index) - a;
    if (map[charIndex] !== undefined) {
      const prevIndex = map[charIndex];
      result = Math.max(result, index - prevIndex - 1);
    } else {
      map[charIndex] = index;
    }
  }
  return result;
};

var s = 'aa';
var expected = 0;
var result = maxLengthBetweenEqualCharacters(s);
console.log(result, result === expected);

var s = 'abca';
var expected = 2;
var result = maxLengthBetweenEqualCharacters(s);
console.log(result, result === expected);

var s = 'cbzxy';
var expected = -1;
var result = maxLengthBetweenEqualCharacters(s);
console.log(result, result === expected);

var s = 'cbcxbqax';
var expected = 3;
var result = maxLengthBetweenEqualCharacters(s);
console.log(result, result === expected);
