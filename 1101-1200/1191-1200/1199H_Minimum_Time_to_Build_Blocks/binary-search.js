// 1199. Minimum Time to Build Blocks
// https://leetcode.com/problems/minimum-time-to-build-blocks/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} blocks
 * @param {number} split
 * @return {number}
 */
var minBuildTime = function (blocks, split) {
  blocks = blocks.slice();
  blocks.sort((a, b) => b - a);

  const possible = function (limit) {
    let worker = 1;

    for (let i = 0; i < blocks.length; i++) {
      const time = blocks[i];

      if (worker <= 0 || time > limit) {
        return false;
      }

      while (time + split <= limit) {
        limit -= split;
        worker <<= 1;

        if (worker >= blocks.length - i) {
          return true;
        }
      }

      worker -= 1;
    }

    return true;
  };

  let left = blocks[0];
  let right = split * Math.ceil(Math.log(blocks.length) / Math.log(2)) + blocks[0];

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (possible(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return right;
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
