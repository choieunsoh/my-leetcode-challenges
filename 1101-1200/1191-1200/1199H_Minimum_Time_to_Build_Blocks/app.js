// 1199. Minimum Time to Build Blocks
// https://leetcode.com/problems/minimum-time-to-build-blocks/
/**
 * @param {number[]} blocks
 * @param {number} split
 * @return {number}
 */
var minBuildTime = function (blocks, split) {
  const n = blocks.length;
  blocks.sort((a, b) => b - a);
  let result = 0;
  let left = blocks[0];
  let right = left + split * Math.ceil(Math.log2(n));
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (canBuild(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;

  function canBuild(limit) {
    let worker = 1;
    for (const time of blocks) {
      if (worker <= 0 || time > limit) return false;
      while (time + split <= limit) {
        limit -= split;
        worker <<= 1;
        if (worker >= n - 1) return true;
      }
      worker--;
    }
    return true;
  }
};

var blocks = [1],
  split = 1;
var expected = 1;
var result = minBuildTime(blocks, split);
console.log(result, result === expected);

var blocks = [1, 2],
  split = 5;
var expected = 7;
var result = minBuildTime(blocks, split);
console.log(result, result === expected);

var blocks = [1, 2, 3],
  split = 1;
var expected = 4;
var result = minBuildTime(blocks, split);
console.log(result, result === expected);
