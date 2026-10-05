// 3852. Smallest Pair With Different Frequencies
// https://leetcode.com/problems/smallest-pair-with-different-frequencies/description/
// T.C.: O()
// S.C.: O()
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minDistinctFreqPair = function (nums) {
  const count = new Array(101).fill(0);
  for (const num of nums) {
    count[num]++;
  }

  let minX = Infinity;
  for (let x = 1; x <= 100; x++) {
    if (count[x] === 0) continue;
    if (minX === Infinity) {
      minX = x;
      continue;
    }
    if (count[x] !== count[minX]) {
      return [minX, x];
    }
  }
  return [-1, -1];
};

var nums = [1, 1, 2, 2, 3, 4];
var expected = [1, 3];
var result = minDistinctFreqPair(nums);
console.log(result, result.toString() === expected.toString());

var nums = [1, 5];
var expected = [-1, -1];
var result = minDistinctFreqPair(nums);
console.log(result, result.toString() === expected.toString());

var nums = [7];
var expected = [-1, -1];
var result = minDistinctFreqPair(nums);
console.log(result, result.toString() === expected.toString());
