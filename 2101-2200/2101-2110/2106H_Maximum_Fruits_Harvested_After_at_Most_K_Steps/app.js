// 2106. Maximum Fruits Harvested After at Most K Steps
// https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function (fruits, startPos, k) {
  const n = fruits.length;
  let result = 0;
  let left = 0;
  let right = 0;
  let sum = 0;
  while (right < n) {
    sum += fruits[right][1];
    while (left <= right && countStep(left, right) > k) {
      sum -= fruits[left][1];
      left++;
    }
    result = Math.max(result, sum);
    right++;
  }
  return result;

  function countStep(left, right) {
    const moveLeft = Math.abs(startPos - fruits[left][0]);
    const moveRight = Math.abs(startPos - fruits[right][0]);
    return Math.min(moveLeft, moveRight) + fruits[right][0] - fruits[left][0];
  }
};

var fruits = [
    [2, 8],
    [6, 3],
    [8, 6],
  ],
  startPos = 5,
  k = 4;
var expected = 9;
var result = maxTotalFruits(fruits, startPos, k);
console.log(result, result === expected);

var fruits = [
    [0, 9],
    [4, 1],
    [5, 7],
    [6, 2],
    [7, 4],
    [10, 9],
  ],
  startPos = 5,
  k = 4;
var expected = 14;
var result = maxTotalFruits(fruits, startPos, k);
console.log(result, result === expected);

var fruits = [
    [0, 3],
    [6, 4],
    [8, 5],
  ],
  startPos = 3,
  k = 2;
var expected = 0;
var result = maxTotalFruits(fruits, startPos, k);
console.log(result, result === expected);
