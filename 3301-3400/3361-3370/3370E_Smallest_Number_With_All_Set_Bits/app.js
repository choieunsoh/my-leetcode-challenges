// 3370. Smallest Number With All Set Bits
// https://leetcode.com/problems/smallest-number-with-all-set-bits/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
  const len = n.toString(2).length;
  return (1 << len) - 1;
};

var n = 5;
var expected = 7;
var result = smallestNumber(n);
console.log(result, result === expected);

var n = 10;
var expected = 15;
var result = smallestNumber(n);
console.log(result, result === expected);
