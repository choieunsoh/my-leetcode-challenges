// 1402. Reducing Dishes
// https://leetcode.com/problems/reducing-dishes/
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => b - a);
  let prefixSum = 0;
  let result = 0;
  for (const satisfied of satisfaction) {
    prefixSum += satisfied;
    if (prefixSum < 0) return result;
    result += prefixSum;
  }
  return result;
};
// 5 0 -1 -8 -9
// 5 = 5
// 5+5 0 = 10
// 5+5+5 0+0 -1 = 14
// 5+5+5+5 0+0+0 -1-1 -8 = 10
// 5+5+5+5+5 0+0+0+0 -1-1-1 -8-8 -9 = -3
var satisfaction = [-1, -8, 0, 5, -9];
var expected = 14;
var result = maxSatisfaction(satisfaction);
console.log(result, result === expected);

var satisfaction = [4, 3, 2];
var expected = 20;
var result = maxSatisfaction(satisfaction);
console.log(result, result === expected);

var satisfaction = [-1, -4, -5];
var expected = 0;
var result = maxSatisfaction(satisfaction);
console.log(result, result === expected);
