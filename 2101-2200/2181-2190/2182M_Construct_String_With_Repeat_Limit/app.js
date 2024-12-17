// 2182. Construct String With Repeat Limit
// https://leetcode.com/problems/construct-string-with-repeat-limit/description/
// T.C.: O(n * k)
// S.C.: O(k)
/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
  const counts = new Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i) - a;
    counts[c]++;
  }

  let result = '';
  let charIndex = 25;
  while (charIndex >= 0) {
    if (counts[charIndex] === 0) {
      charIndex--;
      continue;
    }

    const use = Math.min(counts[charIndex], repeatLimit);
    result += String.fromCharCode(a + charIndex).repeat(use);
    counts[charIndex] -= use;

    if (counts[charIndex] > 0) {
      let smallerCharIndex = charIndex - 1;
      while (smallerCharIndex >= 0 && counts[smallerCharIndex] === 0) {
        smallerCharIndex--;
      }
      if (smallerCharIndex < 0) {
        break;
      }
      result += String.fromCharCode(a + smallerCharIndex);
      counts[smallerCharIndex]--;
    }
  }
  return result;
};

var s = 'cczazcc',
  repeatLimit = 3;
var expected = 'zzcccac';
var result = repeatLimitedString(s, repeatLimit);
console.log(result, result === expected);

var s = 'aababab',
  repeatLimit = 2;
var expected = 'bbabaa';
var result = repeatLimitedString(s, repeatLimit);
console.log(result, result === expected);
