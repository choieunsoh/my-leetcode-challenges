/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  let sum = 0;
  let allNegative = true;
  const seen = new Set();
  for (const num of nums) {
    if (num > 0) allNegative = false;
    if (num < 0 || seen.has(num)) continue;
    seen.add(num);
    sum += num;
  }

  if (allNegative) sum = Math.max(...nums);
  return sum;
};

var nums = [1, 2, 3, 4, 5];
var expected = 15;
var result = maxSum(nums);
console.log(result, result === expected);

var nums = [1, 1, 0, 1, 1];
var expected = 1;
var result = maxSum(nums);
console.log(result, result === expected);

var nums = [1, 2, -1, -2, 1, 0, -1];
var expected = 3;
var result = maxSum(nums);
console.log(result, result === expected);

var nums = [-100];
var expected = -100;
var result = maxSum(nums);
console.log(result, result === expected);

var nums = [-20, 20];
var expected = 20;
var result = maxSum(nums);
console.log(result, result === expected);
