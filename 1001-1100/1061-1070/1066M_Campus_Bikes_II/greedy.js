// 1066. Campus Bikes II
// https://leetcode.com/problems/campus-bikes-ii/description/
// T.C.: O(M! / (M - N)!)
// S.C.: O(M + N)
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function (workers, bikes) {
  const n = workers.length;
  const m = bikes.length;
  const visited = new Array(m).fill(false);
  let smallestDistanceSum = Number.MAX_SAFE_INTEGER;
  minimumDistanceSum(0, 0);
  return smallestDistanceSum;

  function findDistance(worker, bike) {
    return Math.abs(worker[0] - bike[0]) + Math.abs(worker[1] - bike[1]);
  }

  function minimumDistanceSum(workerIndex, currDistanceSum) {
    if (workerIndex >= n) {
      smallestDistanceSum = Math.min(smallestDistanceSum, currDistanceSum);
      return;
    }
    if (currDistanceSum >= smallestDistanceSum) return;

    for (let bikeIndex = 0; bikeIndex < m; bikeIndex++) {
      if (!visited[bikeIndex]) {
        visited[bikeIndex] = true;
        minimumDistanceSum(workerIndex + 1, currDistanceSum + findDistance(workers[workerIndex], bikes[bikeIndex]));
        visited[bikeIndex] = false;
      }
    }
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
