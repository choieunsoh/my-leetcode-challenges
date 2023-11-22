// 573. Squirrel Simulation
// https://leetcode.com/problems/squirrel-simulation/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
var minDistance = function (height, width, tree, squirrel, nuts) {
  let totalDistance = 0;
  let dist = Number.MIN_SAFE_INTEGER;
  for (const nut of nuts) {
    const nutToTree = distance(nut, tree);
    const squirrelToNut = distance(squirrel, nut);
    totalDistance += 2 * nutToTree;
    dist = Math.max(dist, nutToTree - squirrelToNut);
  }
  return totalDistance - dist;

  function distance(x, y) {
    return Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]);
  }
};

var height = 5,
  width = 7,
  tree = [2, 2],
  squirrel = [4, 4],
  nuts = [
    [3, 0],
    [2, 5],
  ];
var expected = 12;
var result = minDistance(height, width, tree, squirrel, nuts);
console.log(result, result === expected);

var height = 1,
  width = 3,
  tree = [0, 1],
  squirrel = [0, 0],
  nuts = [[0, 2]];
var expected = 3;
var result = minDistance(height, width, tree, squirrel, nuts);
console.log(result, result === expected);

var height = 5,
  width = 5,
  tree = [3, 2],
  squirrel = [0, 1],
  nuts = [
    [2, 0],
    [4, 1],
    [0, 4],
    [1, 3],
    [1, 0],
    [3, 4],
    [3, 0],
    [2, 3],
    [0, 2],
    [0, 0],
    [2, 2],
    [4, 2],
    [3, 3],
    [4, 4],
    [4, 0],
    [4, 3],
    [3, 1],
    [2, 1],
    [1, 4],
    [2, 4],
  ];
var expected = 100;
var result = minDistance(height, width, tree, squirrel, nuts);
console.log(result, result === expected);
