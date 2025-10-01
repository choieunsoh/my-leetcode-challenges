// 3200. Maximum Height of a Triangle
// https://leetcode.com/problems/maximum-height-of-a-triangle/description/
// T.C.: O(sqrt(R+B))
// S.C.: O(1)
/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function (red, blue) {
  const rowsRed = countTriangles([red, blue]);
  const rowsBlue = countTriangles([blue, red]);
  return Math.max(rowsRed, rowsBlue);

  function countTriangles(colorBalls) {
    let balls = 1;
    let rows = 0;
    let color = 0;
    while (balls <= colorBalls[color]) {
      colorBalls[color] -= balls;
      rows++;
      balls++;
      color = 1 - color;
    }
    return rows;
  }
};

var red = 2,
  blue = 4;
var expected = 3;
var result = maxHeightOfTriangle(red, blue);
console.log(result, result === expected);

var red = 2,
  blue = 1;
var expected = 2;
var result = maxHeightOfTriangle(red, blue);
console.log(result, result === expected);

var red = 1,
  blue = 1;
var expected = 1;
var result = maxHeightOfTriangle(red, blue);
console.log(result, result === expected);

var red = 10,
  blue = 1;
var expected = 2;
var result = maxHeightOfTriangle(red, blue);
console.log(result, result === expected);

var red = 4,
  blue = 4;
var expected = 3;
var result = maxHeightOfTriangle(red, blue);
console.log(result, result === expected);
