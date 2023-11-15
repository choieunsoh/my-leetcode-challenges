// 1052. Grumpy Bookstore Owner
// https://leetcode.com/problems/grumpy-bookstore-owner/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let total = 0;
  const n = customers.length;
  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 0) {
      total += customers[i];
      customers[i] = 0;
    }
  }

  for (let i = 0; i < minutes; i++) {
    total += customers[i];
  }

  let result = total;
  let start = 0;
  for (let end = minutes; end < n; end++) {
    total -= customers[start++];
    total += customers[end];
    result = Math.max(result, total);
  }
  return result;
};

var customers = [1, 0, 1, 2, 1, 1, 7, 5],
  grumpy = [0, 1, 0, 1, 0, 1, 0, 1],
  minutes = 3;
var expected = 16;
var result = maxSatisfied(customers, grumpy, minutes);
console.log(result, result === expected);

var customers = [1],
  grumpy = [0],
  minutes = 1;
var expected = 1;
var result = maxSatisfied(customers, grumpy, minutes);
console.log(result, result === expected);

var customers = [4, 2, 5, 7],
  grumpy = [0, 1, 1, 1],
  minutes = 2;
var expected = 16;
var result = maxSatisfied(customers, grumpy, minutes);
console.log(result, result === expected);
