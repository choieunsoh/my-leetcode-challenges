// 1057. Campus Bikes
// https://leetcode.com/problems/campus-bikes/
// T.C.: O(n*m log m*n)
// S.C.: O(n*m)
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function (workers, bikes) {
  // List of all possible triplets
  const allTriplets = [];

  // Generate all the possible pairs
  for (let worker = 0; worker < workers.length; worker++) {
    for (let bike = 0; bike < bikes.length; bike++) {
      const distance = findDistance(workers[worker], bikes[bike]);
      allTriplets.push([distance, worker, bike]);
    }
  }

  // Sort the triplets. The default array sort compares elements lexicographically.
  allTriplets.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]; // Compare by distance
    if (a[1] !== b[1]) return a[1] - b[1]; // Compare by worker index
    return a[2] - b[2]; // Compare by bike index
  });

  // Initialize all values to false, to signify no bikes have been taken
  const bikeStatus = new Array(bikes.length).fill(false);
  // Initialize all indices to -1, to signify no worker has a bike
  const workerStatus = new Array(workers.length).fill(-1);
  // Keep track of how many worker-bike pairs have been made
  let pairCount = 0;

  for (const [dist, worker, bike] of allTriplets) {
    // If both worker and bike are free, assign them to each other
    if (workerStatus[worker] === -1 && !bikeStatus[bike]) {
      bikeStatus[bike] = true;
      workerStatus[worker] = bike;
      pairCount++;

      // If all the workers have bikes assigned, we can stop
      if (pairCount === workers.length) {
        return workerStatus;
      }
    }
  }

  return workerStatus;

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
