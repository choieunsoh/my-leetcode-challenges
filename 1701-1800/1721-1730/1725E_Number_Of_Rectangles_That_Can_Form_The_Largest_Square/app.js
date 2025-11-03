// 1725. Number Of Rectangles That Can Form The Largest Square
// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let count = 0;
  let mostSide = 0;
  for (const [length, width] of rectangles) {
    const side = Math.min(length, width);
    if (side > mostSide) {
      count = 1;
      mostSide = side;
    } else if (side === mostSide) {
      count++;
    }
  }
  return count;
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
