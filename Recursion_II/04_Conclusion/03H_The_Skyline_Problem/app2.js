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
    const [xLeft, xRight, y] = buildings[0];

    return [
      [xLeft, y],
      [xRight, 0],
    ];
  }

  const mid = Math.floor(buildingCount / 2);
  const leftSkyline = getSkyline(buildings.slice(0, mid));
  const rightSkyline = getSkyline(buildings.slice(mid, buildingCount));

  function mergeSkylines(left, right) {
    let [leftY, rightY, maxY] = [0, 0, 0];
    let [leftIndex, rightIndex] = [0, 0];
    const output = [];

    while (leftIndex < left.length || rightIndex < right.length) {
      const leftX = left[leftIndex] ? left[leftIndex][0] : Infinity;
      const rightX = right[rightIndex] ? right[rightIndex][0] : Infinity;
      let currX = 0;

      if (leftX < rightX) {
        currX = leftX;
        leftY = left[leftIndex++][1];
      } else {
        currX = rightX;
        rightY = right[rightIndex++][1];
      }

      maxY = Math.max(leftY, rightY);
      if (output.length === 0 || output[output.length - 1][1] !== maxY) {
        output.push([currX, maxY]);
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
