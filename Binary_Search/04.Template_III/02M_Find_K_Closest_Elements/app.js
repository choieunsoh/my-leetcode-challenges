// https://leetcode.com/problems/find-k-closest-elements/
// 658. Find K Closest Elements
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  const result = [];
  while (result.length < k && result.length < arr.length) {
    if (left < arr.length && right >= 0) {
      if (arr[left] - x < x - arr[right]) {
        result.push(arr[left++]);
      } else {
        result.push(arr[right--]);
      }
    } else if (left < arr.length) {
      result.push(arr[left++]);
    } else {
      result.push(arr[right--]);
    }
  }
  return result.sort((a, b) => a - b);
};

var arr = [1, 2, 3, 4, 5],
  k = 4,
  x = 3;
var expected = [1, 2, 3, 4];
var result = findClosestElements(arr, k, x);
console.log(result, result.join() === expected.join());

var arr = [1, 2, 3, 4, 5],
  k = 4,
  x = -1;
var expected = [1, 2, 3, 4];
var result = findClosestElements(arr, k, x);
console.log(result, result.join() === expected.join());
