// 1213. Intersection of Three Sorted Arrays
// https://leetcode.com/problems/intersection-of-three-sorted-arrays/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
  let [p1, p2, p3] = [0, 0, 0];
  const result = [];
  while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
    if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
      result.push(arr1[p1]);
      p1++;
      p2++;
      p3++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else if (arr2[p2] < arr3[p3]) {
      p2++;
    } else {
      p3++;
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
