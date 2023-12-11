// 1287. Element Appearing More Than 25% In Sorted Array
// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const n = arr.length;
  const counts = new Map();
  for (const num of arr) {
    const count = counts.get(num) ?? 0;
    if (count + 1 > n / 4) return num;
    counts.set(num, count + 1);
  }
  return 0;
};

var arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];
var expected = 6;
var result = findSpecialInteger(arr);
console.log(result, result === expected);

var arr = [1, 1];
var expected = 1;
var result = findSpecialInteger(arr);
console.log(result, result === expected);

var arr = [1, 1, 2, 2, 3, 3, 3, 4];
var expected = 3;
var result = findSpecialInteger(arr);
console.log(result, result === expected);
