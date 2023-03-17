// 735. Asteroid Collision
// https://leetcode.com/problems/asteroid-collision/
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let asteroid = asteroids[i];
    while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
      const diff = asteroid + stack[stack.length - 1];
      if (diff > 0) {
        asteroid = 0;
      }
      if (diff < 0) {
        stack.pop();
      } else if (diff === 0) {
        stack.pop();
        asteroid = 0;
      }
    }

    if (asteroid) {
      stack.push(asteroid);
    }
  }
  return stack;
};

var asteroids = [5, 10, -5];
var expected = [5, 10];
var result = asteroidCollision(asteroids);
console.log(result, result.join() === expected.join());

var asteroids = [8, -8];
var expected = [];
var result = asteroidCollision(asteroids);
console.log(result, result.join() === expected.join());

var asteroids = [10, 2, -5];
var expected = [10];
var result = asteroidCollision(asteroids);
console.log(result, result.join() === expected.join());

var asteroids = [-2, -1, 1, 2];
var expected = [-2, -1, 1, 2];
var result = asteroidCollision(asteroids);
console.log(result, result.join() === expected.join());
