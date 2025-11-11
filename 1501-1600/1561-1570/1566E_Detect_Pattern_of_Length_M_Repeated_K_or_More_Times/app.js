// 1566. Detect Pattern of Length M Repeated K or More Times
// https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/
// T.C.: O(n*m*k)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  const n = arr.length;
  for (let i = 0; i <= n - m * k; i++) {
    let match = true;
    for (let j = 0; j < m * (k - 1); j++) {
      if (arr[i + j] !== arr[i + j + m]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
};

var arr = [1, 2, 4, 4, 4, 4],
  m = 1,
  k = 3;
var expected = true;
var result = containsPattern(arr, m, k);
console.log(result, result === expected);

var arr = [1, 2, 1, 2, 1, 1, 1, 3],
  m = 2,
  k = 2;
var expected = true;
var result = containsPattern(arr, m, k);
console.log(result, result === expected);

var arr = [1, 2, 1, 2, 1, 3],
  m = 2,
  k = 3;
var expected = false;
var result = containsPattern(arr, m, k);
console.log(result, result === expected);
