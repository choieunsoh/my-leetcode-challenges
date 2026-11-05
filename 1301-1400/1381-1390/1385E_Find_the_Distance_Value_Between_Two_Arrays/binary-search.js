// 1385. Find the Distance Value Between Two Arrays
// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
// T.C.: O((n + m) log m)
// S.C.: O(log m)
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  arr2.sort((a, b) => a - b);
  let count = 0;

  for (const x of arr1) {
    let left = 0;
    let right = arr2.length;
    while (left < right) {
      const mid = left + ((right - left) >> 1);
      if (arr2[mid] < x) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    const p = left;

    let ok = true;
    if (p < arr2.length) {
      ok = ok && arr2[p] - x > d;
    }
    if (p - 1 >= 0 && p - 1 < arr2.length) {
      ok = ok && x - arr2[p - 1] > d;
    }

    count += ok ? 1 : 0;
  }
  return count;
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
