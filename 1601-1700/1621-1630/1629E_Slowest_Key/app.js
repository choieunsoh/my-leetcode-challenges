// 1629. Slowest Key
// https://leetcode.com/problems/slowest-key/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let slowestTime = releaseTimes[0];
  let slowest = keysPressed[0];
  for (let i = 1; i < releaseTimes.length; i++) {
    const duration = releaseTimes[i] - releaseTimes[i - 1];
    if (duration > slowestTime) {
      slowest = keysPressed[i];
      slowestTime = duration;
    } else if (duration === slowestTime && keysPressed[i] > slowest) {
      slowest = keysPressed[i];
    }
  }
  return slowest;
};

var releaseTimes = [9, 29, 49, 50],
  keysPressed = 'cbcd';
var expected = 'c';
var result = slowestKey(releaseTimes, keysPressed);
console.log(result, result === expected);

var releaseTimes = [12, 23, 36, 46, 62],
  keysPressed = 'spuda';
var expected = 'a';
var result = slowestKey(releaseTimes, keysPressed);
console.log(result, result === expected);
