// https://leetcode.com/problems/count-binary-substrings/
// 696. Count Binary Substrings
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let count = 0;
  let prev = 0;
  let curr = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      curr++;
    } else {
      prev = curr;
      curr = 1;
    }
    if (prev >= curr) count++;
  }

  return count;
};

var s = '00110011';
var expected = 6;
console.log(countBinarySubstrings(s), expected);

var s = '10101';
var expected = 4;
console.log(countBinarySubstrings(s), expected);
