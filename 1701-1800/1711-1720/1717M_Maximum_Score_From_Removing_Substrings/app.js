// 1717. Maximum Score From Removing Substrings
// https://leetcode.com/problems/maximum-score-from-removing-substrings/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  let a = 'a';
  let b = 'b';

  if (x < y) {
    [x, y] = [y, x];
    [a, b] = [b, a];
  }

  let score = 0;
  let aCount = 0;
  let bCount = 0;
  for (const ch of s) {
    if (ch === a) {
      aCount++;
    } else if (ch === b) {
      if (aCount > 0) {
        aCount--;
        score += x;
      } else {
        bCount++;
      }
    } else {
      score += Math.min(aCount, bCount) * y;
      aCount = 0;
      bCount = 0;
    }
  }
  score += Math.min(aCount, bCount) * y;
  return score;
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
