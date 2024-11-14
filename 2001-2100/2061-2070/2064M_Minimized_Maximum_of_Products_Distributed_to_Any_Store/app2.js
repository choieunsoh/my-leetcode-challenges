// 2064. Minimized Maximum of Products Distributed to Any Store
// https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/
// T.C.: O(n log m)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {
  const maxQuantity = Math.max(...quantities);
  let result = 0;
  let left = 0;
  let right = maxQuantity;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (canDistribute(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;

  function canDistribute(qty) {
    let j = 0;
    let remaining = quantities[j];
    for (let i = 0; i < n; i++) {
      if (qty >= remaining) {
        j++;
        if (j === quantities.length) {
          return true;
        } else {
          remaining = quantities[j];
        }
      } else {
        remaining -= qty;
      }
    }
    return false;
  }
};

var n = 6,
  quantities = [11, 6];
var expected = 3;
var result = minimizedMaximum(n, quantities);
console.log(result, result === expected);

var n = 7,
  quantities = [15, 10, 10];
var expected = 5;
var result = minimizedMaximum(n, quantities);
console.log(result, result === expected);

var n = 1,
  quantities = [100000];
var expected = 100000;
var result = minimizedMaximum(n, quantities);
console.log(result, result === expected);
