// 719. Find K-th Smallest Pair Distance
// https://leetcode.com/problems/find-k-th-smallest-pair-distance
// T.C.: O(n^2 + M)
// S.C.: O(M)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  const arrayLength = nums.length;

  // Find the maximum element in the array
  let maxElement = Number.MIN_VALUE;
  for (let num of nums) {
    maxElement = Math.max(maxElement, num);
  }

  // Initialize a bucket array to store counts of each distance
  const distanceBucket = new Array(maxElement + 1).fill(0);

  // Populate the bucket array with counts of each distance
  for (let i = 0; i < arrayLength; i++) {
    for (let j = i + 1; j < arrayLength; j++) {
      // Compute the distance between nums[i] and nums[j]
      const distance = Math.abs(nums[i] - nums[j]);

      // Increment the count for this distance in the bucket
      distanceBucket[distance]++;
    }
  }

  // Find the k-th smallest distance
  for (let dist = 0; dist <= maxElement; dist++) {
    // Reduce k by the number of pairs with the current distance
    k -= distanceBucket[dist];

    // If k is less than or equal to 0, return the current distance
    if (k <= 0) {
      return dist;
    }
  }

  return -1; // Return -1 if no distance found, should not reach here
};

var nums = [1, 3, 1],
  k = 1;
var expected = 0;
var result = smallestDistancePair(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 1],
  k = 2;
var expected = 0;
var result = smallestDistancePair(nums, k);
console.log(result, result === expected);

var nums = [1, 6, 1],
  k = 3;
var expected = 5;
var result = smallestDistancePair(nums, k);
console.log(result, result === expected);
