// 1769. Minimum Number of Operations to Move All Balls to Each Box
// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const n = boxes.length;
  const result = new Array(n).fill(0);
  for (let currentBox = 0; currentBox < n; currentBox++) {
    if (boxes[currentBox] === '1') {
      for (let newPosition = 0; newPosition < n; newPosition++) {
        result[newPosition] += Math.abs(newPosition - currentBox);
      }
    }
  }
  return result;
};

var boxes = '110';
var expected = [1, 1, 3];
var result = minOperations(boxes);
console.log(result, result.join() === expected.join());

var boxes = '001011';
var expected = [11, 8, 5, 4, 3, 4];
var result = minOperations(boxes);
console.log(result, result.join() === expected.join());
