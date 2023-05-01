// 1529. Minimum Suffix Flips
// https://leetcode.com/problems/minimum-suffix-flips/
/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  let count = 0;
  let current = '1';
  for (const curr of target) {
    if (curr === current) {
      count++;
      current = current === '1' ? '0' : '1';
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
