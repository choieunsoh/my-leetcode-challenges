// 754. Reach a Number
// https://leetcode.com/problems/reach-a-number/
// T.C.: O(sqrt(n))
// S.C.: O(1)
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  let sum = 0;
  let num = 1;
  target = Math.abs(target);
  while (sum < target || (sum - target) & 1) {
    sum += num++;
  }
  return num - 1;
};

var target = 2;
var expected = 3;
var result = reachNumber(target);
console.log(result, result === expected);

var target = 3;
var expected = 2;
var result = reachNumber(target);
console.log(result, result === expected);
