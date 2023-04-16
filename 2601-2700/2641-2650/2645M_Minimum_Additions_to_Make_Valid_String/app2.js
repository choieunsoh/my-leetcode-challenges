// 2645. Minimum Additions to Make Valid String
// https://leetcode.com/problems/minimum-additions-to-make-valid-string/
/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  let result = 0;
  let remain = 3;
  for (let i = 0; i < word.length; i++) {
    const prev = word.charAt(i - 1);
    const current = word.charAt(i);
    if (i && prev >= current) {
      result += remain;
      remain = 3;
    }
    remain--;
  }
  return result + remain;
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
