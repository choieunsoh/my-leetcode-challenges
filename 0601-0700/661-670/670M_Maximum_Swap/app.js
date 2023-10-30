// 670. Maximum Swap
// https://leetcode.com/problems/maximum-swap/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let max = -1;
  let maxIndex = -1;
  let leftIndex = -1;
  let rightIndex = -1;
  const nums = num.toString().split('').map(Number);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    } else if (nums[i] < max) {
      rightIndex = maxIndex;
      leftIndex = i;
    }
  }

  if (leftIndex !== -1) {
    [nums[leftIndex], nums[rightIndex]] = [nums[rightIndex], nums[leftIndex]];
  }

  let result = 0;
  for (let i = nums.length - 1, base = 1; i >= 0; i--, base *= 10) {
    result += base * nums[i];
  }
  return result;
};

var num = 2736;
var expected = 7236;
var result = maximumSwap(num);
console.log(result, result === expected);

var num = 7736;
var expected = 7763;
var result = maximumSwap(num);
console.log(result, result === expected);

var num = 9973;
var expected = 9973;
var result = maximumSwap(num);
console.log(result, result === expected);

var num = 98368;
var expected = 98863;
var result = maximumSwap(num);
console.log(result, result === expected);

var num = 1993;
var expected = 9913;
var result = maximumSwap(num);
console.log(result, result === expected);

var num = 120;
var expected = 210;
var result = maximumSwap(num);
console.log(result, result === expected);

var num = 102;
var expected = 201;
var result = maximumSwap(num);
console.log(result, result === expected);
