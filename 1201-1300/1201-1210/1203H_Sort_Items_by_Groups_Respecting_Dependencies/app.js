// 1203. Sort Items by Groups Respecting Dependencies
// https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function (n, m, group, beforeItems) {
  return [];
};

var n = 8,
  m = 2,
  group = [-1, -1, 1, 0, 0, 1, 0, -1],
  beforeItems = [[], [6], [5], [6], [3, 6], [], [], []];
var expected = [6, 3, 4, 1, 5, 2, 0, 7];
var result = sortItems(n, m, group, beforeItems);
console.log(result, result.join() === expected.join());

var n = 8,
  m = 2,
  group = [-1, -1, 1, 0, 0, 1, 0, -1],
  beforeItems = [[], [6], [5], [6], [3], [], [4], []];
var expected = [];
var result = sortItems(n, m, group, beforeItems);
console.log(result, result.join() === expected.join());
