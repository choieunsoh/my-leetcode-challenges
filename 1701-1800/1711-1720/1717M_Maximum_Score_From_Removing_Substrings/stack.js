// 1717. Maximum Score From Removing Substrings
// https://leetcode.com/problems/maximum-score-from-removing-substrings/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  let score = 0;
  const highPairs = x > y ? 'ab' : 'ba';
  const lowPairs = x > y ? 'ba' : 'ab';

  const stringAfterRemovingHighPairs = removePairs(s, highPairs);
  const removedHighPairsCount = (s.length - stringAfterRemovingHighPairs.length) >> 1;
  score += removedHighPairsCount * Math.max(x, y);

  const stringAfterRemovingLowPairs = removePairs(stringAfterRemovingHighPairs, lowPairs);
  const removedLowPairsCount = (stringAfterRemovingHighPairs.length - stringAfterRemovingLowPairs.length) >> 1;
  score += removedLowPairsCount * Math.min(x, y);

  return score;

  function removePairs(str, pairs) {
    const [first, last] = pairs;
    const stack = [];
    for (const ch of str) {
      if (stack.length && stack.at(-1) === first && ch === last) {
        stack.pop();
      } else {
        stack.push(ch);
      }
    }
    return stack.join('');
  }
};

var s = 'cdbcbbaaabab',
  x = 4,
  y = 5;
var expected = 19;
var result = maximumGain(s, x, y);
console.log(result, result === expected);

var s = 'aabbaaxybbaabb',
  x = 5,
  y = 4;
var expected = 20;
var result = maximumGain(s, x, y);
console.log(result, result === expected);

var s = 'cbaabwbbbabbwaaq',
  x = 4074,
  y = 9819;
var expected = 23712;
var result = maximumGain(s, x, y);
console.log(result, result === expected);
