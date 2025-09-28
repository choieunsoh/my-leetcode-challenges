// 3300. Minimum Element After Replacement With Digit Sum
// https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  let min = Infinity;
  for (const num of nums) {
    min = Math.min(min, sumDigits(num));
  }
  return min;

  function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = (num / 10) | 0;
    }
    return sum;
  }
};

var nums = [10, 12, 13, 14];
var expected = 1;
var result = minElement(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 1;
var result = minElement(nums);
console.log(result, result === expected);

var nums = [999, 19, 199];
var expected = 10;
var result = minElement(nums);
console.log(result, result === expected);
