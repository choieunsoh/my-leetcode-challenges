// 1057. Campus Bikes
// https://leetcode.com/problems/campus-bikes/
// T.C.: O(n*m + k)
// S.C.: O(n*m + k)
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function (workers, bikes) {
  const map = new Map();
  let minDist = Number.MAX_SAFE_INTEGER;
  for (let worker = 0; worker < workers.length; worker++) {
    for (let bike = 0; bike < bikes.length; bike++) {
      const dist = distance(workers[worker], bikes[bike]);
      if (!map.has(dist)) map.set(dist, []);
      map.get(dist).push([worker, bike]);
      minDist = Math.min(minDist, dist);
    }
  }

  let dist = minDist;
  let workerCount = 0;
  const bikeUsed = new Array(bikes.length).fill(false);
  const result = new Array(workers.length).fill(-1);
  while (workerCount !== workers.length) {
    if (!map.has(dist)) {
      dist++;
      continue;
    }

    for (const [worker, bike] of map.get(dist)) {
      if (result[worker] === -1 && !bikeUsed[bike]) {
        bikeUsed[bike] = true;
        result[worker] = bike;
        workerCount++;
      }
    }
    dist++;
  }

  return result;

  function distance(worker, bike) {
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
var expected = [1, 0];
var result = assignBikes(workers, bikes);
console.log(result, result.join() === expected.join());

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
var expected = [0, 2, 1];
var result = assignBikes(workers, bikes);
console.log(result, result.join() === expected.join());
