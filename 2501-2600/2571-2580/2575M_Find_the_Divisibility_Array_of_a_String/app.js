// 2575. Find the Divisibility Array of a String
// https://leetcode.com/problems/find-the-divisibility-array-of-a-string/
/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function (word, m) {
  const result = [];
  let value = 0;

  for (var ch of word) {
    value = (value * 10 + +ch) % m;
    result.push(value === 0 ? 1 : 0);
  }

  return result;
};

var word = '998244353',
  m = 3;
var expected = [1, 1, 0, 0, 0, 1, 1, 0, 0];
var result = divisibilityArray(word, m);
console.log(result, result.join() === expected.join());

var word = '1010',
  m = 10;
var expected = [0, 1, 0, 1];
var result = divisibilityArray(word, m);
console.log(result, result.join() === expected.join());

var word = '4065582576255570359135118255554163128235573295923545700491253287387',
  m = 5;
var expected = [
  0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
];
var result = divisibilityArray(word, m);
console.log(result, result.join() === expected.join());
