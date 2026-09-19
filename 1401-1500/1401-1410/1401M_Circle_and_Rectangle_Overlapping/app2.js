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
  /* The center of the circle is inside the rectangle */
  if (x1 <= xCenter && xCenter <= x2 && y1 <= yCenter && yCenter <= y2) {
    return true;
  }
  /* The center of the circle is above the rectangle */
  if (x1 <= xCenter && xCenter <= x2 && y2 <= yCenter && yCenter <= y2 + radius) {
    return true;
  }
  /* The center of the circle is below the rectangle */
  if (x1 <= xCenter && xCenter <= x2 && y1 - radius <= yCenter && yCenter <= y1) {
    return true;
  }
  /* The center of the circle is to the left of the rectangle */
  if (x1 - radius <= xCenter && xCenter <= x1 && y1 <= yCenter && yCenter <= y2) {
    return true;
  }
  /* The center of the circle is to the right of the rectangle */
  if (x2 <= xCenter && xCenter <= x2 + radius && y1 <= yCenter && yCenter <= y2) {
    return true;
  }
  /* The upper-left corner of the rectangle */
  if (distance(xCenter, yCenter, x1, y2) <= radius * radius) {
    return true;
  }
  /* The lower-left corner of the rectangle */
  if (distance(xCenter, yCenter, x1, y1) <= radius * radius) {
    return true;
  }
  /* The upper-right corner of the rectangle */
  if (distance(xCenter, yCenter, x2, y2) <= radius * radius) {
    return true;
  }
  /* The lower-right corner of the rectangle */
  if (distance(xCenter, yCenter, x2, y1) <= radius * radius) {
    return true;
  }
  /* No intersection */
  return false;

  function distance(ux, uy, vx, vy) {
    return (ux - vx) ** 2 + (uy - vy) ** 2;
  }
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
