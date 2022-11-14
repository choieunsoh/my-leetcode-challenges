// 767. Reorganize String
// https://leetcode.com/problems/reorganize-string/
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const count = map.get(s[i]) ?? 0;
    map.set(s[i], count + 1);
  }
  let max = 0;
  let maxChar = '';
  for (const [char, count] of map) {
    if (count > max) {
      max = count;
      maxChar = char;
    }
  }

  if (max > (s.length + 1) / 2) return '';

  const result = Array(s.length);
  let count = map.get(maxChar);
  let index = 0;
  while (count > 0) {
    result[index] = maxChar;
    index += 2;
    count--;
  }
  map.set(maxChar, 0);

  for (let [char, count] of map) {
    while (count > 0) {
      if (index >= s.length) index = 1;
      result[index] = char;
      index += 2;
      count--;
    }
  }

  return result.join('');
};

var s = 'aab';
var expected = 'aba';
var result = reorganizeString(s);
console.log(result, expected, result === expected);

var s = 'aaabbc';
var expected = 'ababac';
var result = reorganizeString(s);
console.log(result, expected, result === expected);

var s = 'aaab';
var expected = '';
var result = reorganizeString(s);
console.log(result, expected, result === expected);

var s = 'eqmeyggvp';
var expected = 'epeqgvgym';
var result = reorganizeString(s);
console.log(result, expected, result === expected);
