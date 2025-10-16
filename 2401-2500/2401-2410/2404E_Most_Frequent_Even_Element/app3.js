// 2404. Most Frequent Even Element
// https://leetcode.com/problems/most-frequent-even-element/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let result = -1;
  let maxCount = 0;
  const counts = new Map();
  for (const num of nums) {
    if (num % 2 !== 0) continue;

    const count = (counts.get(num) ?? 0) + 1;
    counts.set(num, count);

    if (count > maxCount || (count === maxCount && num < result)) {
      maxCount = count;
      result = num;
    }
  }
  return result;
};

var nums = [0, 1, 2, 2, 4, 4, 1];
var expected = 2;
var result = mostFrequentEven(nums);
console.log(result, result === expected);

var nums = [4, 4, 4, 9, 2, 4];
var expected = 4;
var result = mostFrequentEven(nums);
console.log(result, result === expected);

var nums = [29, 47, 21, 41, 13, 37, 25, 7];
var expected = -1;
var result = mostFrequentEven(nums);
console.log(result, result === expected);
