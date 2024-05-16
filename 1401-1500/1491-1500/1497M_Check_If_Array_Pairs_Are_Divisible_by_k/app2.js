// 1497. Check If Array Pairs Are Divisible by k
// https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/description/
// T.C.: O(n)
// S.C.: O(k)
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  const counts = new Map();
  for (const num of arr) {
    const remainder = ((num % k) + k) % k;
    const count = counts.get(remainder) ?? 0;
    counts.set(remainder, count + 1);
  }

  for (let num = 1; num < k; num++) {
    const target = k - num;
    const count = counts.get(num);
    if (count !== counts.get(target)) return false;
  }

  return (counts.get(0) ?? 0) % 2 === 0;
};

var arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9],
  k = 5;
var expected = true;
var result = canArrange(arr, k);
console.log(result, result === expected);

var arr = [1, 2, 3, 4, 5, 6],
  k = 7;
var expected = true;
var result = canArrange(arr, k);
console.log(result, result === expected);

var arr = [1, 2, 3, 4, 5, 6],
  k = 10;
var expected = false;
var result = canArrange(arr, k);
console.log(result, result === expected);

var arr = [
    5, 3, 10, 1, -7, 0, 33, -1, 10, 8, -3, 0, -10, 47, -9, -6, 38, 8, 5, 38, -4, 4, -5, -8, -4, 0, -8, 5, 7, 3, -3, 0,
    6, 8, 47, 39, 35, 39, 4, 9,
  ],
  k = 43;
var expected = true;
var result = canArrange(arr, k);
console.log(result, result === expected);
