// 2169. Count Operations to Obtain Zero
// https://leetcode.com/problems/count-operations-to-obtain-zero/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  let count = 0;
  while (num1 > 0 && num2 > 0) {
    if (num1 >= num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
    count++;
  }
  return count;
};

var num1 = 2,
  num2 = 3;
var expected = 3;
var result = countOperations(num1, num2);
console.log(result, result === expected);

var num1 = 10,
  num2 = 10;
var expected = 1;
var result = countOperations(num1, num2);
console.log(result, result === expected);
