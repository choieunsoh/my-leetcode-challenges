// 1356. Sort Integers by The Number of 1 Bits
// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const onesCount = (n) => {
    let sum = 0;
    while (n) {
      sum++;
      n = n & (n - 1);
    }
    return sum;
  };

  return arr.sort((a, b) => onesCount(a) - onesCount(b) || a - b);
};

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var expected = [0, 1, 2, 4, 8, 3, 5, 6, 7];
var result = sortByBits(arr);
console.log(result, result.join() === expected.join());

var arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
var expected = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
var result = sortByBits(arr);
console.log(result, result.join() === expected.join());
