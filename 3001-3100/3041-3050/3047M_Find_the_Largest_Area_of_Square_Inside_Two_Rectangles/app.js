// 3047. Find the Largest Area of Square Inside Two Rectangles
// https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function (bottomLeft, topRight) {
  const n = bottomLeft.length;
  let maxSide = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const minBottomLeftX = Math.min(topRight[i][0], topRight[j][0]);
      const maxBottomLeftX = Math.max(bottomLeft[i][0], bottomLeft[j][0]);
      const width = minBottomLeftX - maxBottomLeftX;
      const minTopRightY = Math.min(topRight[i][1], topRight[j][1]);
      const maxTopRightY = Math.max(bottomLeft[i][1], bottomLeft[j][1]);
      const height = minTopRightY - maxTopRightY;
      maxSide = Math.max(maxSide, Math.min(width, height));
    }
  }
  return maxSide * maxSide;
};

var bottomLeft = [
    [1, 1],
    [2, 2],
    [3, 1],
  ],
  topRight = [
    [3, 3],
    [4, 4],
    [6, 6],
  ];
var expected = 1;
var result = largestSquareArea(bottomLeft, topRight);
console.log(result, result === expected);

var bottomLeft = [
    [1, 1],
    [1, 3],
    [1, 5],
  ],
  topRight = [
    [5, 5],
    [5, 7],
    [5, 9],
  ];
var expected = 4;
var result = largestSquareArea(bottomLeft, topRight);
console.log(result, result === expected);

var bottomLeft = [
    [1, 1],
    [2, 2],
    [1, 2],
  ],
  topRight = [
    [3, 3],
    [4, 4],
    [3, 4],
  ];
var expected = 1;
var result = largestSquareArea(bottomLeft, topRight);
console.log(result, result === expected);

var bottomLeft = [
    [1, 1],
    [3, 3],
    [3, 1],
  ],
  topRight = [
    [2, 2],
    [4, 4],
    [4, 2],
  ];
var expected = 0;
var result = largestSquareArea(bottomLeft, topRight);
console.log(result, result === expected);
