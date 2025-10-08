// 2739. Total Distance Traveled
// https://leetcode.com/problems/total-distance-traveled/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
  const kmPerLiter = 10;
  let distance = 0;
  while (mainTank > 0) {
    const fuel = Math.min(mainTank, 5);
    distance += fuel * kmPerLiter;
    mainTank -= fuel;
    if (fuel === 5 && additionalTank > 0) {
      mainTank++;
      additionalTank--;
    }
  }
  return distance;
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
