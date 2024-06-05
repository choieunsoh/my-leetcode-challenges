// 1002. Find Common Characters
// https://leetcode.com/problems/find-common-characters/
// T.C.: O(m * n)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const result = [];
  const n = words.length;
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < words[0].length; i++) {
    const index = words[0].charCodeAt(i) - a;
    counts[index]++;
  }

  for (let w = 1; w < n; w++) {
    const word = words[w];
    const currCounts = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - a;
      currCounts[index]++;
    }

    for (let i = 0; i < counts.length; i++) {
      counts[i] = Math.min(counts[i], currCounts[i]);
    }
  }

  for (let i = 0; i < counts.length; i++) {
    const count = counts[i];
    const char = String.fromCharCode(i + a);
    result.push(...char.repeat(count));
  }
  return result;
};

var words = ['bella', 'label', 'roller'];
var expected = ['e', 'l', 'l'];
var result = commonChars(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['cool', 'lock', 'cook'];
var expected = ['c', 'o'];
var result = commonChars(words);
console.log(result, result.sort().join() === expected.sort().join());
