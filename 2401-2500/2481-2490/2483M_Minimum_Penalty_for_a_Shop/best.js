// 2483. Minimum Penalty for a Shop
// https://leetcode.com/problems/minimum-penalty-for-a-shop/
/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
  let maxScore = 0;
  let score = 0;
  let bestHour = -1;
  for (let hour = 0; hour < customers.length; hour++) {
    const customerVisit = customers.charAt(hour) === 'Y';
    score += customerVisit ? 1 : -1;
    if (score > maxScore) {
      maxScore = score;
      bestHour = hour;
    }
  }

  return bestHour + 1;
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
