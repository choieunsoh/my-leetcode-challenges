// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groups = new Map();
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const counter = new Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      const index = str.charCodeAt(j) - a;
      counter[index]++;
    }
    const key = counter.join();
    if (groups.has(key)) {
      groups.get(key).push(str);
    } else {
      groups.set(key, [str]);
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
