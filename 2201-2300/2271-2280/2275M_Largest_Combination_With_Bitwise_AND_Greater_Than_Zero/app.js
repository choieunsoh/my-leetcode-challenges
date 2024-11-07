// 2275. Largest Combination With Bitwise AND Greater Than Zero
// https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
  let largest = 0;
  for (let shiftLeft = 0; shiftLeft < 30; shiftLeft++) {
    let count = 0;
    for (let i = 0; i < candidates.length; i++) {
      if ((candidates[i] & (1 << shiftLeft)) !== 0) {
        count++;
      }
    }
    largest = Math.max(largest, count);
  }
  return largest;
};

var candidates = [16, 17, 71, 62, 12, 24, 14];
var expected = 4;
var result = largestCombination(candidates);
console.log(result, result === expected);

var candidates = [8, 8];
var expected = 2;
var result = largestCombination(candidates);
console.log(result, result === expected);
