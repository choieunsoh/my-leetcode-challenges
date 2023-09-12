// 1647. Minimum Deletions to Make Character Frequencies Unique
// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let result = 0;
  const counter = new Map();
  for (const ch of s) {
    const count = counter.get(ch) ?? 0;
    counter.set(ch, count + 1);
  }

  const seen = new Set();
  for (let count of counter.values()) {
    while (seen.has(count)) {
      count--;
      result++;
    }
    if (count > 0) {
      seen.add(count);
    }
  }
  return result;
};

var s = 'aab';
var expected = 0;
var result = minDeletions(s);
console.log(result, result === expected);

var s = 'aaabbbcc';
var expected = 2;
var result = minDeletions(s);
console.log(result, result === expected);

var s = 'ceabaacb';
var expected = 2;
var result = minDeletions(s);
console.log(result, result === expected);

var s = 'ceeabaacb';
var expected = 3;
var result = minDeletions(s);
console.log(result, result === expected);

var s = 'aaabbbccc';
var expected = 3;
var result = minDeletions(s);
console.log(result, result === expected);

var s = 'aaabbbcccddd';
var expected = 6;
var result = minDeletions(s);
console.log(result, result === expected);

var s = 'aaabbbcccdddd';
var expected = 3;
var result = minDeletions(s);
console.log(result, result === expected);

var s = 'accdcdadddbaadbc';
var expected = 1;
var result = minDeletions(s);
console.log(result, result === expected);

var s = 'bbcebab';
var expected = 2;
var result = minDeletions(s);
console.log(result, result === expected);
