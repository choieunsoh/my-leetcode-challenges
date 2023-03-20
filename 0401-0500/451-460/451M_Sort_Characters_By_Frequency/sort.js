// 451. Sort Characters By Frequency
// https://leetcode.com/problems/sort-characters-by-frequency/
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const count = map.get(s[i]) ?? 0;
    map.set(s[i], count + 1);
  }
  const result = [...map.entries()].sort((a, b) =>
    a[1] === b[1] ? a[0].charCodeAt(0) - b[0].charCodeAt(0) : b[1] - a[1]
  );
  return result.reduce((str, [char, count]) => str + char.repeat(count), '');
};

var s = 'tree';
var expected = 'eert';
var result = frequencySort(s);
console.log(result, result === expected);

var s = 'cccaaa';
var expected = 'aaaccc';
var result = frequencySort(s);
console.log(result, result === expected);

var s = 'Aabb';
var expected = 'bbAa';
var result = frequencySort(s);
console.log(result, result === expected);
