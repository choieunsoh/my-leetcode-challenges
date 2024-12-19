// 769. Max Chunks To Make Sorted
// https://leetcode.com/problems/max-chunks-to-make-sorted/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const n = arr.length;
  let chunks = 0;
  let prefixSum = 0;
  let sortedPrefixSum = 0;

  // Iterate over the array
  for (let i = 0; i < n; i++) {
    // Update prefix sum of `arr`
    prefixSum += arr[i];
    // Update prefix sum of the sorted array
    sortedPrefixSum += i;

    // If the two sums are equal, the two prefixes contain the same elements; a chunk can be formed
    if (prefixSum == sortedPrefixSum) {
      chunks++;
    }
  }
  return chunks;
};

var arr = [4, 3, 2, 1, 0];
var expected = 1;
var result = maxChunksToSorted(arr);
console.log(result, result === expected);

var arr = [1, 0, 2, 3, 4];
var expected = 4;
var result = maxChunksToSorted(arr);
console.log(result, result === expected);
