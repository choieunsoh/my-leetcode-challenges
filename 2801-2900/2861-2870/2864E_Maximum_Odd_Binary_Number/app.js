// 2864. Maximum Odd Binary Number
// https://leetcode.com/problems/maximum-odd-binary-number/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  const n = s.length;
  let ones = 0;
  for (const bit of s) {
    if (bit === '1') ones++;
  }

  const beginningOnes = '1'.repeat(ones - 1);
  const zeros = '0'.repeat(n - ones);
  const endingOne = '1';
  return beginningOnes + zeros + endingOne;
};

var s = '010';
var expected = '001';
var result = maximumOddBinaryNumber(s);
console.log(result, result === expected);

var s = '0101';
var expected = '1001';
var result = maximumOddBinaryNumber(s);
console.log(result, result === expected);
