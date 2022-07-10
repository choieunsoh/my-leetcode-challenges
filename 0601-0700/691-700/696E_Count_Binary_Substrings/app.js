// https://leetcode.com/problems/count-binary-substrings/
// 696. Count Binary Substrings
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  const groups = [1];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      groups[groups.length - 1]++;
    } else {
      groups.push(1);
    }
  }

  let count = 0;
  for (let i = 1; i < groups.length; i++) {
    count += Math.min(groups[i], groups[i - 1]);
  }

  return count;
};

var s = '00110011';
var expected = 6;
console.log(countBinarySubstrings(s), expected);

var s = '10101';
var expected = 4;
console.log(countBinarySubstrings(s), expected);
