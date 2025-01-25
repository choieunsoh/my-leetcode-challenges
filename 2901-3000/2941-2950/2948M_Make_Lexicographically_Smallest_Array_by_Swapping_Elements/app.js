// 2948. Make Lexicographically Smallest Array by Swapping Elements
// https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  // Step 1: Pair each number with its index and sort by number
  const sorted = nums.map((num, index) => [num, index]).sort((a, b) => a[0] - b[0]);

  // Step 2: Assign group IDs based on the limit
  let groupId = 0;
  let prev = -Infinity;
  const grouped = sorted.map(([num, i]) => {
    if (prev + limit < num) {
      groupId++;
    }
    prev = num;
    return [groupId, i];
  });

  // Step 3: Sort by group ID and then by original index
  grouped.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  // Step 4: Reconstruct the array based on the sorted groups
  return grouped
    .map(([, i], j) => [sorted[j][0], i])
    .sort((a, b) => a[1] - b[1])
    .map(([num]) => num);
};

var nums = [1, 5, 3, 9, 8],
  limit = 2;
var expected = [1, 3, 5, 8, 9];
var result = lexicographicallySmallestArray(nums, limit);
console.log(result, result.join() === expected.join());

var nums = [1, 7, 6, 18, 2, 1],
  limit = 3;
var expected = [1, 6, 7, 18, 1, 2];
var result = lexicographicallySmallestArray(nums, limit);
console.log(result, result.join() === expected.join());

var nums = [1, 7, 28, 19, 10],
  limit = 3;
var expected = [1, 7, 28, 19, 10];
var result = lexicographicallySmallestArray(nums, limit);
console.log(result, result.join() === expected.join());
