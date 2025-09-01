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
  const numOfBikes = bikes.length;
  const numOfWorkers = workers.length;
  const maxMask = 1 << numOfBikes;
  const memo = new Array(maxMask).fill(Number.MAX_SAFE_INTEGER);

  memo[0] = 0;
  let smallestDistanceSum = Number.MAX_SAFE_INTEGER;

  for (let mask = 0; mask < maxMask; mask++) {
    const nextWorkerIndex = countNumOfOnes(mask);

    if (nextWorkerIndex >= numOfWorkers) {
      smallestDistanceSum = Math.min(smallestDistanceSum, memo[mask]);
      continue;
    }

    // skip unreachable states
    if (memo[mask] === Number.MAX_SAFE_INTEGER) continue;

    for (let bikeIndex = 0; bikeIndex < numOfBikes; bikeIndex++) {
      if ((mask & (1 << bikeIndex)) === 0) {
        const newMask = mask | (1 << bikeIndex);
        memo[newMask] = Math.min(memo[newMask], memo[mask] + findDistance(workers[nextWorkerIndex], bikes[bikeIndex]));
      }
    }
  }

  return smallestDistanceSum;

  function countNumOfOnes(mask) {
    let count = 0;
    while (mask !== 0) {
      mask &= mask - 1;
      count++;
    }
    return count;
  }

  function findDistance(worker, bike) {
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
