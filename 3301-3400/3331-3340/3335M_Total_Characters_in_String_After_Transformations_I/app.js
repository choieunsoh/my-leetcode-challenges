// 3335. Total Characters in String After Transformations I
// https://leetcode.com/problems/total-characters-in-string-after-transformations-i/description/
// T.C.: O(m+n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
  const MOD = 1e9 + 7;
  const a = 'a'.charCodeAt(0);
  let counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - a]++;
  }

  for (let round = 0; round < t; round++) {
    const nextCounts = new Array(26).fill(0);
    nextCounts[0] = counts[25];
    nextCounts[1] = (counts[25] + counts[0]) % MOD;
    for (let i = 2; i < 26; i++) {
      nextCounts[i] = counts[i - 1];
    }
    counts = nextCounts;
  }

  let count = 0;
  for (let i = 0; i < 26; i++) {
    count = (count + counts[i]) % MOD;
  }
  return count;
};

var s = 'abcyy',
  t = 2;
var expected = 7;
var result = lengthAfterTransformations(s, t);
console.log(result, result === expected);

var s = 'azbk',
  t = 1;
var expected = 5;
var result = lengthAfterTransformations(s, t);
console.log(result, result === expected);
