// 3696. Maximum Distance Between Unequal Words in Array I
// https://leetcode.com/problems/maximum-distance-between-unequal-words-in-array-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} words
 * @return {number}
 */
var maxDistance = function (words) {
  let maxDistance = 0;
  const n = words.length;
  const lastWord = words[n - 1];
  for (let left = 0; left < n; left++) {
    if (words[left] !== lastWord) {
      maxDistance = Math.max(maxDistance, n - left);
      break;
    }
  }

  const firstWord = words[0];
  for (let right = n - 1; right >= 0; right--) {
    if (firstWord !== words[right]) {
      maxDistance = Math.max(maxDistance, right + 1);
      break;
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
