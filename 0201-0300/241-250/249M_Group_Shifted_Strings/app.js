// 249. Group Shifted Strings
// https://leetcode.com/problems/group-shifted-strings/
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
  const map = new Map();
  for (const string of strings) {
    const keys = [];
    for (let i = 0; i < string.length - 1; i++) {
      const shift = (string.charCodeAt(i + 1) - string.charCodeAt(i) + 26) % 26;
      keys.push(shift);
    }
    const key = keys.join(',');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(string);
  }
  return [...map.values()];
};

var strings = ['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z'];
var expected = [['acef'], ['a', 'z'], ['abc', 'bcd', 'xyz'], ['az', 'ba']];
var result = groupStrings(strings);
console.log(result, result.sort().join() === expected.sort().join());

var strings = ['a'];
var expected = [['a']];
var result = groupStrings(strings);
console.log(result, result.sort().join() === expected.sort().join());
