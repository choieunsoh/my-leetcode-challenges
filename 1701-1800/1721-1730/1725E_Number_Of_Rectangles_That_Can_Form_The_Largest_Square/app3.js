// 1725. Number Of Rectangles That Can Form The Largest Square
// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  const counts = new Map();
  let mostSide = 0;
  for (const [length, width] of rectangles) {
    const side = Math.min(length, width);
    counts.set(side, (counts.get(side) ?? 0) + 1);
    mostSide = Math.max(mostSide, side);
  }
  return counts.get(mostSide);
};

var rectangles = [
  [5, 8],
  [3, 9],
  [5, 12],
  [16, 5],
];
var expected = 3;
var result = countGoodRectangles(rectangles);
console.log(result, result === expected);

var rectangles = [
  [2, 3],
  [3, 7],
  [4, 3],
  [3, 7],
];
var expected = 3;
var result = countGoodRectangles(rectangles);
console.log(result, result === expected);
