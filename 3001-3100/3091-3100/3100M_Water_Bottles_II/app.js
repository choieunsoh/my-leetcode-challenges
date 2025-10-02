// 3100. Water Bottles II
// https://leetcode.com/problems/water-bottles-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
  let bottlesDrunk = 0;
  let fullBottles = numBottles;
  let exchangeBottles = numExchange;
  while (fullBottles >= exchangeBottles) {
    bottlesDrunk += exchangeBottles;
    fullBottles -= exchangeBottles - 1;
    exchangeBottles++;
  }
  return bottlesDrunk + fullBottles;
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
