// 3492. Maximum Containers on a Ship
// https://leetcode.com/problems/maximum-containers-on-a-ship/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function (n, w, maxWeight) {
  const maxContainers = (maxWeight / w) | 0;
  return Math.min(maxContainers, n * n);
};

var n = 2,
  w = 3,
  maxWeight = 15;
var expected = 4;
var result = maxContainers(n, w, maxWeight);
console.log(result, result === expected);

var n = 3,
  w = 5,
  maxWeight = 20;
var expected = 4;
var result = maxContainers(n, w, maxWeight);
console.log(result, result === expected);
