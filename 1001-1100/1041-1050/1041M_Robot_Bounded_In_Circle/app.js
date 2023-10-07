// 1041. Robot Bounded In Circle
// https://leetcode.com/problems/robot-bounded-in-circle/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  let [x, y] = [0, 0];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let dir = 0;
  for (const instruction of instructions) {
    if (instruction === 'G') {
      x += directions[dir][0];
      y += directions[dir][1];
    } else if (instruction === 'R') {
      dir = (4 + dir + 1) % 4;
    } else {
      dir = (4 + dir - 1) % 4;
    }
  }
  const isAtOrigin = x === 0 && y === 0;
  const headingNorth = dir === 0;
  return isAtOrigin || !headingNorth;
};

var instructions = 'GGLLGG';
var expected = true;
var result = isRobotBounded(instructions);
console.log(result, result === expected);

var instructions = 'GG';
var expected = false;
var result = isRobotBounded(instructions);
console.log(result, result === expected);

var instructions = 'GL';
var expected = true;
var result = isRobotBounded(instructions);
console.log(result, result === expected);
