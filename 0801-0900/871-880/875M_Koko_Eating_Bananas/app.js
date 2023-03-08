// 875. Koko Eating Bananas
// https://leetcode.com/problems/koko-eating-bananas/
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const maxPiles = Math.max(...piles);
  let minSpeed = 1;
  let maxSpeed = maxPiles;
  let result = maxSpeed;
  while (minSpeed <= maxSpeed) {
    const speed = (minSpeed + maxSpeed) >> 1;
    if (canEat(speed, h)) {
      result = speed;
      maxSpeed = speed - 1;
    } else {
      minSpeed = speed + 1;
    }
  }
  return result;

  function canEat(speed, limitHrs) {
    let totalHrs = 0;
    for (const pile of piles) {
      const hrs = Math.ceil(pile / speed);
      totalHrs += hrs;
      if (totalHrs > limitHrs) return false;
    }
    return true;
  }
};

var piles = [3, 6, 7, 11],
  h = 8;
var expected = 4;
var result = minEatingSpeed(piles, h);
console.log(result, result === expected);

var piles = [30, 11, 23, 4, 20],
  h = 5;
var expected = 30;
var result = minEatingSpeed(piles, h);
console.log(result, result === expected);

var piles = [30, 11, 23, 4, 20],
  h = 6;
var expected = 23;
var result = minEatingSpeed(piles, h);
console.log(result, result === expected);
