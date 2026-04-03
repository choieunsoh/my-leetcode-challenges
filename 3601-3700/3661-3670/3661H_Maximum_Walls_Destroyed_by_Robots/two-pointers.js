// 3661. Maximum Walls Destroyed by Robots
// https://leetcode.com/problems/maximum-walls-destroyed-by-robots/description/
// T.C.: O(n log n + m log m)
// S.C.: O(n + log m)
/**
 * @param {number[]} robots
 * @param {number[]} distance
 * @param {number[]} walls
 * @return {number}
 */
var maxWalls = function (robots, distance, walls) {
  const n = robots.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  const num = new Array(n).fill(0);
  const robotsToDistance = new Map();

  for (let i = 0; i < n; i++) {
    robotsToDistance.set(robots[i], distance[i]);
  }

  robots.sort((a, b) => a - b);
  walls.sort((a, b) => a - b);

  const m = walls.length;
  let rightPtr = 0;
  let leftPtr = 0;
  let curPtr = 0;
  let robotPtr = 0;

  for (let i = 0; i < n; i++) {
    while (rightPtr < m && walls[rightPtr] <= robots[i]) {
      rightPtr++;
    }
    const pos1 = rightPtr;

    while (curPtr < m && walls[curPtr] < robots[i]) {
      curPtr++;
    }
    const pos2 = curPtr;

    let leftBound = robots[i] - robotsToDistance.get(robots[i]);
    if (i >= 1) {
      leftBound = Math.max(robots[i] - robotsToDistance.get(robots[i]), robots[i - 1] + 1);
    }
    while (leftPtr < m && walls[leftPtr] < leftBound) {
      leftPtr++;
    }
    const leftPos = leftPtr;
    left[i] = pos1 - leftPos;

    let rightBound = robots[i] + robotsToDistance.get(robots[i]);
    if (i < n - 1) {
      rightBound = Math.min(robots[i] + robotsToDistance.get(robots[i]), robots[i + 1] - 1);
    }
    while (rightPtr < m && walls[rightPtr] <= rightBound) {
      rightPtr++;
    }
    const rightPos = rightPtr;
    right[i] = rightPos - pos2;

    if (i === 0) {
      continue;
    }
    while (robotPtr < m && walls[robotPtr] < robots[i - 1]) {
      robotPtr++;
    }
    const pos3 = robotPtr;
    num[i] = pos1 - pos3;
  }

  let subLeft = left[0];
  let subRight = right[0];
  for (let i = 1; i < n; i++) {
    const currentLeft = Math.max(subLeft + left[i], subRight - right[i - 1] + Math.min(left[i] + right[i - 1], num[i]));
    const currentRight = Math.max(subLeft + right[i], subRight + right[i]);
    subLeft = currentLeft;
    subRight = currentRight;
  }

  return Math.max(subLeft, subRight);
};

var robots = [4],
  distance = [3],
  walls = [1, 10];
var expected = 1;
var result = maxWalls(robots, distance, walls);
console.log(result, result === expected);

var robots = [10, 2],
  distance = [5, 1],
  walls = [5, 2, 7];
var expected = 3;
var result = maxWalls(robots, distance, walls);
console.log(result, result === expected);

var robots = [1, 2],
  distance = [100, 1],
  walls = [10];
var expected = 0;
var result = maxWalls(robots, distance, walls);
console.log(result, result === expected);
