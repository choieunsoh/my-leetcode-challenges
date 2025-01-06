// 1769. Minimum Number of Operations to Move All Balls to Each Box
// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const n = boxes.length;
  const result = new Array(n).fill(0);
  let ballsToLeft = 0;
  let movesToLeft = 0;
  let ballsToRight = 0;
  let movesToRight = 0;
  for (let i = 0; i < n; i++) {
    result[i] += movesToLeft;
    if (boxes[i] === '1') ballsToLeft++;
    movesToLeft += ballsToLeft;

    const j = n - i - 1;
    result[j] += movesToRight;
    if (boxes[j] === '1') ballsToRight++;
    movesToRight += ballsToRight;
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
