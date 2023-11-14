// 2379. Minimum Recolors to Get K Consecutive Black Blocks
// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  const n = blocks.length;
  const sub = blocks.slice(0, k);
  let flipCount = [...sub].filter((c) => c === 'W').length;
  let result = flipCount;
  let left = 0;
  for (let right = k; right < n; right++) {
    if (blocks[left++] === 'W') flipCount--;
    if (blocks[right] === 'W') flipCount++;
    result = Math.min(result, flipCount);
  }
  return result;
};

var blocks = 'WBBWWBBWBW',
  k = 7;
var expected = 3;
var result = minimumRecolors(blocks, k);
console.log(result, result === expected);

var blocks = 'WBWBBBW',
  k = 2;
var expected = 0;
var result = minimumRecolors(blocks, k);
console.log(result, result === expected);

var blocks = 'WWBBBWBBBBBWWBWWWB',
  k = 16;
var expected = 6;
var result = minimumRecolors(blocks, k);
console.log(result, result === expected);
