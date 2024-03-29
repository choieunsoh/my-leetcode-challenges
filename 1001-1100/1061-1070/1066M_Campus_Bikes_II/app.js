// 1066. Campus Bikes II
// https://leetcode.com/problems/campus-bikes-ii/description/
// T.C.: O(M * 2^M)
// S.C.: O(2^M)
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function (workers, bikes) {
  const memo = new Array(2 ** 10).fill(-1);
  return minimumDistanceSum(workers, bikes, 0, 0);

  function minimumDistanceSum(workers, bikes, workerIndex, mask) {
    if (workerIndex >= workers.length) {
      return 0;
    }

    if (memo[mask] !== -1) {
      return memo[mask];
    }

    let smallestDistanceSum = Number.MAX_SAFE_INTEGER;
    for (let bikeIndex = 0; bikeIndex < bikes.length; bikeIndex++) {
      if ((mask & (1 << bikeIndex)) !== 0) {
        continue;
      }

      const distance = manhattanDistance(workers[workerIndex], bikes[bikeIndex]);
      const nextMask = mask | (1 << bikeIndex);
      const nextDistanceSum = minimumDistanceSum(workers, bikes, workerIndex + 1, nextMask);
      smallestDistanceSum = Math.min(smallestDistanceSum, distance + nextDistanceSum);
    }
    return (memo[mask] = smallestDistanceSum);
  }

  function manhattanDistance(worker, bike) {
    return Math.abs(worker[0] - bike[0]) + Math.abs(worker[1] - bike[1]);
  }
};

var workers = [
    [0, 0],
    [2, 1],
  ],
  bikes = [
    [1, 2],
    [3, 3],
  ];
var expected = 6;
var result = assignBikes(workers, bikes);
console.log(result, result === expected);

var workers = [
    [0, 0],
    [1, 1],
    [2, 0],
  ],
  bikes = [
    [1, 0],
    [2, 2],
    [2, 1],
  ];
var expected = 4;
var result = assignBikes(workers, bikes);
console.log(result, result === expected);

var workers = [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ],
  bikes = [
    [0, 999],
    [1, 999],
    [2, 999],
    [3, 999],
    [4, 999],
  ];
var expected = 4995;
var result = assignBikes(workers, bikes);
console.log(result, result === expected);
