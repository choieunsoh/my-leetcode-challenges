// 1385. Find the Distance Value Between Two Arrays
// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
// T.C.: O(n * m)
// S.C.: O(1)
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;
  for (const x of arr1) {
    let ok = true;
    for (const y of arr2) {
      ok &= Math.abs(x - y) > d;
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
