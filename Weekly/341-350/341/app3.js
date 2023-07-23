/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  let result = 0;
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    const next = word.charAt(i + 1);
    const next2 = word.charAt(i + 2);
    console.log(i, char, next, result);
    if (char === 'a') {
      if (next === 'a' || !next) {
        result += 2;
      } else if (next === 'b') {
        i += 1;
        if (next2 !== 'c') {
          result += 1;
        }
      } else {
        i += 1;
        result += 1;
      }
    } else if (char === 'b') {
      result += 1;
      console.log(i, char, next, result);
      if (next !== 'c') {
        result += 1;
        console.log(i, char, next, result);
      }
    } else {
      if (word[i - 1] !== 'b') {
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
