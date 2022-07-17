// https://leetcode.com/problems/the-skyline-problem/
// 218. The Skyline Problem
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const buildingCount = buildings.length;
  if (buildingCount === 0) return [];

  if (buildingCount === 1) {
    const [xStart, xEnd, y] = buildings[0];

    return [
      [xStart, y],
      [xEnd, 0],
    ];
  }

  const mid = Math.floor(buildingCount / 2);
  const leftSkyline = getSkyline(buildings.slice(0, mid));
  const rightSkyline = getSkyline(buildings.slice(mid, buildingCount));

  function mergeSkylines(left, right) {
    let [currX, currY] = [0, 0];
    let [leftY, rightY] = [0, 0];
    let maxY = 0;
    const output = [];

    function updateOutput(x, y) {
      if (output.length === 0 || output[output.length - 1][0] !== x) {
        output.push([x, y]);
      } else {
        output[output.length - 1][1] = y;
      }
    }

    while (left.length > 0 && right.length > 0) {
      const [xL] = left[0];
      const [xR] = right[0];

      if (xL < xR) {
        [currX, leftY] = left.shift();
      } else {
        [currX, rightY] = right.shift();
      }

      maxY = Math.max(leftY, rightY);

      if (currY !== maxY) {
        updateOutput(currX, maxY);
        currY = maxY;
      }
    }

    while (left.length > 0) {
      const [x, y] = left.shift();

      if (currY !== y) {
        updateOutput(x, y);
        currY = y;
      }
    }

    while (right.length > 0) {
      const [x, y] = right.shift();

      if (currY !== y) {
        updateOutput(x, y);
        currY = y;
      }
    }

    return output;
  }

  return mergeSkylines(leftSkyline, rightSkyline);
};

var buildings = [
  [2, 9, 10],
  [3, 7, 15],
  [5, 12, 12],
  [15, 20, 10],
  [19, 24, 8],
];
var expected = [
  [2, 10],
  [3, 15],
  [7, 12],
  [12, 0],
  [15, 10],
  [20, 8],
  [24, 0],
];
var result = getSkyline(buildings);
console.log(result, result.join() === expected.join());

var buildings = [
  [0, 2, 3],
  [2, 5, 3],
];
var expected = [
  [0, 3],
  [5, 0],
];
var result = getSkyline(buildings);
console.log(result, result.join() === expected.join());
