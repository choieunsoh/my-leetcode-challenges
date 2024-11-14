// 2064. Minimized Maximum of Products Distributed to Any Store
// https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/
// T.C.: O(m + (n-m) log m)
// S.C.: O(m)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {
  const m = quantities.length;
  const typeStorePairs = new PriorityQueue({ compare: (a, b) => b[0] * a[1] - a[0] * b[1] });
  for (let i = 0; i < m; i++) {
    typeStorePairs.enqueue([quantities[i], 1]);
  }

  for (let i = 0; i < n - m; i++) {
    // Pop the first element
    const [totalQuantityOfType, storesAssignedToType] = typeStorePairs.dequeue();

    // Push the same element after assigning one more store to its product type
    typeStorePairs.enqueue([totalQuantityOfType, storesAssignedToType + 1]);
  }

  // Pop the first element
  const [totalQuantityOfType, storesAssignedToType] = typeStorePairs.dequeue();

  // Return the maximum minimum ratio
  return Math.ceil(totalQuantityOfType / storesAssignedToType);
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
