// 3740. Minimum Distance Between Three Equal Elements I
// https://leetcode.com/problems/minimum-distance-between-three-equal-elements-i/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
  let distance = Infinity;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], []);
    }
    map.get(nums[i]).push(i);
  }

  for (const indices of map.values()) {
    if (indices.length < 3) continue;
    for (let i = 0; i < indices.length - 2; i++) {
      const dist = indices[i + 2] - indices[i];
      distance = Math.min(distance, dist);
    }
  }

  return distance === Infinity ? -1 : distance * 2;
};

var nums = [1, 2, 1, 1, 3];
var expected = 6;
var result = minimumDistance(nums);
console.log(result, result === expected);

var nums = [1, 1, 2, 3, 2, 1, 2];
var expected = 8;
var result = minimumDistance(nums);
console.log(result, result === expected);

var nums = [1];
var expected = -1;
var result = minimumDistance(nums);
console.log(result, result === expected);
