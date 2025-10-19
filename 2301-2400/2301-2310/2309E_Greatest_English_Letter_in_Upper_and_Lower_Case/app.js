// 2309. Greatest English Letter in Upper and Lower Case
// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let result = '';
  const seen = new Set(s);
  for (let i = 90; i >= 65; i--) {
    const upper = String.fromCharCode(i);
    const lower = String.fromCharCode(i + 32);
    if (seen.has(upper) && seen.has(lower)) {
      return upper;
    }
  }
  return result;
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
