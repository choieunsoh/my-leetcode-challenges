// 3100. Water Bottles II
// https://leetcode.com/problems/water-bottles-ii/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
  // empty = sigma(numExchange+i)
  // empty = t*numExchange + t(t-1)/2
  // empty = numBottles + t
  // t*numExchange + t(t−1)/2 − (numBottles+t) = 0
  // 2*t*numExchange+t^2-t-2*numBottles-2*t = 0
  // t^2 + (2*numExchange-3)*t - 2*numBottles = 0
  const a = 1;
  const b = 2 * numExchange - 3;
  const c = -2 * numBottles;
  const delta = b * b - 4 * a * c;
  const t = Math.ceil((-b + Math.sqrt(delta)) / (2 * a));
  return numBottles + t - 1;
};

var numBottles = 13,
  numExchange = 6;
var expected = 15;
var result = maxBottlesDrunk(numBottles, numExchange);
console.log(result, result === expected);

var numBottles = 10,
  numExchange = 3;
var expected = 13;
var result = maxBottlesDrunk(numBottles, numExchange);
console.log(result, result === expected);

var numBottles = 2,
  numExchange = 3;
var expected = 2;
var result = maxBottlesDrunk(numBottles, numExchange);
console.log(result, result === expected);
