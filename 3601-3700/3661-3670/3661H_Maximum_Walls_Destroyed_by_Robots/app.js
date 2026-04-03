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
  const robotDist = robots.map((r, i) => [r, distance[i]]);
  robotDist.sort((a, b) => a[0] - b[0]);
  walls.sort((a, b) => a - b);

  const m = walls.length;
  let rightPtr = 0;
  let leftPtr = 0;
  let curPtr = 0;
  let robotPtr = 0;

  let prevLeft = 0;
  let prevRight = 0;
  let prevNum = 0;
  let subLeft = 0;
  let subRight = 0;

  for (let i = 0; i < n; i++) {
    const [robotPos, robotDistVal] = robotDist[i];

    while (rightPtr < m && walls[rightPtr] <= robotPos) {
      rightPtr++;
    }
    const pos1 = rightPtr;

    while (curPtr < m && walls[curPtr] < robotPos) {
      curPtr++;
    }
    const pos2 = curPtr;

    let leftBound = robotPos - robotDistVal;
    if (i >= 1) {
      leftBound = Math.max(robotPos - robotDistVal, robotDist[i - 1][0] + 1);
    }
    while (leftPtr < m && walls[leftPtr] < leftBound) {
      leftPtr++;
    }
    const leftPos = leftPtr;
    const currentLeft = pos1 - leftPos;

    let rightBound = robotPos + robotDistVal;
    if (i < n - 1) {
      rightBound = Math.min(robotPos + robotDistVal, robotDist[i + 1][0] - 1);
    }
    while (rightPtr < m && walls[rightPtr] <= rightBound) {
      rightPtr++;
    }
    const rightPos = rightPtr;
    const currentRight = rightPos - pos2;

    let currentNum = 0;
    if (i > 0) {
      while (robotPtr < m && walls[robotPtr] < robotDist[i - 1][0]) {
        robotPtr++;
      }
      const pos3 = robotPtr;
      currentNum = pos1 - pos3;
    }

    if (i === 0) {
      subLeft = currentLeft;
      subRight = currentRight;
    } else {
      const newSubLeft = Math.max(
        subLeft + currentLeft,
        subRight - prevRight + Math.min(currentLeft + prevRight, currentNum)
      );
      const newSubRight = Math.max(subLeft + currentRight, subRight + currentRight);
      subLeft = newSubLeft;
      subRight = newSubRight;
    }

    prevLeft = currentLeft;
    prevRight = currentRight;
    prevNum = currentNum;
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
