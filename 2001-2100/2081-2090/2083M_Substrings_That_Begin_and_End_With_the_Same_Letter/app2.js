// 2083. Substrings That Begin and End With the Same Letter
// https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let result = 0;
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - a;
    counts[index]++;
  }
  for (const count of counts) {
    result += (count * (count + 1)) / 2;
  }
  return result;
};

var s = 'abcba';
var expected = 7;
var result = numberOfSubstrings(s);
console.log(result, result === expected);

var s = 'abacad';
var expected = 9;
var result = numberOfSubstrings(s);
console.log(result, result === expected);

var s = 'a';
var expected = 1;
var result = numberOfSubstrings(s);
console.log(result, result === expected);
