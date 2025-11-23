// 3750. Minimum Number of Flips to Reverse Binary String
// https://leetcode.com/problems/minimum-number-of-flips-to-reverse-binary-string/description/
// T.C.: O(log n)
// S.C.: O(log n)
/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function (n) {
  const s = n.toString(2);
  const len = s.length;
  let left = 0;
  let right = len - 1;
  let flips = 0;
  while (left < right) {
    if (s[left++] !== s[right--]) {
      flips += 2;
    }
  }
  return flips;
};

var n = 7;
var expected = 0;
var result = minimumFlips(n);
console.log(result, result === expected);

var n = 10;
var expected = 4;
var result = minimumFlips(n);
console.log(result, result === expected);
