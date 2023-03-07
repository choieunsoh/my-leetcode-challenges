// 556. Next Greater Element III
// https://leetcode.com/problems/next-greater-element-iii/
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  const MAX = 2 ** 31 - 1;
  const nums = n.toString().split('');
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i < 0) return -1;

  let j = nums.length - 1;
  while (j >= 0 && nums[j] <= nums[i]) {
    j--;
  }

  [nums[i], nums[j]] = [nums[j], nums[i]];

  let k = i + 1;
  const right = nums.slice(k).sort();

  let result = '';
  for (let k = 0; k <= i; k++) {
    result += nums[k];
  }
  for (let k = 0; k < right.length; k++) {
    result += right[k];
  }

  return Number(result) > MAX ? -1 : Number(result);
};

var n = 11;
var expected = -1;
var result = nextGreaterElement(n);
console.log(result, result === expected);

var n = 12;
var expected = 21;
var result = nextGreaterElement(n);
console.log(result, result === expected);

var n = 21;
var expected = -1;
var result = nextGreaterElement(n);
console.log(result, result === expected);

var n = 6537421;
var expected = 6541237;
var result = nextGreaterElement(n);
console.log(result, result === expected);
