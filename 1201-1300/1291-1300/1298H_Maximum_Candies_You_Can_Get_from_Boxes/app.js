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
  const n = status.length;
  const canOpen = new Array(n).fill(false);
  const hasBox = new Array(n).fill(false);
  const used = new Array(n).fill(false);
  let totalCandies = 0;

  for (let i = 0; i < n; ++i) {
    canOpen[i] = status[i] === 1;
  }

  const q = [];
  for (const box of initialBoxes) {
    hasBox[box] = true;
    if (canOpen[box]) {
      q.push(box);
      used[box] = true;
      totalCandies += candies[box];
    }
  }

  while (q.length > 0) {
    const bigBox = q.shift();
    for (const key of keys[bigBox]) {
      canOpen[key] = true;
      if (!used[key] && hasBox[key]) {
        q.push(key);
        used[key] = true;
        totalCandies += candies[key];
      }
    }

    for (const box of containedBoxes[bigBox]) {
      hasBox[box] = true;
      if (!used[box] && canOpen[box]) {
        q.push(box);
        used[box] = true;
        totalCandies += candies[box];
      }
    }
  }

  return totalCandies;
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
