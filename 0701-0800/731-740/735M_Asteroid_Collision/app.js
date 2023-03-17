// 735. Asteroid Collision
// https://leetcode.com/problems/asteroid-collision/
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    const asteroid = asteroids[i];
    const last = stack[stack.length - 1];
    if (asteroid < 0 && last > 0) {
      const result = Math.abs(asteroid) - Math.abs(last);
      if (last + asteroid === 0) {
        stack.pop();
      } else if (result > 0) {
        stack.pop();
        i--;
      }
    } else {
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
