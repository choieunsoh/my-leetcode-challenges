// 1243. Array Transformation
// https://leetcode.com/problems/array-transformation/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var transformArray = function (arr) {
  let result = [...arr];
  while (true) {
    let changed = false;
    for (let i = 1; i < arr.length - 1; i++) {
      const left = arr[i - 1];
      const mid = arr[i];
      const right = arr[i + 1];
      if (mid > left && mid > right) {
        result[i]--;
        changed = true;
      } else if (mid < left && mid < right) {
        result[i]++;
        changed = true;
      }
    }
    if (!changed) break;
    arr = [...result];
  }
  return result;
};

var arr = [6, 2, 3, 4];
var expected = [6, 3, 3, 4];
var result = transformArray(arr);
console.log(result, result.join() === expected.join());

var arr = [1, 6, 3, 4, 3, 5];
var expected = [1, 4, 4, 4, 4, 5];
var result = transformArray(arr);
console.log(result, result.join() === expected.join());

var arr = [2, 1, 2, 1, 1, 2, 2, 1];
var expected = [2, 2, 1, 1, 1, 2, 2, 1];
var result = transformArray(arr);
console.log(result, result.join() === expected.join());
