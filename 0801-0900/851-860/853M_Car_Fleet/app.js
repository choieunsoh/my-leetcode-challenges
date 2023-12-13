// 853. Car Fleet
// https://leetcode.com/problems/car-fleet/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number} target
 * @param {number[]} positions
 * @param {number[]} speeds
 * @return {number}
 */
var carFleet = function (target, positions, speeds) {
  const stack = [];
  const pairs = positions.map((pos, i) => ({ position: pos, speed: speeds[i] }));
  pairs.sort((a, b) => a.position - b.position);
  for (const { position, speed } of pairs) {
    const time = (target - position) / speed;
    while (stack.length && time >= stack[stack.length - 1]) stack.pop();
    stack.push(time);
  }
  return stack.length;
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
