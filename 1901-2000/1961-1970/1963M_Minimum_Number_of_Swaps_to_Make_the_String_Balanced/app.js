// 1963. Minimum Number of Swaps to Make the String Balanced
// https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let stackSize = 0;
  for (const ch of s) {
    if (ch === '[') {
      stackSize++;
    } else if (stackSize > 0) {
      stackSize--;
    }
  }
  return (stackSize + 1) >> 1;
};

var s = '][][';
var expected = 1;
var result = minSwaps(s);
console.log(result, result === expected);

var s = ']]][[[';
var expected = 2;
var result = minSwaps(s);
console.log(result, result === expected);

var s = '[]';
var expected = 0;
var result = minSwaps(s);
console.log(result, result === expected);

var s = '][[]';
var expected = 1;
var result = minSwaps(s);
console.log(result, result === expected);

var s = '[[[]]]][][]][[]]][[[';
var expected = 2;
var result = minSwaps(s);
console.log(result, result === expected);
