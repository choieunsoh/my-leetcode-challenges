// 1387. Sort Integers by The Power Value
// https://leetcode.com/problems/sort-integers-by-the-power-value/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
  const memo = new Array(hi - lo);
  for (let i = lo; i <= hi; i++) {
    memo[i - lo] = [i, transform(i)];
  }
  memo.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  return memo[k - 1][0];

  function transform(x) {
    let count = 0;
    while (x !== 1) {
      if (x % 2 === 0) {
        x /= 2;
      } else {
        x = 3 * x + 1;
      }
      count++;
    }
    return count;
  }
};

var lo = 12,
  hi = 15,
  k = 2;
var expected = 13;
var result = getKth(lo, hi, k);
console.log(result, result === expected);

var lo = 7,
  hi = 11,
  k = 4;
var expected = 7;
var result = getKth(lo, hi, k);
console.log(result, result === expected);

var lo = 1,
  hi = 20,
  k = 19;
var expected = 18;
var result = getKth(lo, hi, k);
console.log(result, result === expected);
