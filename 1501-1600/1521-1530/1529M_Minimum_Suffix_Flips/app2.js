// 1529. Minimum Suffix Flips
// https://leetcode.com/problems/minimum-suffix-flips/
/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  let count = Number(target[0]);
  for (let i = 1; i < target.length; i++) {
    if (target[i] !== target[i - 1]) {
      count++;
    }
  }
  return count;
};

var target = '10111';
var expected = 3;
var result = minFlips(target);
console.log(result, result === expected);

var target = '101';
var expected = 3;
var result = minFlips(target);
console.log(result, result === expected);

var target = '00000';
var expected = 0;
var result = minFlips(target);
console.log(result, result === expected);
