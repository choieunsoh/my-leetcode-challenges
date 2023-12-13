// 853. Car Fleet
// https://leetcode.com/problems/car-fleet/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const arr = new Array(target).fill(0);
  for (let i = 0; i < position.length; i++) {
    arr[position[i]] = (target - position[i]) / speed[i];
  }
  let fleets = 0;
  let prev = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= prev) continue;
    fleets++;
    prev = arr[i];
  }
  return fleets;
};

var target = 12,
  position = [10, 8, 0, 5, 3],
  speed = [2, 4, 1, 1, 3];
var expected = 3;
var result = carFleet(target, position, speed);
console.log(result, result === expected);

var target = 10,
  position = [3],
  speed = [3];
var expected = 1;
var result = carFleet(target, position, speed);
console.log(result, result === expected);

var target = 100,
  position = [0, 2, 4],
  speed = [4, 2, 1];
var expected = 1;
var result = carFleet(target, position, speed);
console.log(result, result === expected);
