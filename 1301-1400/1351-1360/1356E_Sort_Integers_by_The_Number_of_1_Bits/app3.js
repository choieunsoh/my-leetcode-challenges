// 1356. Sort Integers by The Number of 1 Bits
// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const findWeight = (num) => {
    let mask = 1;
    let weight = 0;

    while (num > 0) {
      if ((num & mask) > 0) {
        weight++;
        num ^= mask;
      }

      mask <<= 1;
    }

    return weight;
  };

  const comparator = (a, b) => {
    const weightA = findWeight(a);
    const weightB = findWeight(b);
    if (weightA === weightB) {
      return a - b;
    }
    return weightA - weightB;
  };

  return arr.slice().sort(comparator);
};

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var expected = [0, 1, 2, 4, 8, 3, 5, 6, 7];
var result = sortByBits(arr);
console.log(result, result.join() === expected.join());

var arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
var expected = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
var result = sortByBits(arr);
console.log(result, result.join() === expected.join());
