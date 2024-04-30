// 1915. Number of Wonderful Substrings
// https://leetcode.com/problems/number-of-wonderful-substrings/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {
  const freq = new Array(2 ** 10).fill(0);
  freq[0] = 1;
  const a = 'a'.charCodeAt(0);
  let result = 0;
  let mask = 0;
  for (let i = 0; i < word.length; i++) {
    const bit = word.charCodeAt(i) - a;
    mask ^= 1 << bit;

    result += freq[mask];
    freq[mask]++;

    for (let countBit = 0; countBit < 10; countBit++) {
      const countMask = mask ^ (1 << countBit);
      result += freq[countMask];
    }
  }

  return result;
};

var word = 'aba';
var expected = 4;
var result = wonderfulSubstrings(word);
console.log(result, result === expected);

var word = 'aabb';
var expected = 9;
var result = wonderfulSubstrings(word);
console.log(result, result === expected);

var word = 'he';
var expected = 2;
var result = wonderfulSubstrings(word);
console.log(result, result === expected);
