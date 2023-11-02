// 2367. Number of Arithmetic Triplets
// https://leetcode.com/problems/number-of-arithmetic-triplets/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  const n = nums.length;
  let i = 0;
  let j = 1;
  let k = 2;
  let count = 0;
  while (i < n && j < n && k < n) {
    if (nums[j] - nums[i] === diff) {
      k = j + 1;
      while (k < n && nums[k] - nums[j] < diff) {
        k++;
      }

      if (nums[k] - nums[j] === diff) {
        count++;
        i++;
        j = i + 1;
        k = j + 1;
        continue;
      }
    }

    if (nums[j] - nums[i] < diff) {
      j++;
      continue;
    }

    i++;
  }

  return count;
};

var nums = [0, 1, 4, 6, 7, 10],
  diff = 3;
var expected = 2;
var result = arithmeticTriplets(nums, diff);
console.log(result, result === expected);

var nums = [4, 5, 6, 7, 8, 9],
  diff = 2;
var expected = 2;
var result = arithmeticTriplets(nums, diff);
console.log(result, result === expected);

var nums = [0, 1, 7, 9],
  diff = 1;
var expected = 0;
var result = arithmeticTriplets(nums, diff);
console.log(result, result === expected);
