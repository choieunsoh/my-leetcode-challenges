// 3696. Maximum Distance Between Unequal Words in Array I
// https://leetcode.com/problems/maximum-distance-between-unequal-words-in-array-i/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {string[]} words
 * @return {number}
 */
var maxDistance = function (words) {
  let maxDistance = 0;
  const n = words.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (words[i] !== words[j]) {
        maxDistance = Math.max(maxDistance, j - i + 1);
      }
    }
  }
  return maxDistance;
};

var words = ['leetcode', 'leetcode', 'codeforces'];
var expected = 3;
var result = maxDistance(words);
console.log(result, result === expected);

var words = ['a', 'b', 'c', 'a', 'a'];
var expected = 4;
var result = maxDistance(words);
console.log(result, result === expected);

var words = ['z', 'z', 'z'];
var expected = 0;
var result = maxDistance(words);
console.log(result, result === expected);
