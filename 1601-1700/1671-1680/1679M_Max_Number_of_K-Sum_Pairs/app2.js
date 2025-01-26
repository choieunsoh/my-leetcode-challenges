// 1679. Max Number of K-Sum Pairs
// https://leetcode.com/problems/max-number-of-k-sum-pairs
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const map = new Map();
  let count = 0;

  // Build the hashmap with count of occurrence of every element in array
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (const num of nums) {
    const current = num;
    const complement = k - num;

    if ((map.get(current) ?? 0) > 0 && (map.get(complement) ?? 0) > 0) {
      if (current === complement && map.get(current) < 2) continue;

      map.set(current, map.get(current) - 1);
      map.set(complement, map.get(complement) - 1);
      count++;
    }
  }

  return count;
};

var nums = [1, 2, 3, 4],
  k = 5;
var expected = 2;
var result = maxOperations(nums, k);
console.log(result, result === expected);

var nums = [3, 1, 3, 4, 3],
  k = 6;
var expected = 1;
var result = maxOperations(nums, k);
console.log(result, result === expected);

var nums = [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2],
  k = 3;
var expected = 4;
var result = maxOperations(nums, k);
console.log(result, result === expected);
