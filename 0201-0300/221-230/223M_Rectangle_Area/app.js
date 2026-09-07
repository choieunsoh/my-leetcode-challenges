// 223. Rectangle Area
// https://leetcode.com/problems/rectangle-area/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const areaOfA = (ay2 - ay1) * (ax2 - ax1);
  const areaOfB = (by2 - by1) * (bx2 - bx1);

  // calculate x overlap
  const left = Math.max(ax1, bx1);
  const right = Math.min(ax2, bx2);
  const xOverlap = right - left;

  // calculate y overlap
  const top = Math.min(ay2, by2);
  const bottom = Math.max(ay1, by1);
  const yOverlap = top - bottom;

  let areaOfOverlap = 0;
  // if the rectangles overlap each other, then calculate
  // the area of the overlap
  if (xOverlap > 0 && yOverlap > 0) {
    areaOfOverlap = xOverlap * yOverlap;
  }

  // areaOfOverlap is counted twice when in the summation of
  // areaOfA and areaOfB, so we need to subtract it from the
  // total, to get the toal area covered by both the rectangles
  const totalArea = areaOfA + areaOfB - areaOfOverlap;
  return totalArea;
};

var ax1 = -3,
  ay1 = 0,
  ax2 = 3,
  ay2 = 4,
  bx1 = 0,
  by1 = -1,
  bx2 = 9,
  by2 = 2;
var expected = 45;
var result = computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2);
console.log(result, result === expected);

var ax1 = -2,
  ay1 = -2,
  ax2 = 2,
  ay2 = 2,
  bx1 = -2,
  by1 = -2,
  bx2 = 2,
  by2 = 2;
var expected = 16;
var result = computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2);
console.log(result, result === expected);
