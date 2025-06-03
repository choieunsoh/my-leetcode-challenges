// 1298. Maximum Candies You Can Get from Boxes
// https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function (status, candies, keys, containedBoxes, initialBoxes) {
  const boxesAwaitingKeys = new Array(status.length).fill(false);
  const acquiredKeys = new Array(status.length).fill(0);

  const queue = [];
  for (const box of initialBoxes) {
    if (status[box] === 1) {
      queue.push(box);
    } else {
      boxesAwaitingKeys[box] = true;
    }
  }

  let count = 0;
  while (queue.length > 0) {
    const box = queue.shift();
    openBox(box);
  }

  return count;

  function openBox(box) {
    count += candies[box];

    for (const nextBox of keys[box]) {
      acquiredKeys[nextBox] = 1;

      if (boxesAwaitingKeys[nextBox]) {
        boxesAwaitingKeys[nextBox] = false;
        status[nextBox] = 1;
        queue.push(nextBox);
      }
    }

    for (const nextBox of containedBoxes[box]) {
      if (status[nextBox] === 1) {
        queue.push(nextBox);
      } else {
        if (acquiredKeys[nextBox] === 1) {
          status[nextBox] = 1;
          queue.push(nextBox);
        } else {
          boxesAwaitingKeys[nextBox] = true;
        }
      }
    }
  }
};

var status = [1, 0, 1, 0],
  candies = [7, 5, 4, 100],
  keys = [[], [], [1], []],
  containedBoxes = [[1, 2], [3], [], []],
  initialBoxes = [0];
var expected = 16;
var result = maxCandies(status, candies, keys, containedBoxes, initialBoxes);
console.log(result, result === expected);

var status = [1, 0, 0, 0, 0, 0],
  candies = [1, 1, 1, 1, 1, 1],
  keys = [[1, 2, 3, 4, 5], [], [], [], [], []],
  containedBoxes = [[1, 2, 3, 4, 5], [], [], [], [], []],
  initialBoxes = [0];
var expected = 6;
var result = maxCandies(status, candies, keys, containedBoxes, initialBoxes);
console.log(result, result === expected);
