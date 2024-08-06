// 3016. Minimum Number of Pushes to Type Word II
// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < word.length; i++) {
    counts[word.charCodeAt(i) - a]++;
  }
  counts.sort((a, b) => b - a);

  let result = 0;
  let keys = 0;
  let pushes = 0;
  for (const count of counts) {
    if (count === 0) break;
    if (keys === 0) {
      pushes++;
    }
    keys = (keys + 1) % 8;

    result += pushes * count;
  }
  return result;
};

var word = 'abcde';
var expected = 5;
var result = minimumPushes(word);
console.log(result, result === expected);

var word = 'xyzxyzxyzxyz';
var expected = 12;
var result = minimumPushes(word);
console.log(result, result === expected);

var word = 'aabbccddeeffgghhiiiiii';
var expected = 24;
var result = minimumPushes(word);
console.log(result, result === expected);
