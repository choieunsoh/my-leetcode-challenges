// 327. Count of Range Sum
// https://leetcode.com/problems/count-of-range-sum/
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  function merge(nums, leftNums, rightNums) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < leftNums.length && j < rightNums.length) {
      if (leftNums[i] <= rightNums[j]) {
        nums[k++] = leftNums[i++];
      } else {
        nums[k++] = rightNums[j++];
      }
    }
    while (i < leftNums.length) {
      nums[k++] = leftNums[i++];
    }
    while (j < rightNums.length) {
      nums[k++] = rightNums[j++];
    }
  }

  function mergeSort(nums, left = 0, right = nums.length - 1) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    const leftNums = nums.slice(left, mid + 1);
    mergeSort(leftNums);

    const rightNums = nums.slice(mid + 1, right + 1);
    mergeSort(rightNums);

    countRange(leftNums, rightNums);

    merge(nums, leftNums, rightNums);
  }

  function countRange(leftNums, rightNums) {
    let i = 0;
    let j = 0;
    for (let k = 0; k < leftNums.length; k++) {
      while (i < rightNums.length && rightNums[i] - leftNums[k] < lower) {
        i++;
      }
      while (j < rightNums.length && rightNums[j] - leftNums[k] <= upper) {
        j++;
      }
      count += j - i;
    }
  }

  const sum = [0];
  for (let i = 0; i < nums.length; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }

  let count = 0;
  mergeSort(sum);
  return count;
};

var nums = [-2, 5, -1],
  lower = -2,
  upper = 2;
var expected = 3;
var result = countRangeSum(nums, lower, upper);
console.log(result, expected, result === expected);

var nums = [0],
  lower = 0,
  upper = 0;
var expected = 1;
var result = countRangeSum(nums, lower, upper);
console.log(result, expected, result === expected);

var nums = [3, 9, 10, 2, 1, 5, 7, 8];
