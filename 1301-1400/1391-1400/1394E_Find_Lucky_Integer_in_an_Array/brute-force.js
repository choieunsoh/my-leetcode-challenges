// 1394. Find Lucky Integer in an Array
// https://leetcode.com/problems/find-lucky-integer-in-an-array/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let maxLuckyNumber = -1;
  for (const num of arr) {
    const occurrencesOfNum = countOccurrences(num);
    if (occurrencesOfNum === num && occurrencesOfNum > maxLuckyNumber) {
      maxLuckyNumber = occurrencesOfNum;
    }
  }
  return maxLuckyNumber;

  function countOccurrences(candidate) {
    let count = 0;
    for (const num of arr) {
      if (num === candidate) {
        count++;
      }
    }
    return count;
  }
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
