// 874. Walking Robot Simulation
// https://leetcode.com/problems/walking-robot-simulation/description/
// T.C.: O(n+m)
// S.C.: O(n)
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let maxArea = 0;
  const LEFT = -2;
  const RIGHT = -1;
  const obstacleSet = buildObstacleSet();
  let [currentX, currentY] = [0, 0];
  let [dirX, dirY] = [0, 1];
  for (const command of commands) {
    if (command === LEFT) {
      [dirX, dirY] = [-dirY, dirX];
    } else if (command === RIGHT) {
      [dirX, dirY] = [dirY, -dirX];
    } else {
      for (let i = 0; i < command; i++) {
        if (!canMoveForward(currentX, currentY)) break;
        currentX += dirX;
        currentY += dirY;
        const currentArea = squaredEuclideanDistance(currentX, currentY);
        maxArea = Math.max(maxArea, currentArea);
      }
    }
  }
  return maxArea;

  function buildObstacleSet() {
    const obstacleSet = new Set();
    for (const [x, y] of obstacles) {
      obstacleSet.add(`${x}-${y}`);
    }
    return obstacleSet;
  }

  function canMoveForward(currentX, currentY) {
    const nextX = currentX + dirX;
    const nextY = currentY + dirY;
    const nextKey = `${nextX}-${nextY}`;
    return !obstacleSet.has(nextKey);
  }

  function squaredEuclideanDistance(x, y) {
    return x * x + y * y;
  }
};

var commands = [4, -1, 3],
  obstacles = [];
var expected = 25;
var result = robotSim(commands, obstacles);
console.log(result, result === expected);

var commands = [4, -1, 4, -2, 4],
  obstacles = [[2, 4]];
var expected = 65;
var result = robotSim(commands, obstacles);
console.log(result, result === expected);

var commands = [6, -1, -1, 6],
  obstacles = [[0, 0]];
var expected = 36;
var result = robotSim(commands, obstacles);
console.log(result, result === expected);
