// 1539. Kth Missing Positive Number
// https://leetcode.com/problems/kth-missing-positive-number/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  const set = new Set(arr);
  const missing = [];
  for (let i = 1; i <= 10000; i++) {
    if (!set.has(i) && missing.length < k) {
      missing.push(i);
      if (missing.length === k) break;
    }
  }
  return missing[missing.length - 1];
};

var arr = [2, 3, 4, 7, 11],
  k = 5;
var expected = 9;
var result = findKthPositive(arr, k);
console.log(result, result === expected);

var arr = [1, 2, 3, 4],
  k = 2;
var expected = 6;
var result = findKthPositive(arr, k);
console.log(result, result === expected);
