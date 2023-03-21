// 1385. Find the Distance Value Between Two Arrays
// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  arr2.sort((a, b) => a - b);
  let result = 0;
  for (const num of arr1) {
    if (isFarAwayFromArray2(num)) result++;
  }
  return result;

  function isFarAwayFromArray2(target) {
    let left = 0;
    let right = arr2.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const distance = Math.abs(target - arr2[mid]);
      if (distance <= d) return false;
      if (arr2[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return true;
  }
};

var arr1 = [4, 5, 8],
  arr2 = [10, 9, 1, 8],
  d = 2;
var expected = 2;
var result = findTheDistanceValue(arr1, arr2, d);
console.log(result, result === expected);

var arr1 = [1, 4, 2, 3],
  arr2 = [-4, -3, 6, 10, 20, 30],
  d = 3;
var expected = 2;
var result = findTheDistanceValue(arr1, arr2, d);
console.log(result, result === expected);

var arr1 = [2, 1, 100, 3],
  arr2 = [-5, -2, 10, -3, 7],
  d = 6;
var expected = 1;
var result = findTheDistanceValue(arr1, arr2, d);
console.log(result, result === expected);
