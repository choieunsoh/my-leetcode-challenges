// 1742. Maximum Number of Balls in a Box
// https://leetcode.com/problems/maximum-number-of-balls-in-a-box/
// T.C.: O(n log m)
// S.C.: O(log m)
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  let most = 0;
  const counts = new Map();
  for (let box = lowLimit; box <= highLimit; box++) {
    let sum = 0;
    let num = box;
    while (num > 0) {
      sum += num % 10;
      num = (num / 10) | 0;
    }
    counts.set(sum, (counts.get(sum) ?? 0) + 1);
    most = Math.max(most, counts.get(sum));
  }
  return most;
};

var lowLimit = 1,
  highLimit = 10;
var expected = 2;
var result = countBalls(lowLimit, highLimit);
console.log(result, result === expected);

var lowLimit = 5,
  highLimit = 15;
var expected = 2;
var result = countBalls(lowLimit, highLimit);
console.log(result, result === expected);

var lowLimit = 19,
  highLimit = 28;
var expected = 2;
var result = countBalls(lowLimit, highLimit);
console.log(result, result === expected);
