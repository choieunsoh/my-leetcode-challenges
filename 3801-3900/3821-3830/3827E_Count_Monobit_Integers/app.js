// 3827. Count Monobit Integers
// https://leetcode.com/problems/count-monobit-integers/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var countMonobit = function (n) {
  if (n == 0) return 1;
  let count = 0;
  let monoBitValues = [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]; // monobit values (only upto thousand needed)
  for (let i = 0; i < monoBitValues.length; i++) {
    if (monoBitValues[i] > n) {
      const val = makeAllBitsOne(monoBitValues[i - 1]); // greatest monobit value possible till monoBitValues[i]
      return val > n ? i - 1 : i;
    }
  }

  function makeAllBitsOne(n) {
    return parseInt('1'.repeat(n.toString(2).length), 2);
  }
};

var n = 1;
var expected = 2;
var result = countMonobit(n);
console.log(result, result === expected);

var n = 4;
var expected = 3;
var result = countMonobit(n);
console.log(result, result === expected);
