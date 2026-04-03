// 3661. Maximum Walls Destroyed by Robots
// https://leetcode.com/problems/maximum-walls-destroyed-by-robots/description/
// T.C.: O(n log m + n log n + m log m)
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

  for (let i = 0; i < n; i++) {
    const pos1 = upperBound(walls, robots[i]);

    let leftPos;
    if (i >= 1) {
      const leftBound = Math.max(robots[i] - robotsToDistance.get(robots[i]), robots[i - 1] + 1);
      leftPos = lowerBound(walls, leftBound);
    } else {
      leftPos = lowerBound(walls, robots[i] - robotsToDistance.get(robots[i]));
    }
    left[i] = pos1 - leftPos;

    let rightPos;
    if (i < n - 1) {
      const rightBound = Math.min(robots[i] + robotsToDistance.get(robots[i]), robots[i + 1] - 1);
      rightPos = upperBound(walls, rightBound);
    } else {
      rightPos = upperBound(walls, robots[i] + robotsToDistance.get(robots[i]));
    }
    const pos2 = lowerBound(walls, robots[i]);
    right[i] = rightPos - pos2;

    if (i === 0) continue;

    const pos3 = lowerBound(walls, robots[i - 1]);
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

  function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  function upperBound(arr, target) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
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
