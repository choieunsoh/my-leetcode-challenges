// 2309. Greatest English Letter in Upper and Lower Case
// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  const chars = new Array(58).fill(false); // 'A'=65, 'z'=122 → 122-65+1=58
  for (let char of s) {
    chars[char.charCodeAt(0) - 65] = true;
  }
  for (let i = 25; i >= 0; i--) {
    // 'Z'-'A' = 25-0
    if (chars[i] && chars[i + 32]) {
      return String.fromCharCode(65 + i);
    }
  }
  return '';
};

var s = 'lEeTcOdE';
var expected = 'E';
var result = greatestLetter(s);
console.log(result, result === expected);

var s = 'arRAzFif';
var expected = 'R';
var result = greatestLetter(s);
console.log(result, result === expected);

var s = 'AbCdEfGhIjK';
var expected = '';
var result = greatestLetter(s);
console.log(result, result === expected);

var s = 'AAAAA';
var expected = '';
var result = greatestLetter(s);
console.log(result, result === expected);

var s = 'AAAAa';
var expected = 'A';
var result = greatestLetter(s);
console.log(result, result === expected);
