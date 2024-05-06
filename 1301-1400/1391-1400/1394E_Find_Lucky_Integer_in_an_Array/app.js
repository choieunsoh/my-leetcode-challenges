// 1394. Find Lucky Integer in an Array
// https://leetcode.com/problems/find-lucky-integer-in-an-array/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const counts = new Map();
  for (const num of arr) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  let result = -1;
  for (const [num, count] of counts) {
    if (num === count && num > result) {
      result = num;
    }
  }
  return result;
};

var arr = [2, 2, 3, 4];
var expected = 2;
var result = findLucky(arr);
console.log(result, result === expected);

var arr = [1, 2, 2, 3, 3, 3];
var expected = 3;
var result = findLucky(arr);
console.log(result, result === expected);

var arr = [2, 2, 2, 3, 3];
var expected = -1;
var result = findLucky(arr);
console.log(result, result === expected);
