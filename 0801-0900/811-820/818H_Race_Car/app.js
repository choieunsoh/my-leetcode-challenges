// 818. Race Car
// https://leetcode.com/problems/race-car/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number} target
 * @return {number}
 */
var racecar = function (target) {
  const queue = [{ position: 0, speed: 1, sequence: '' }];
  while (queue.length) {
    const { position, speed, sequence } = queue.shift();
    if (position === target) return sequence.length;

    const newPosition = position + speed;
    queue.push({
      position: newPosition,
      speed: speed * 2,
      sequence: sequence + 'A',
    });

    if ((newPosition > target && speed > 0) || (newPosition < target && speed < 0)) {
      queue.push({
        position,
        speed: Math.sign(speed) === 1 ? -1 : 1,
        sequence: sequence + 'R',
      });
    }
  }
  return 0;
};

var target = 3;
var expected = 2;
var result = racecar(target);
console.log(result, result === expected);

var target = 6;
var expected = 5;
var result = racecar(target);
console.log(result, result === expected);
