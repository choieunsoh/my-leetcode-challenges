// 2268. Minimum Number of Keypresses
// https://leetcode.com/problems/minimum-number-of-keypresses/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minimumKeypresses = function (s) {
  const a = 'a'.charCodeAt(0);
  const freq = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - a]++;
  }
  freq.sort((a, b) => b - a);

  let totalPresses = 0;
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] === 0) break;
    const press = Math.ceil((i + 1) / 9);
    totalPresses += press * freq[i];
  }

  return totalPresses;
};

var s = 'apple';
var expected = 5;
var result = minimumKeypresses(s);
console.log(result, result === expected);

var s = 'abcdefghijkl';
var expected = 15;
var result = minimumKeypresses(s);
console.log(result, result === expected);
