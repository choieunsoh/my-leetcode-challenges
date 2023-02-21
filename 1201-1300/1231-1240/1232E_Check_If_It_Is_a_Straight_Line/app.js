// 1232. Check If It Is a Straight Line
// https://leetcode.com/problems/check-if-it-is-a-straight-line/?envType=study-plan&id=programming-skills-i
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length === 2) return true;
  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];
  const dx = x2 - x1;
  const dy = y2 - y1;
  const ds = x1 * y2 - x2 * y1;

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    if (x * dy - y * dx !== ds) return false;
  }
  return true;
};

var coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
var expected = true;
var result = checkStraightLine(coordinates);
console.log(result, result === expected);

var coordinates = [
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7],
];
var expected = false;
var result = checkStraightLine(coordinates);
console.log(result, result === expected);

var coordinates = [
  [0, 0],
  [0, 1],
  [0, -1],
];
var expected = true;
var result = checkStraightLine(coordinates);
console.log(result, result === expected);

var coordinates = [
  [0, 0],
  [0, 5],
  [5, 0],
];
var expected = false;
var result = checkStraightLine(coordinates);
console.log(result, result === expected);
