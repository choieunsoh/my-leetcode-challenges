// 315. Count of Smaller Numbers After Self
// https://leetcode.com/problems/count-of-smaller-numbers-after-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const result = Array(nums.length).fill(0);
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push([nums[i], i]);
  }
  mergeSort(arr, 0, nums.length - 1);
  return result;

  function mergeSort(arr, left, right) {
    if (left >= right) return;
    const mid = (left + right) >> 1;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, right);
  }
  function merge(arr, left, right) {
    const mid = (left + right) >> 1;
    let i = left;
    let j = mid + 1;
    let k = 0;
    const temp = [];
    while (i <= mid && j <= right) {
      if (arr[i][0] > arr[j][0]) {
        const index = arr[i][1];
        result[index] += right - j + 1;
        temp[k++] = arr[i++];
      } else {
        temp[k++] = arr[j++];
      }
    }
    while (i <= mid) {
      temp[k++] = arr[i++];
    }
    while (j <= right) {
      temp[k++] = arr[j++];
    }
    for (let i = left; i <= right; i++) {
      arr[i] = temp[i - left];
    }
  }
};

var nums = [5, 2, 6, 1];
var expected = [2, 1, 1, 0];
var result = countSmaller(nums);
console.log(result, result.join() === expected.join());

var nums = [-1];
var expected = [0];
var result = countSmaller(nums);
console.log(result, result.join() === expected.join());

var nums = [-1, -1];
var expected = [0, 0];
var result = countSmaller(nums);
console.log(result, result.join() === expected.join());
