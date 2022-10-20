// https://leetcode.com/problems/find-k-closest-elements/
// 658. Find K Closest Elements
var findClosestElements = function (
  arr: number[],
  k: number,
  x: number
): number[] {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const result: number[] = [];
  for (let i = 0; i < k; i++) {
    result.push(arr[left + i]);
  }

  return result;
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

var arr = [1, 2, 3, 4, 5, 6],
  k = 3,
  x = 6;
var expected = [4, 5, 6];
var result = findClosestElements(arr, k, x);
console.log(result, result.join() === expected.join());
