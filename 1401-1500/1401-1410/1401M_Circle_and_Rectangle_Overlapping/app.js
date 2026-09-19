// 1401. Circle and Rectangle Overlapping
// https://leetcode.com/problems/circle-and-rectangle-overlapping/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
  let dist = 0;
  if (xCenter < x1 || xCenter > x2) {
    dist += Math.min((x1 - xCenter) ** 2, (x2 - xCenter) ** 2);
  }
  if (yCenter < y1 || yCenter > y2) {
    dist += Math.min((y1 - yCenter) ** 2, (y2 - yCenter) ** 2);
  }
  return dist <= radius ** 2;
};

var radius = 1,
  xCenter = 0,
  yCenter = 0,
  x1 = 1,
  y1 = -1,
  x2 = 3,
  y2 = 1;
var expected = true;
var result = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2);
console.log(result, result === expected);

var radius = 1,
  xCenter = 1,
  yCenter = 1,
  x1 = 1,
  y1 = -3,
  x2 = 2,
  y2 = -1;
var expected = false;
var result = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2);
console.log(result, result === expected);

var radius = 1,
  xCenter = 0,
  yCenter = 0,
  x1 = -1,
  y1 = 0,
  x2 = 0,
  y2 = 1;
var expected = true;
var result = checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2);
console.log(result, result === expected);
