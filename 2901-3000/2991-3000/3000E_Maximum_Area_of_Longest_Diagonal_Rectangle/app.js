// 3000. Maximum Area of Longest Diagonal Rectangle
// https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
  let maxArea = 0;
  let maxDiagonal = 0;
  for (const [length, width] of dimensions) {
    const diagonal = Math.sqrt(length ** 2 + width ** 2);
    if (diagonal > maxDiagonal) {
      maxArea = length * width;
      maxDiagonal = diagonal;
    } else if (diagonal === maxDiagonal) {
      maxArea = Math.max(maxArea, length * width);
    }
  }
  return maxArea;
};

var dimensions = [
  [9, 3],
  [8, 6],
];
var expected = 48;
var result = areaOfMaxDiagonal(dimensions);
console.log(result, result === expected);

var dimensions = [
  [3, 4],
  [4, 3],
];
var expected = 12;
var result = areaOfMaxDiagonal(dimensions);
console.log(result, result === expected);

var dimensions = [
  [3, 5],
  [4, 3],
];
var expected = 15;
var result = areaOfMaxDiagonal(dimensions);
console.log(result, result === expected);

var dimensions = [
  [2, 6],
  [5, 1],
  [3, 10],
  [8, 4],
];
var expected = 30;
var result = areaOfMaxDiagonal(dimensions);
console.log(result, result === expected);

var dimensions = [
  [6, 5],
  [8, 6],
  [2, 10],
  [8, 1],
  [9, 2],
  [3, 5],
  [3, 5],
];
var expected = 20;
var result = areaOfMaxDiagonal(dimensions);
console.log(result, result === expected);
