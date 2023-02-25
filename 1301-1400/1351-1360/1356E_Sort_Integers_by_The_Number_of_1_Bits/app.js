// 1356. Sort Integers by The Number of 1 Bits
// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  function countOne(num) {
    let count = 0;
    while (num) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  }

  const result = [];
  for (const num of arr) {
    result.push([num, countOne(num)]);
  }
  result.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  return result.map((num) => num[0]);
};

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var expected = [0, 1, 2, 4, 8, 3, 5, 6, 7];
var result = sortByBits(arr);
console.log(result, result.join() === expected.join());

var arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
var expected = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
var result = sortByBits(arr);
console.log(result, result.join() === expected.join());
