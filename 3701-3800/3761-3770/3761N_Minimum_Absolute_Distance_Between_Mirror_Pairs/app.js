// 3761. Minimum Absolute Distance Between Mirror Pairs
// https://leetcode.com/problems/minimum-absolute-distance-between-mirror-pairs/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function (nums) {
  let result = nums.length;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const mirror = toMirror(nums[i]);
    if (map.has(nums[i])) {
      console.log(i, nums[i], mirror, map.get(nums[i]), i - map.get(nums[i]));
      result = Math.min(result, i - map.get(nums[i]));
    }
    map.set(mirror, i);
  }
  return result === nums.length ? -1 : result;

  function toMirror(num) {
    let mirror = 0;
    while (num > 0) {
      mirror = mirror * 10 + (num % 10);
      num = (num / 10) | 0;
    }
    return mirror;
  }
};

var nums = [12, 21, 45, 33, 54];
var expected = 1;
var result = minMirrorPairDistance(nums);
console.log(result, result === expected);

var nums = [120, 21];
var expected = 1;
var result = minMirrorPairDistance(nums);
console.log(result, result === expected);

var nums = [21, 120];
var expected = -1;
var result = minMirrorPairDistance(nums);
console.log(result, result === expected);

var nums = [12, 34, 46, 21, 12];
var expected = 1;
var result = minMirrorPairDistance(nums);
console.log(result, result === expected);
