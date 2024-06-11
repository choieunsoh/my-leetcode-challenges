// 1122. Relative Sort Array
// https://leetcode.com/problems/relative-sort-array/
// T.C.: O(n + m + k)
// S.C.: O(k)
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const result = [];
  const max = Math.max(...arr1);
  const counts = new Array(max + 1).fill(0);
  for (const num of arr1) {
    counts[num]++;
  }
  for (const num of arr2) {
    while (counts[num]) {
      result.push(num);
      counts[num]--;
    }
  }
  for (let num = 0; num <= max; num++) {
    while (counts[num] > 0) {
      result.push(num);
      counts[num]--;
    }
  }

  return result;
};

var arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  arr2 = [2, 1, 4, 3, 9, 6];
var expected = [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19];
var result = relativeSortArray(arr1, arr2);
console.log(result, result.join() === expected.join());

var arr1 = [28, 6, 22, 8, 44, 17],
  arr2 = [22, 28, 8, 6];
var expected = [22, 28, 8, 6, 17, 44];
var result = relativeSortArray(arr1, arr2);
console.log(result, result.join() === expected.join());
