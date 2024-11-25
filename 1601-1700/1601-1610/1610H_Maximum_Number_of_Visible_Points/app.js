// 1610. Maximum Number of Visible Points
// https://leetcode.com/problems/maximum-number-of-visible-points/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function (points, angle, location) {
  let startingPointCount = 0;
  const angles = [];
  for (const [x, y] of points) {
    const dx = x - location[0];
    const dy = y - location[1];
    if (dx === 0 && dy === 0) {
      startingPointCount++;
      continue;
    }

    // Math.atan2(y, x) = Math.atan(y / x)
    // Math.atan2(y, x) returns the ANGLE in RADIANS between
    // the point(X, Y), the CENTER(0, 0) and x'x
    // so Math.atan2(5,5) * (180/Math.pi) === 45
    // transforms it from radians to degrees instead
    const angle = Math.atan2(dy, dx);
    const angleDegree = (angle * 180) / Math.PI;
    angles.push(angleDegree);
  }

  angles.sort((a, b) => a - b);
  const originalLength = angles.length;
  for (let i = 0; i < originalLength; i++) {
    if (angles[i] > 180) break;
    angles.push(angles[i] + 360);
  }

  let start = 0;
  let pointCount = 0;
  for (let end = 0; end < angles.length; end++) {
    while (angles[end] - angles[start] > angle) {
      start++;
    }
    pointCount = Math.max(pointCount, end - start + 1);
  }
  return startingPointCount + pointCount;
};

var points = [
    [2, 1],
    [2, 2],
    [3, 3],
  ],
  angle = 90,
  location = [1, 1];
var expected = 3;
var result = visiblePoints(points, angle, location);
console.log(result, result === expected);

var points = [
    [2, 1],
    [2, 2],
    [3, 4],
    [1, 1],
  ],
  angle = 90,
  location = [1, 1];
var expected = 4;
var result = visiblePoints(points, angle, location);
console.log(result, result === expected);

var points = [
    [1, 0],
    [2, 1],
  ],
  angle = 13,
  location = [1, 1];
var expected = 1;
var result = visiblePoints(points, angle, location);
console.log(result, result === expected);
