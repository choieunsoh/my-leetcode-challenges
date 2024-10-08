// 1963. Minimum Number of Swaps to Make the String Balanced
// https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let swaps = 0;
  const stack = [];
  for (const ch of s) {
    if (ch === '[') {
      stack.push(ch);
    } else {
      if (stack.length && stack.at(-1) === '[') {
        stack.pop();
      } else {
        swaps++;
      }
    }
  }
  return (swaps + 1) >> 1;
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
