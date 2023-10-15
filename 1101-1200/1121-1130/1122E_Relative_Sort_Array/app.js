// 1122. Relative Sort Array
// https://leetcode.com/problems/relative-sort-array/
// T.C.: O(n + m log m)
// S.C.: O(n)
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = new Map();
  for (const num of arr1) {
    const count = map.get(num) ?? 0;
    map.set(num, count + 1);
  }

  let index = 0;
  for (const num of arr2) {
    let count = map.get(num);
    while (count-- > 0) {
      arr1[index++] = num;
    }
    map.delete(num);
  }

  const remain = [...map.entries()].sort((a, b) => a[0] - b[0]);
  for (let [num, count] of remain) {
    while (count-- > 0) {
      arr1[index++] = num;
    }
  }
  return arr1;
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
