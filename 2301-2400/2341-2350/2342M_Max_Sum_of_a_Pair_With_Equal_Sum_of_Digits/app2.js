// 2342. Max Sum of a Pair With Equal Sum of Digits
// https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/description/
// T.C.: O(n log m)
// S.C.: O(log m)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  let maxSum = -1;
  const map = Array.from({ length: 82 }, () => [-1, -1]);
  for (const num of nums) {
    const sum = sumDigit(num);
    if (map[sum][0] === -1) {
      map[sum] = [num, -1];
      continue;
    }

    const maxNums = map[sum];
    const maxNum1 = maxNums[0];
    const maxNum2 = maxNums[1];
    if (num > maxNum1) {
      maxNums[0] = num;
      maxNums[1] = maxNum1;
    } else if (num > maxNum2) {
      maxNums[1] = num;
    }

    maxSum = Math.max(maxSum, maxNums[0] + maxNums[1]);
  }
  return maxSum;

  function sumDigit(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = (num / 10) | 0;
    }
    return sum;
  }
};

var nums = [18, 43, 36, 13, 7];
var expected = 54;
var result = maximumSum(nums);
console.log(result, result === expected);

var nums = [10, 12, 19, 14];
var expected = -1;
var result = maximumSum(nums);
console.log(result, result === expected);

var nums = [18, 43, 36, 13, 7, 27, 45];
var expected = 81;
var result = maximumSum(nums);
console.log(result, result === expected);
