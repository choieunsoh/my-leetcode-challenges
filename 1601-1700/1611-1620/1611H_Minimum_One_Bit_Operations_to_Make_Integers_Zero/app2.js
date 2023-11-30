// 1611. Minimum One Bit Operations to Make Integers Zero
// https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function (n) {
  if (n === 0) {
    return 0;
  }

  let k = 0;
  let curr = 1;
  while (curr * 2 <= n) {
    curr *= 2;
    k++;
  }

  return Math.pow(2, k + 1) - 1 - minimumOneBitOperations(n ^ curr);
};

var n = 3;
var expected = 2;
var result = minimumOneBitOperations(n);
console.log(result, result === expected);

var n = 6;
var expected = 4;
var result = minimumOneBitOperations(n);
console.log(result, result === expected);
