/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
var canSplitArray = function (nums, m) {
  const n = nums.length;
  if (n < 3) return true;

  let sum1 = 0;
  const total = nums.reduce((sum, num) => sum + num, 0);
  for (let i = 0; i < n; i++) {
    let sum = total - sum1;
    let j = n - 1;
    if (j - i < 2 && sum >= m) return true;

    while (j > i && sum >= m) {
      sum -= nums[j--];
      if (j - i < 2 && sum >= m) return true;
    }
    sum1 += nums[i];
  }
  return false;
};

var nums = [4, 1, 3, 2, 4],
  m = 6;
var expected = true;
var result = canSplitArray(nums, m);
console.log(result, result === expected);

var nums = [1, 1],
  m = 3;
var expected = true;
var result = canSplitArray(nums, m);
console.log(result, result === expected);

var nums = [2, 2, 1],
  m = 4;
var expected = true;
var result = canSplitArray(nums, m);
console.log(result, result === expected);

var nums = [2, 1, 3],
  m = 5;
var expected = false;
var result = canSplitArray(nums, m);
console.log(result, result === expected);

var nums = [2, 3, 3, 2, 3],
  m = 6;
var expected = true;
var result = canSplitArray(nums, m);
console.log(result, result === expected);

var nums = [2, 3, 3, 2, 3],
  m = 8;
var expected = false;
var result = canSplitArray(nums, m);
console.log(result, result === expected);
