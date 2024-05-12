// 1093. Statistics from a Large Sample
// https://leetcode.com/problems/statistics-from-a-large-sample/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function (count) {
  let min = -1;
  let max = -1;
  let totalCount = 0;
  let mode = 0;
  let maxCount = 0;
  let sum = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] === 0) continue;

    totalCount += count[i];
    sum += count[i] * i;

    if (min === -1) min = i;
    max = i;

    if (count[i] > maxCount) {
      maxCount = count[i];
      mode = i;
    }
  }

  let leftIndex = 0;
  let rightIndex = 0;
  if (totalCount % 2 === 0) {
    leftIndex = totalCount / 2 - 1;
    rightIndex = totalCount / 2;
  } else {
    leftIndex = (totalCount / 2) | 0;
    rightIndex = leftIndex;
  }

  let index = -1;
  let leftVal = -1;
  let rightVal = -1;
  for (let i = 0; i < count.length; i++) {
    if (count[i] === 0) continue;

    index += count[i];
    if (leftVal === -1 && index >= leftIndex) {
      leftVal = i;
      if (index > leftIndex) {
        rightVal = i;
        break;
      }
    }

    if (rightVal === -1 && index >= rightIndex) {
      rightVal = i;
      break;
    }
  }

  const mean = Math.round((1e5 * sum) / totalCount) / 1e5;
  const median = Math.round((1e5 * (leftVal + rightVal)) / 2) / 1e5;

  return [min, max, mean, median, mode];
};

var count = [
  0, 1, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
var expected = [1.0, 3.0, 2.375, 2.5, 3.0];
var result = sampleStats(count);
console.log(expected);
console.log(result, result.join() === expected.join());

var count = [
  0, 4, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
var expected = [1.0, 4.0, 2.18182, 2.0, 1.0];
var result = sampleStats(count);
console.log(expected);
console.log(result, result.join() === expected.join());
