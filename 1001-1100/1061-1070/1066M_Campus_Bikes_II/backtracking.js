// 1066. Campus Bikes II
// https://leetcode.com/problems/campus-bikes-ii/description/
// T.C.: O(M!/(M-N)!)
// S.C.: O(M+N)
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function (workers, bikes) {
  const visited = new Array(10).fill(false);
  let result = Number.MAX_SAFE_INTEGER;
  minimumDistanceSum(workers, 0, bikes, 0);
  return result;

  function minimumDistanceSum(workers, workerIndex, bikes, currDistanceSum) {
    if (workerIndex >= workers.length) {
      result = Math.min(result, currDistanceSum);
      return;
    }

    if (currDistanceSum >= result) {
      return;
    }

    for (let bikeIndex = 0; bikeIndex < bikes.length; bikeIndex++) {
      if (visited[bikeIndex]) continue;

      visited[bikeIndex] = true;
      minimumDistanceSum(
        workers,
        workerIndex + 1,
        bikes,
        currDistanceSum + manhattanDistance(workers[workerIndex], bikes[bikeIndex])
      );
      visited[bikeIndex] = false;
    }
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
