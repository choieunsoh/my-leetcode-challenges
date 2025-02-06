// 1726. Tuple with Same Product
// https://leetcode.com/problems/tuple-with-same-product/description/
// T.C.: O(n^3)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  const numsLength = nums.length;
  nums.sort((a, b) => a - b);

  let totalNumberOfTuples = 0;

  // Iterate over all possible values for 'a'
  for (let aIndex = 0; aIndex < numsLength; aIndex++) {
    // Iterate over all possible values for 'b', starting from the end
    // of the array
    for (let bIndex = numsLength - 1; bIndex >= aIndex + 1; bIndex--) {
      const product = nums[aIndex] * nums[bIndex];

      // Use a set to store possible values of 'd'
      const possibleDValues = new Set();

      // Iterate over all possible values for 'c' between 'a' and 'b'
      for (let cIndex = aIndex + 1; cIndex < bIndex; cIndex++) {
        // Check if the product is divisible by nums[cIndex]
        if (product % nums[cIndex] === 0) {
          const dValue = product / nums[cIndex];

          // If 'dValue' is in the set, increment the tuple count by 8
          if (possibleDValues.has(dValue)) {
            totalNumberOfTuples += 8;
          }

          // Add nums[cIndex] to the set for future checks
          possibleDValues.add(nums[cIndex]);
        }
      }
    }
  }

  return totalNumberOfTuples;
};

var nums = [2, 3, 4, 6];
var expected = 8;
var result = tupleSameProduct(nums);
console.log(result, result === expected);

var nums = [1, 2, 4, 5, 10];
var expected = 16;
var result = tupleSameProduct(nums);
console.log(result, result === expected);

var nums = [2, 3, 4, 6, 1, 12];
var expected = 40;
var result = tupleSameProduct(nums);
console.log(result, result === expected);
