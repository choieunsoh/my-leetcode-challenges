// 3074. Apple Redistribution into Boxes
// https://leetcode.com/problems/apple-redistribution-into-boxes/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
  capacity.sort((a, b) => b - a);
  const totalApples = apple.reduce((sum, pack) => sum + pack, 0);
  let boxes = 0;
  let packedApples = 0;
  while (packedApples < totalApples) {
    packedApples += capacity[boxes++];
  }
  return boxes;
};

var apple = [1, 3, 2],
  capacity = [4, 3, 1, 5, 2];
var expected = 2;
var result = minimumBoxes(apple, capacity);
console.log(result, result === expected);

var apple = [5, 5, 5],
  capacity = [2, 4, 2, 7];
var expected = 4;
var result = minimumBoxes(apple, capacity);
console.log(result, result === expected);
