// 2769. Find the Maximum Achievable Number
// https://leetcode.com/problems/find-the-maximum-achievable-number/
/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function (num, t) {
  return num + 2 * t;
};

var num = 4,
  t = 1;
var expected = 6;
var result = theMaximumAchievableX(num, t);
console.log(result, result === expected);

var num = 3,
  t = 2;
var expected = 7;
var result = theMaximumAchievableX(num, t);
console.log(result, result === expected);
