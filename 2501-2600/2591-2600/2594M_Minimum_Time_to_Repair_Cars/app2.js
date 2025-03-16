// 2594. Minimum Time to Repair Cars
// https://leetcode.com/problems/minimum-time-to-repair-cars/description/
// T.C.: O(n + m log m)
// S.C.: O(m)
/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  let minRank = ranks[0];
  let maxRank = ranks[0];

  // Find min and max rank dynamically
  for (const rank of ranks) {
    minRank = Math.min(minRank, rank);
    maxRank = Math.max(maxRank, rank);
  }
  // Frequency array to count mechanics with each rank
  const freq = new Array(maxRank + 1).fill(0);
  for (const rank of ranks) {
    minRank = Math.min(minRank, rank);
    freq[rank]++;
  }

  // Minimum possible time, Maximum possible time
  let low = 1;
  let high = minRank * cars * cars;

  // Perform binary search to find the minimum time required
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    let carsRepaired = 0;

    // Calculate the total number of cars that can be repaired in 'mid' time
    for (let rank = 1; rank <= maxRank; rank++) {
      carsRepaired += freq[rank] * Math.floor(Math.sqrt(mid / rank));
    }

    // Adjust the search boundaries based on the number of cars repaired
    if (carsRepaired >= cars) {
      high = mid; // Try to find a smaller time
    } else {
      low = mid + 1; // Need more time
    }
  }

  return low;
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
