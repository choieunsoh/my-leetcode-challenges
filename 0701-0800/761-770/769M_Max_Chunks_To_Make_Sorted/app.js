// 769. Max Chunks To Make Sorted
// https://leetcode.com/problems/max-chunks-to-make-sorted/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let chunks = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    if (max === i) {
      // All values in range [0, i] belong to the prefix arr[0:i]; a new chunk can be formed
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
