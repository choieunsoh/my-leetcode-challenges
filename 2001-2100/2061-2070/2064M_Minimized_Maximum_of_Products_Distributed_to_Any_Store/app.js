// 2064. Minimized Maximum of Products Distributed to Any Store
// https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/
/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {
  const totalQty = quantities.reduce((sum, qty) => sum + qty, 0);
  let result = 0;
  let left = 0;
  let right = totalQty;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const stores = numberOfStores(mid);
    if (stores <= n) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;

  function numberOfStores(qty) {
    let stores = 0;
    for (let i = 0; i < quantities.length; i++) {
      stores += Math.ceil(quantities[i] / qty);
    }
    return stores;
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
