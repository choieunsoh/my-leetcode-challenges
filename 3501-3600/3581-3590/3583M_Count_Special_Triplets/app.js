// 3583. Count Special Triplets
// https://leetcode.com/problems/count-special-triplets/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function (nums) {
  const totalCounts = new Map();
  for (const num of nums) {
    totalCounts.set(num, (totalCounts.get(num) ?? 0) + 1);
  }

  let count = 0;
  const MOD = 1e9 + 7;
  const currentCounts = new Map();
  for (const num of nums) {
    const target = num * 2;
    const leftCount = currentCounts.get(target) ?? 0;
    currentCounts.set(num, (currentCounts.get(num) ?? 0) + 1);
    const rightCount = (totalCounts.get(target) ?? 0) - (currentCounts.get(target) ?? 0);
    count = (count + ((leftCount * rightCount) % MOD)) % MOD;
  }
  return count;
};

var nums = [6, 3, 6];
var expected = 1;
var result = specialTriplets(nums);
console.log(result, result === expected);

var nums = [0, 1, 0, 0];
var expected = 1;
var result = specialTriplets(nums);
console.log(result, result === expected);

var nums = [8, 4, 2, 8, 4];
var expected = 2;
var result = specialTriplets(nums);
console.log(result, result === expected);
