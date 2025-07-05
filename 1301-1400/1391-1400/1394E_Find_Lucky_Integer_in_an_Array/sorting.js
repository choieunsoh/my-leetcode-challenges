// 1394. Find Lucky Integer in an Array
// https://leetcode.com/problems/find-lucky-integer-in-an-array/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  arr.sort((a, b) => b - a);
  let currentStreak = 0;
  for (let i = 0; i < arr.length; i++) {
    currentStreak++;
    if (i === 0 || arr[i] !== arr[i - 1]) {
      if (currentStreak === arr[i]) {
        return currentStreak;
      }
      currentStreak = 0;
    }
  }
  return -1;
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
