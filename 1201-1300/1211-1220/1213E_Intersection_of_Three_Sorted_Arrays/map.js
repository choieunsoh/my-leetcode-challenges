// 1213. Intersection of Three Sorted Arrays
// https://leetcode.com/problems/intersection-of-three-sorted-arrays/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
  const counts = new Map();
  const nums = [...arr1, ...arr2, ...arr3];
  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  const result = [];
  for (const [num, count] of counts) {
    if (count === 3) {
      result.push(num);
    }
  }
  return result;
};

var arr1 = [1, 2, 3, 4, 5],
  arr2 = [1, 2, 5, 7, 9],
  arr3 = [1, 3, 4, 5, 8];
var expected = [1, 5];
var result = arraysIntersection(arr1, arr2, arr3);
console.log(result, result.join() === expected.join());

var arr1 = [197, 418, 523, 876, 1356],
  arr2 = [501, 880, 1593, 1710, 1870],
  arr3 = [521, 682, 1337, 1395, 1764];
var expected = [];
var result = arraysIntersection(arr1, arr2, arr3);
console.log(result, result.join() === expected.join());
