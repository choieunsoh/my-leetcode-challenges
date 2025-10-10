// 2578. Split With Minimum Sum
// https://leetcode.com/problems/split-with-minimum-sum/
// T.C.: O(d log d)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  const nums = num.toString().split('').sort();
  let num1 = '';
  let num2 = '';
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      num1 += nums[i];
    } else {
      num2 += nums[i];
    }
  }
  return Number(num1) + Number(num2);
};

var num = 4325;
var expected = 59;
var result = splitNum(num);
console.log(result, result === expected);

var num = 687;
var expected = 75;
var result = splitNum(num);
console.log(result, result === expected);
