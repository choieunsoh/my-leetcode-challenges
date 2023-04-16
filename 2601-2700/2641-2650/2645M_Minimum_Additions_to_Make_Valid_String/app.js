// 2645. Minimum Additions to Make Valid String
// https://leetcode.com/problems/minimum-additions-to-make-valid-string/
/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  let result = 0;
  for (let i = 0; i < word.length; i++) {
    const current = word.charAt(i);
    const next = word.charAt(i + 1);
    if (current === 'a') {
      if (next === 'a' || !next) {
        result += 2;
      } else if (next === 'b') {
        i += 1;
        const nextOfNext = word.charAt(i + 2);
        if (nextOfNext !== 'c') {
          result += 1;
        }
      } else {
        i += 1;
        result += 1;
      }
    } else if (current === 'b') {
      result += 1;
      if (next !== 'c') {
        result += 1;
      }
    } else {
      const prev = word.charAt(ii - 1);
      if (prev !== 'b') {
        result += 2;
      }
    }
  }

  return result;
};

var word = 'aaaacc';
var expected = 9;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'aaaabb';
var expected = 9;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'aaaaac';
var expected = 9;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'b';
var expected = 2;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'bb';
var expected = 4;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'abba';
var expected = 5;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'aaa';
var expected = 6;
var result = addMinimum(word);
console.log(result, result === expected);

var word = 'abc';
var expected = 0;
var result = addMinimum(word);
console.log(result, result === expected);
