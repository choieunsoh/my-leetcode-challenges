// 1482. Minimum Number of Days to Make m Bouquets
// https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (m * k > bloomDay.length) return -1;
  let left = Math.min(...bloomDay);
  let right = Math.max(...bloomDay);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const bouquets = countBouquets(mid);
    if (bouquets >= m) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;

  function countBouquets(day) {
    let bouquet = 0;
    let flowers = 0;
    for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] > day) {
        flowers = 0;
      } else {
        flowers++;
        if (flowers >= k) {
          bouquet++;
          flowers = 0;
        }
      }
    }
    return bouquet;
  }
};

var bloomDay = [1, 10, 3, 10, 2],
  m = 3,
  k = 1;
var expected = 3;
var result = minDays(bloomDay, m, k);
console.log(result, result === expected);

var bloomDay = [1, 10, 3, 10, 2],
  m = 3,
  k = 2;
var expected = -1;
var result = minDays(bloomDay, m, k);
console.log(result, result === expected);

var bloomDay = [7, 7, 7, 7, 12, 7, 7],
  m = 2,
  k = 3;
var expected = 12;
var result = minDays(bloomDay, m, k);
console.log(result, result === expected);
