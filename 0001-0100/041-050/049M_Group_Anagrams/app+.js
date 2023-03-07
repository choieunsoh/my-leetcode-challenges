// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  const a = 'a'.charCodeAt(0);
  const result = new Map();
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    let hashCode = 1;
    for (let j = 0; j < str.length; j++) {
      const index = str.charCodeAt(j) - a;
      hashCode *= primes[index];
    }

    const list = result.get(hashCode);
    if (list) {
      list.push(str);
    } else {
      result.set(hashCode, [str]);
    }
  }

  return [...result.values()];
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
