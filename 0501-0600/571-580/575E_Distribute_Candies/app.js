// https://leetcode.com/problems/distribute-candies/
// 575. Distribute Candies
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const candyTypeSet = new Set(candyType);
  return Math.min(candyTypeSet.size, candyType.length / 2);
};

var candyType = [1, 1, 2, 2, 3, 3];
var expected = 3;
var result = distributeCandies(candyType);
console.log(result, result === expected);

var candyType = [1, 1, 2, 3];
var expected = 2;
var result = distributeCandies(candyType);
console.log(result, result === expected);

var candyType = [6, 6, 6, 6];
var expected = 1;
var result = distributeCandies(candyType);
console.log(result, result === expected);
