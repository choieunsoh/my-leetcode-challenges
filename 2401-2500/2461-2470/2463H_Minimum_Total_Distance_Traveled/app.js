// 2463. Minimum Total Distance Traveled
// https://leetcode.com/problems/minimum-total-distance-traveled/description/
// T.C.: O(n^2*m)
// S.C.: O(n*m)
/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function (robot, factory) {
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);
  const factoryPositions = [];
  for (const [position, limit] of factory) {
    for (let i = 0; i < limit; i++) {
      factoryPositions.push(position);
    }
  }

  const robotCount = robot.length;
  const factoryCount = factoryPositions.length;
  const dp = Array.from({ length: robotCount + 1 }, () => new Array(factoryCount + 1).fill(0));
  for (let i = 0; i < robotCount; i++) {
    dp[i][factoryCount] = Number.MAX_SAFE_INTEGER;
  }

  for (let i = robotCount - 1; i >= 0; i--) {
    for (let j = factoryCount - 1; j >= 0; j--) {
      // Option 1: Assign current robot to current factory
      const assign = Math.abs(robot[i] - factoryPositions[j]) + dp[i + 1][j + 1];

      // Option 2: Skip current factory for the current robot
      const skip = dp[i][j + 1];

      // Take the minimum option
      dp[i][j] = Math.min(assign, skip);
    }
  }
  return dp[0][0];
};

var robot = [0, 4, 6],
  factory = [
    [2, 2],
    [6, 2],
  ];
var expected = 4;
var result = minimumTotalDistance(robot, factory);
console.log(result, result === expected);

var robot = [1, -1],
  factory = [
    [-2, 1],
    [2, 1],
  ];
var expected = 2;
var result = minimumTotalDistance(robot, factory);
console.log(result, result === expected);

var robot = [9, 11, 99, 101],
  factory = [
    [10, 1],
    [7, 1],
    [14, 1],
    [100, 1],
    [96, 1],
    [103, 1],
  ];
var expected = 6;
var result = minimumTotalDistance(robot, factory);
console.log(result, result === expected);

var robot = [7],
  factory = [[0, 1]];
var robot = [-40, -14, -8, 1, 3, 5, 39],
  factory = [
    [-34, 5],
    [28, 2],
    [-12, 3],
  ];
var expected = 92;
var result = minimumTotalDistance(robot, factory);
console.log(result, result === expected);

var robot = [-551, -510, -344, -264, -242, -50, 202, 185, 700, 947],
  factory = [
    [-79, 5],
    [-534, 5],
  ];
var expected = 3172;
var result = minimumTotalDistance(robot, factory);
console.log(result, result === expected);
