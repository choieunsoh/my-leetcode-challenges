// 828. Count Unique Characters of All Substrings of a Given String
// https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/
/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
  let count = 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (map.has(char)) {
      const indices = map.get(char);
      indices.push(i);
      map.set(char, indices);
    } else {
      map.set(char, [i]);
    }
  }

  const mod = 1e9 + 7;
  for (const [, indices] of map) {
    for (let i = 0; i < indices.length; i++) {
      const left = i === 0 ? indices[i] : indices[i] - indices[i - 1] - 1;
      const right =
        i === indices.length - 1
          ? s.length - indices[i] - 1
          : indices[i + 1] - indices[i] - 1;
      count += 1 + left + right + ((left * right) % mod);
    }
  }
  return count;
};

var s = 'ABC';
var expected = 10;
var result = uniqueLetterString(s);
console.log(result, expected, result === expected);

var s = 'ABA';
var expected = 8;
var result = uniqueLetterString(s);
console.log(result, expected, result === expected);

var s = 'LEETCODE';
var expected = 92;
var result = uniqueLetterString(s);
console.log(result, expected, result === expected);
