// 1518. Water Bottles
// https://leetcode.com/problems/water-bottles/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let consumedBottles = numBottles;
  while (numBottles >= numExchange) {
    const exchangedBottles = (numBottles / numExchange) | 0;
    numBottles = (numBottles % numExchange) + exchangedBottles;
    consumedBottles += exchangedBottles;
  }
  return consumedBottles;
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
