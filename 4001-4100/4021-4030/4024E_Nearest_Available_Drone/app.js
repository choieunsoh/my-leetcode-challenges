// 4024. Nearest Available Drone
// https://leetcode.com/problems/nearest-available-drone/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} drones
 * @param {number[]} target
 * @return {number}
 */
var nearestDrone = function (drones, target) {
  let minDistance = Infinity;
  let nearestIndex = -1;
  for (let i = 0; i < drones.length; i++) {
    const [x, y, range] = drones[i];
    const distance = Math.abs(x - target[0]) + Math.abs(y - target[1]);
    if (distance <= range && distance < minDistance) {
      minDistance = distance;
      nearestIndex = i;
    }
  }
  return nearestIndex;
};

var drones = [
    [0, 0, 8],
    [2, 2, 9],
  ],
  target = [3, 4];
var expected = 1;
var result = nearestDrone(drones, target);
console.log(result, result === expected);

var drones = [
    [2, 1, 5],
    [4, 4, 5],
    [6, 6, 8],
  ],
  target = [5, 5];
var expected = 1;
var result = nearestDrone(drones, target);
console.log(result, result === expected);

var drones = [[4, 4, 5]],
  target = [8, 6];
var expected = -1;
var result = nearestDrone(drones, target);
console.log(result, result === expected);
