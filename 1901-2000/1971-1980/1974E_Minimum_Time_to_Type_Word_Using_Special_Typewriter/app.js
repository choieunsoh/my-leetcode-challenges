// 1974. Minimum Time to Type Word Using Special Typewriter
// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  const a = 'a'.charCodeAt(0);
  let time = word.length;
  let lastIndex = 0;
  for (let i = 0; i < word.length; i++) {
    const charIndex = word[i].charCodeAt(0) - a;
    const forward = Math.abs(lastIndex - charIndex);
    const backward = 26 - forward;
    time += Math.min(forward, backward);
    lastIndex = charIndex;
  }
  return time;
};

var word = 'abc';
var expected = 5;
var result = minTimeToType(word);
console.log(result, result === expected);

var word = 'bza';
var expected = 7;
var result = minTimeToType(word);
console.log(result, result === expected);

var word = 'zjpc';
var expected = 34;
var result = minTimeToType(word);
console.log(result, result === expected);
