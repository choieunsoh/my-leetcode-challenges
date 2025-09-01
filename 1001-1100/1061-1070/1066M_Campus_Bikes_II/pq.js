// 1066. Campus Bikes II
// https://leetcode.com/problems/campus-bikes-ii/description/
// T.C.: O(P(M,N) log P(M,N) + M log P(M,N) * 2^M)
// S.C.: O(P(M,N) + 2^M)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function (workers, bikes) {
  const numOfBikes = bikes.length;
  const numOfWorkers = workers.length;
  const pq = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });
  const visited = new Set();

  pq.enqueue([0, 0]); // [distanceSum, mask]
  while (!pq.isEmpty()) {
    const [currentDistanceSum, currentMask] = pq.dequeue();

    if (visited.has(currentMask)) continue;
    visited.add(currentMask);

    const workerIndex = countNumOfOnes(currentMask);
    if (workerIndex === numOfWorkers) return currentDistanceSum;

    for (let bikeIndex = 0; bikeIndex < numOfBikes; bikeIndex++) {
      if ((currentMask & (1 << bikeIndex)) === 0) {
        const nextStateDistanceSum = currentDistanceSum + findDistance(workers[workerIndex], bikes[bikeIndex]);
        const nextStateMask = currentMask | (1 << bikeIndex);
        if (!visited.has(nextStateMask)) {
          pq.enqueue([nextStateDistanceSum, nextStateMask]);
        }
      }
    }
  }

  return -1;

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
