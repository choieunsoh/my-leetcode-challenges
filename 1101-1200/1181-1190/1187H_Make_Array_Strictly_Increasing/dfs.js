// 1187. Make Array Strictly Increasing
// https://leetcode.com/problems/make-array-strictly-increasing/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function (arr1, arr2) {
  const MAX = 2001;
  const dp = new Map();
  arr2.sort((a, b) => a - b);
  const result = dfs(0, -1);
  return result === MAX ? -1 : result;

  function dfs(i, prev) {
    if (i === arr1.length) {
      return 0;
    }
    const key = `${i},${prev}`;
    if (dp.has(key)) {
      return dp.get(key);
    }

    let cost = MAX;
    if (arr1[i] > prev) {
      cost = dfs(i + 1, arr1[i]);
    }
    const index = binarySearch(arr2, prev);
    if (index < arr2.length) {
      cost = Math.min(cost, 1 + dfs(i + 1, arr2[index]));
    }

    dp.set(key, cost);
    return cost;
  }

  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length;
    let result = right;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (arr[mid] > target) {
        right = mid - 1;
        result = mid;
      } else {
        left = mid + 1;
      }
    }
    return result;
  }
};

var arr1 = [1, 5, 3, 6, 7],
  arr2 = [1, 3, 2, 4];
var expected = 1;
var result = makeArrayIncreasing(arr1, arr2);
console.log(result, result === expected);

var arr1 = [1, 5, 3, 6, 7],
  arr2 = [4, 3, 1];
var expected = 2;
var result = makeArrayIncreasing(arr1, arr2);
console.log(result, result === expected);

var arr1 = [1, 5, 3, 6, 7],
  arr2 = [1, 6, 3, 3];
var expected = -1;
var result = makeArrayIncreasing(arr1, arr2);
console.log(result, result === expected);
