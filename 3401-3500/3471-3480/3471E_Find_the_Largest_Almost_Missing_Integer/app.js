// 3471. Find the Largest Almost Missing Integer
// https://leetcode.com/problems/find-the-largest-almost-missing-integer/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
  const n = nums.length;
  if (n < k) return -1;

  if (k === n) {
    return Math.max(...nums);
  }

  if (k === 1) {
    const counts = new Array(51).fill(0);
    for (let i = 0; i < n; i++) {
      counts[nums[i]]++;
    }

    let max = -1;
    for (let num = 0; num < counts.length; num++) {
      if (counts[num] === 1) {
        max = Math.max(max, num);
      }
    }
    return max;
  }

  const first = nums[0];
  const last = nums[n - 1];
  if (first === last) return -1;

  let firstCount = 0;
  let lastCount = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === first) firstCount++;
    if (nums[i] === last) lastCount++;
  }

  if (firstCount > 1 && lastCount > 1) return -1;
  if (firstCount > 1) return last;
  if (lastCount > 1) return first;
  return Math.max(first, last);
};

var nums = [3, 9, 2, 1, 7],
  k = 3;
var expected = 7;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [3, 9, 7, 2, 1, 7],
  k = 4;
var expected = 3;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [0, 0],
  k = 1;
var expected = -1;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [0, 2, 0],
  k = 1;
var expected = 2;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [0, 0, 1],
  k = 1;
var expected = 1;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [0, 0, 0],
  k = 1;
var expected = -1;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [0, 0],
  k = 2;
var expected = 0;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 1, 2, 1, 2],
  k = 2;
var expected = -1;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 1, 2, 1, 2],
  k = 3;
var expected = -1;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5],
  k = 3;
var expected = 5;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5, 1, 2],
  k = 3;
var expected = -1;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 1, 2, 1, 3],
  k = 3;
var expected = 3;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 1, 2, 1, 3],
  k = 2;
var expected = 3;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 1, 2, 1, 3],
  k = 4;
var expected = 3;
var result = largestInteger(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 1, 2, 2, 2],
  k = 2;
var expected = -1;
var result = largestInteger(nums, k);
console.log(result, result === expected);
