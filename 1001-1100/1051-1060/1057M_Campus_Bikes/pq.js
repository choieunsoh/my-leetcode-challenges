// 1057. Campus Bikes
// https://leetcode.com/problems/campus-bikes/
// T.C.: O(n*m log m*n)
// S.C.: O(n*m)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
class WorkerBikePair {
  constructor(workerIndex, bikeIndex, distance) {
    this.workerIndex = workerIndex;
    this.bikeIndex = bikeIndex;
    this.distance = distance;
  }
}
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function (workers, bikes) {
  const workerToBikeList = [];
  const closestBikeIndex = new Array(workers.length).fill(0);

  const pq = new MinPriorityQueue({
    compare: workerBikePairComparator,
  });

  // Add all the bikes along with their distances from the worker
  for (let worker = 0; worker < workers.length; worker++) {
    const bikeList = [];
    for (let bike = 0; bike < bikes.length; bike++) {
      const distance = findDistance(workers[worker], bikes[bike]);
      bikeList.push({ distance, bikeIndex: bike });
    }
    bikeList.sort((a, b) => a.distance - b.distance);

    workerToBikeList.push(bikeList);

    // First bike is the closest bike for each worker
    closestBikeIndex[worker] = 0;

    // Add their closest bike to the priority queue
    addClosestBikeToPq(pq, worker, workerToBikeList, closestBikeIndex);
  }

  // Initialize all values to false, to signify no bikes have been taken
  const bikeStatus = new Array(bikes.length).fill(false);

  // Initialize all indices to -1, to mark all the workers available
  const workerStatus = new Array(workers.length).fill(-1);

  // Until all workers have not been assigned a bike
  while (!pq.isEmpty()) {
    // Remove the pair with the smallest distance
    const workerBikePair = pq.dequeue();

    const { workerIndex, bikeIndex } = workerBikePair;

    if (workerStatus[workerIndex] === -1 && !bikeStatus[bikeIndex]) {
      // If both worker and bike are free, assign them to each other
      bikeStatus[bikeIndex] = true;
      workerStatus[workerIndex] = bikeIndex;
    } else {
      // Add the next closest bike for the current worker
      addClosestBikeToPq(pq, workerIndex, workerToBikeList, closestBikeIndex);
    }
  }

  return workerStatus;

  // Custom comparator for comparing WorkerBikePair in priority queue
  function workerBikePairComparator(a, b) {
    if (a.distance !== b.distance) {
      // Prioritize the one having smaller distance
      return a.distance - b.distance;
    } else if (a.workerIndex !== b.workerIndex) {
      // Prioritize according to the worker index
      return a.workerIndex - b.workerIndex;
    } else {
      // Prioritize according to the bike index
      return a.bikeIndex - b.bikeIndex;
    }
  }

  // Function to return the Manhattan distance
  function findDistance(worker, bike) {
    return Math.abs(worker[0] - bike[0]) + Math.abs(worker[1] - bike[1]);
  }

  function addClosestBikeToPq(pq, worker, workerToBikeList, closestBikeIndex) {
    const closestBike = workerToBikeList[worker][closestBikeIndex[worker]];
    closestBikeIndex[worker]++;
    pq.enqueue(new WorkerBikePair(worker, closestBike.bikeIndex, closestBike.distance));
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
