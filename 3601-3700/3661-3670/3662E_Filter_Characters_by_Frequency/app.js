// 3662. Filter Characters by Frequency
// https://leetcode.com/problems/filter-characters-by-frequency/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var filterCharacters = function (s, k) {
  const a = 'a'.charCodeAt(0);
  const freq = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - a]++;
  }
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const count = freq[s.charCodeAt(i) - a];
    if (count > 0 && count < k) {
      result += s[i];
    }
  }
  return result;
};

var s = 'aadbbcccca',
  k = 3;
var expected = 'dbb';
var result = filterCharacters(s, k);
console.log(result, result === expected);

var s = 'xyz',
  k = 2;
var expected = 'xyz';
var result = filterCharacters(s, k);
console.log(result, result === expected);
