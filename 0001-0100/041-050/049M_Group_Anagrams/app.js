// https://leetcode.com/problems/group-anagrams/
// 49. Group Anagrams
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groups = new Map();
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort().join('');
    if (groups.has(key)) {
      groups.get(key).push(strs[i]);
    } else {
      groups.set(key, [strs[i]]);
    }
  }

  return [...groups.values()];
};

function match(result, expected) {
  result.forEach((strs) => strs.sort());
  result.sort((a, b) => a.length - b.length);

  expected.forEach((strs) => strs.sort());
  expected.sort((a, b) => a.length - b.length);

  return result.join() === expected.join();
}

var strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
var expected = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];
var result = groupAnagrams(strs);
console.log(result.join());
console.log(result, match(result, expected));

var strs = [''];
var expected = [['']];
var result = groupAnagrams(strs);
console.log(result, result.join() === expected.join());

var strs = ['a'];
var expected = [['a']];
var result = groupAnagrams(strs);
console.log(result, result.join() === expected.join());
