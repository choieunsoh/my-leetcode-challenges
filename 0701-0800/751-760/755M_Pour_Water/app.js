// 755. Pour Water
// https://leetcode.com/problems/pour-water/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[]} heights
 * @param {number} volume
 * @param {number} k
 * @return {number[]}
 */
var pourWater = function (heights, volume, k) {
  while (volume-- > 0)
    droplet: {
      for (const d of [-1, 1]) {
        let i = k;
        let best = k;
        while (i + d >= 0 && i + d < heights.length && heights[i + d] <= heights[i]) {
          if (heights[i + d] < heights[i]) {
            best = i + d;
          }
          i += d;
        }
        if (heights[best] < heights[k]) {
          heights[best]++;
          break droplet;
        }
      }
      heights[k]++;
    }
  return heights;
};

var heights = [2, 1, 1, 2, 1, 2, 2],
  volume = 4,
  k = 3;
var expected = [2, 2, 2, 3, 2, 2, 2];
var result = pourWater(heights, volume, k);
console.log(result, result.join() === expected.join());

var heights = [1, 2, 3, 4],
  volume = 2,
  k = 2;
var expected = [2, 3, 3, 4];
var result = pourWater(heights, volume, k);
console.log(result, result.join() === expected.join());

var heights = [3, 1, 3],
  volume = 5,
  k = 1;
var expected = [4, 4, 4];
var result = pourWater(heights, volume, k);
console.log(result, result.join() === expected.join());
