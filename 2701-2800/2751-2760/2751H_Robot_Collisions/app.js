// 2751. Robot Collisions
// https://leetcode.com/problems/robot-collisions/
/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
  const robots = positions.map((position, i) => [position, i]);
  robots.sort((a, b) => a[0] - b[0]);

  const result = [];
  const stack = [];
  for (const [pos, index] of robots) {
    const robot = [pos, index, healths[index], directions[index]];
    if (robot[3] === 'R') {
      stack.push(robot);
      continue;
    }

    let destroy = false;
    while (stack.length) {
      const nextRobot = stack.pop();
      if (nextRobot[2] > robot[2]) {
        nextRobot[2]--;
        stack.push(nextRobot);
        destroy = true;
        break;
      }

      if (nextRobot[2] === robot[2]) {
        destroy = true;
        break;
      }

      robot[2]--;
    }

    if (!destroy) {
      result.push([index, robot[2]]);
    }
  }

  while (stack.length) {
    const [, index, health] = stack.pop();
    result.push([index, health]);
  }

  result.sort((a, b) => a[0] - b[0]);
  return result.map((robot) => robot[1]);
};

var positions = [3, 5, 2, 6],
  healths = [10, 10, 15, 12],
  directions = 'RLRL';
var expected = [14];
var result = survivedRobotsHealths(positions, healths, directions);
console.log(result, result.join() === expected.join());

var positions = [5, 4, 3, 2, 1],
  healths = [2, 17, 9, 15, 10],
  directions = 'RRRRR';
var expected = [2, 17, 9, 15, 10];
var result = survivedRobotsHealths(positions, healths, directions);
console.log(result, result.join() === expected.join());

var positions = [1, 2, 5, 6],
  healths = [10, 10, 11, 11],
  directions = 'RLRL';
var expected = [];
var result = survivedRobotsHealths(positions, healths, directions);
console.log(result, result.join() === expected.join());

var positions = [3, 47],
  healths = [46, 26],
  directions = 'LR';
var expected = [46, 26];
var result = survivedRobotsHealths(positions, healths, directions);
console.log(result, result.join() === expected.join());

var positions = [1, 2, 5, 6],
  healths = [10, 10, 11, 11],
  directions = 'RLRL';
var expected = [];
var result = survivedRobotsHealths(positions, healths, directions);
console.log(result, result.join() === expected.join());
