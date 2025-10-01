// 1518. Water Bottles
// https://leetcode.com/problems/water-bottles/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let consumedBottles = 0;

  while (numBottles >= numExchange) {
    // Consume numExchange full bottles.
    consumedBottles += numExchange;
    numBottles -= numExchange;

    // Exchange them for one full bottle.
    numBottles++;
  }

  // Consume the remaining numBottles (<numExchange).
  return consumedBottles + numBottles;
};

var numBottles = 9,
  numExchange = 3;
var expected = 13;
var result = numWaterBottles(numBottles, numExchange);
console.log(result, result === expected);

var numBottles = 15,
  numExchange = 4;
var expected = 19;
var result = numWaterBottles(numBottles, numExchange);
console.log(result, result === expected);
