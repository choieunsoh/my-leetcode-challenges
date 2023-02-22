// 1011. Capacity To Ship Packages Within D Days
// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  function canShipWithinDays(maxWeight) {
    let dayCount = 1;
    let currentWeight = 0;
    for (const weight of weights) {
      currentWeight += weight;
      if (currentWeight > maxWeight) {
        dayCount++;
        currentWeight = weight;
      }
    }
    return dayCount <= days;
  }

  const totalWeight = weights.reduce((total, weight) => total + weight, 0);
  const maxWeight = Math.max(...weights);

  let result = -1;
  let left = maxWeight;
  let right = totalWeight;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (canShipWithinDays(mid)) {
      right = mid - 1;
      result = mid;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

var weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  days = 5;
var expected = 15;
var result = shipWithinDays(weights, days);
console.log(result, result === expected);

var weights = [3, 2, 2, 4, 1, 4],
  days = 3;
var expected = 6;
var result = shipWithinDays(weights, days);
console.log(result, result === expected);

var weights = [1, 2, 3, 1, 1],
  days = 4;
var expected = 3;
var result = shipWithinDays(weights, days);
console.log(result, result === expected);
