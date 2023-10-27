// 475. Heaters
// https://leetcode.com/problems/heaters/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  let maxRadius = 0;
  for (const house of houses) {
    const radius = findMinRadius(house);
    maxRadius = Math.max(maxRadius, radius);
  }
  return maxRadius;

  function findMinRadius(house) {
    let left = 0;
    let right = heaters.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (heaters[mid] === house) return 0;
      if (heaters[mid] <= house && house <= heaters[mid + 1]) {
        return Math.min(house - heaters[mid], heaters[mid + 1] - house);
      }
      if (house > heaters[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (left === 0) return heaters[0] - house;
    return house - heaters.at(-1);
  }
};

var houses = [1, 2, 3],
  heaters = [2];
var expected = 1;
var result = findRadius(houses, heaters);
console.log(result, result === expected);

var houses = [1, 2, 3, 4],
  heaters = [1, 4];
var expected = 1;
var result = findRadius(houses, heaters);
console.log(result, result === expected);

var houses = [1, 5],
  heaters = [2];
var expected = 3;
var result = findRadius(houses, heaters);
console.log(result, result === expected);
