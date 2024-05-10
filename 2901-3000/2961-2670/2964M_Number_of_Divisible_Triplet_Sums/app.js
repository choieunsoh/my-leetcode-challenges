// 2964. Number of Divisible Triplet Sums
// https://leetcode.com/problems/number-of-divisible-triplet-sums/description/
// T.C.: O(n ^ 2)
// S.C.: O(d)
/**
 * @param {number[]} nums
 * @param {number} d
 * @return {number}
 */
var divisibleTripletCount = function (nums, d) {
  let result = 0;
  const n = nums.length;
  const counts = new Map();
  for (let i = 0; i < n; i++) {
    const num1 = nums[i];
    for (let j = i + 1; j < n && counts.size > 0; j++) {
      const num2 = nums[j];
      const sumMod = (num1 + num2) % d;
      const num3 = (d - sumMod) % d;
      if (counts.has(num3)) {
        result += counts.get(num3);
      }
    }
    const num1mod = num1 % d;
    counts.set(num1mod, (counts.get(num1mod) ?? 0) + 1);
  }
  return result;
};

var nums = [3, 3, 4, 7, 8],
  d = 5;
var expected = 3;
var result = divisibleTripletCount(nums, d);
console.log(result, result === expected);

var nums = [3, 3, 3, 3],
  d = 3;
var expected = 4;
var result = divisibleTripletCount(nums, d);
console.log(result, result === expected);

var nums = [3, 3, 3, 3],
  d = 6;
var expected = 0;
var result = divisibleTripletCount(nums, d);
console.log(result, result === expected);

var nums = [13, 63, 80],
  d = 6;
var expected = 1;
var result = divisibleTripletCount(nums, d);
console.log(result, result === expected);
