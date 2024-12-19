// 769. Max Chunks To Make Sorted
// https://leetcode.com/problems/max-chunks-to-make-sorted/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const n = arr.length;
  const prefixMax = [...arr];
  const suffixMin = [...arr];

  // Fill the prefixMax array
  for (let i = 1; i < n; i++) {
    prefixMax[i] = Math.max(prefixMax[i - 1], prefixMax[i]);
  }

  // Fill the suffixMin array in reverse order
  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(suffixMin[i + 1], suffixMin[i]);
  }

  let chunks = 0;
  for (let i = 0; i < n; i++) {
    // A new chunk can be created
    if (i === 0 || suffixMin[i] > prefixMax[i - 1]) {
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
