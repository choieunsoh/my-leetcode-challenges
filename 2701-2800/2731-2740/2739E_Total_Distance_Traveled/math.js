// 2739. Total Distance Traveled
// https://leetcode.com/problems/total-distance-traveled/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
  // If mainTank is less than 5, no transfers are possible.
  if (mainTank < 5) {
    return mainTank * 10;
  }

  // Calculate the maximum possible transfers based on mainTank fuel.
  // For every 5 liters used, 1 is gained, so 4 are effectively consumed per transfer cycle.
  const maxTransfersFromMain = Math.floor((mainTank - 1) / 4);

  // The number of actual transfers is limited by the fuel in additionalTank.
  const actualTransfers = Math.min(maxTransfersFromMain, additionalTank);

  // Total distance is based on the initial mainTank fuel plus any transferred fuel.
  const totalFuelConsumed = mainTank + actualTransfers;

  return totalFuelConsumed * 10;
};

var mainTank = 5,
  additionalTank = 10;
var expected = 60;
var result = distanceTraveled(mainTank, additionalTank);
console.log(result, result === expected);

var mainTank = 1,
  additionalTank = 2;
var expected = 10;
var result = distanceTraveled(mainTank, additionalTank);
console.log(result, result === expected);

var mainTank = 5,
  additionalTank = 0;
var expected = 50;
var result = distanceTraveled(mainTank, additionalTank);
console.log(result, result === expected);

var mainTank = 19,
  additionalTank = 2;
var expected = 210;
var result = distanceTraveled(mainTank, additionalTank);
console.log(result, result === expected);

var mainTank = 9,
  additionalTank = 2;
var expected = 110;
var result = distanceTraveled(mainTank, additionalTank);
console.log(result, result === expected);
