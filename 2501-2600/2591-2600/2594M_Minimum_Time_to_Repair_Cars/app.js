// 2594. Minimum Time to Repair Cars
// https://leetcode.com/problems/minimum-time-to-repair-cars/description/
// T.C.: O(n log (maxRank * cars))
// S.C.: O(1)
/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  const n = ranks.length;
  const maxRank = Math.max(...ranks);

  let leftTime = 1;
  let rightTime = maxRank * cars * cars;
  let minTime = rightTime;
  while (leftTime <= rightTime) {
    const midTime = Math.floor((leftTime + rightTime) / 2);
    if (canRepairAllCars(midTime)) {
      minTime = midTime;
      rightTime = midTime - 1;
    } else {
      leftTime = midTime + 1;
    }
  }
  return minTime;

  function canRepairAllCars(time) {
    let carsRepaired = 0;
    for (let i = 0; i < n; i++) {
      carsRepaired += Math.floor(Math.sqrt(time / ranks[i]));
      if (carsRepaired >= cars) return true;
    }
    return carsRepaired >= cars;
  }
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
