// 1796. Second Largest Digit in a String
// https://leetcode.com/problems/second-largest-digit-in-a-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let largest = -1;
  let secondLargest = -1;
  for (const char of s) {
    if (char >= '0' && char <= '9') {
      const digit = Number(char);
      if (digit > largest) {
        secondLargest = largest;
        largest = digit;
      } else if (digit !== largest && digit > secondLargest) {
        secondLargest = digit;
      }
    }
  }
  return secondLargest;
};

var s = 'dfa12321afd';
var expected = 2;
var result = secondHighest(s);
console.log(result, result === expected);

var s = 'abc1111';
var expected = -1;
var result = secondHighest(s);
console.log(result, result === expected);
