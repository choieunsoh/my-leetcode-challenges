// 2834. Find the Minimum Possible Sum of a Beautiful Array
// https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/
/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function (n, target) {
  let result = 0;
  const nums = new Set();
  for (let i = 1; nums.size < n; i++) {
    if (!nums.has(target - i)) {
      nums.add(i);
      result += i;
    }
  }
  return result;
};

var n = 2,
  target = 3;
var expected = 4;
var result = minimumPossibleSum(n, target);
console.log(result, result === expected);

var n = 3,
  target = 3;
var expected = 8;
var result = minimumPossibleSum(n, target);
console.log(result, result === expected);

var n = 1,
  target = 1;
var expected = 1;
var result = minimumPossibleSum(n, target);
console.log(result, result === expected);
