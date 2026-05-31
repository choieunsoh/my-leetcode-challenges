// 2126. Destroying Asteroids
// https://leetcode.com/problems/destroying-asteroids/description/
// T.C.: O(n log n)
// S.C.: O(log n)
/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
  asteroids.sort((a, b) => a - b); // Sort by mass in ascending order
  let currentMass = mass; // JavaScript numbers can safely handle large integers
  for (const asteroid of asteroids) {
    // Traverse the asteroids in order, attempt to destroy and update mass or return the result
    if (currentMass < asteroid) {
      return false;
    }
    currentMass += asteroid;
  }
  return true; // Successfully destroy all asteroids
};

var mass = 10,
  asteroids = [3, 9, 19, 5, 21];
var expected = true;
var result = asteroidsDestroyed(mass, asteroids);
console.log(result, result === expected);

var mass = 5,
  asteroids = [4, 9, 23, 4];
var expected = false;
var result = asteroidsDestroyed(mass, asteroids);
console.log(result, result === expected);
