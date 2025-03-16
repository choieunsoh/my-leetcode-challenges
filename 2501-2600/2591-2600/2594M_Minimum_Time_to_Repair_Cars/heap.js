// 2594. Minimum Time to Repair Cars
// https://leetcode.com/problems/minimum-time-to-repair-cars/description/
// T.C.: O(n + m log k))
// S.C.: O(k)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  // Count the frequency of each rank
  const counts = new Map();
  for (const rank of ranks) {
    counts.set(rank, (counts.get(rank) ?? 0) + 1);
  }

  // Create a Min-heap storing [time, rank, n, count]
  // - time: time for the next repair
  // - rank: mechanic's rank
  // - n: cars repaired by this mechanic
  // - count: number of mechanics with this rank
  // Initial time = rank (as rank * 1^2 = rank)
  const minHeap = new PriorityQueue({
    compare: (a, b) => a[0] - b[0],
  });

  // Add initial entries to the heap
  for (const [rank, count] of counts) {
    // Elements: [time, rank, cars_repaired, mechanic_count]
    minHeap.enqueue([rank, rank, 1, count]);
  }

  let time = 0;
  // Process until all cars are repaired
  while (cars > 0) {
    // Pop the mechanic with the smallest current repair time
    const current = minHeap.dequeue();
    time = current[0];
    const rank = current[1];
    let n = current[2];
    const mechCount = current[3];

    // Deduct the number of cars repaired by this mechanic group
    cars -= mechCount;

    // Increment the number of cars repaired by this mechanic
    n += 1;

    // Push the updated repair time back into the heap
    // The new repair time is rank * n^2 (time increases quadratically with n)
    minHeap.enqueue([rank * n * n, rank, n, mechCount]);
  }

  return time;
};

var ranks = [4, 2, 3, 1],
  cars = 10;
var expected = 16;
var result = repairCars(ranks, cars);
console.log(result, result === expected);

var ranks = [5, 1, 8],
  cars = 6;
var expected = 16;
var result = repairCars(ranks, cars);
console.log(result, result === expected);
