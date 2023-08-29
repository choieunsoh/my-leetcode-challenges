// 2483. Minimum Penalty for a Shop
// https://leetcode.com/problems/minimum-penalty-for-a-shop/
/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
  let currentPenalty = 0;
  for (const ch of customers) {
    if (ch === 'Y') {
      currentPenalty++;
    }
  }

  let result = 0;
  let minPenalty = currentPenalty;
  for (let i = 0; i < customers.length; i++) {
    const customer = customers.charAt(i);
    if (customer === 'Y') {
      currentPenalty--;
    } else {
      currentPenalty++;
    }
    if (currentPenalty < minPenalty) {
      result = i + 1;
      minPenalty = currentPenalty;
    }
  }

  return result;
};

var customers = 'YYNY';
var expected = 2;
var result = bestClosingTime(customers);
console.log(result, result === expected);

var customers = 'NNNNN';
var expected = 0;
var result = bestClosingTime(customers);
console.log(result, result === expected);

var customers = 'YYYY';
var expected = 4;
var result = bestClosingTime(customers);
console.log(result, result === expected);
