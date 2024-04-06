// 666. Path Sum IV
// https://leetcode.com/problems/path-sum-iv/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function (nums) {
  let result = 0;
  const map = Array.from({ length: 5 }, () => new Map());
  for (const num of nums) {
    const [level, position, value] = String(num).split('').map(Number);
    const parentLevel = level - 1;
    const parentPosition = Math.ceil(position / 2);
    const parentValue = map[parentLevel].get(parentPosition) ?? 0;
    map[level].set(position, value + parentValue);
    result += value;

    if (position % 2 === 0 && map[level].has(position - 1)) {
      const parentPosition = position / 2;
      const parentValue = map[parentLevel].get(parentPosition) ?? 0;
      result += parentValue;
    }
  }
  return result;
};

var nums = [113, 215, 221];
var expected = 12;
var result = pathSum(nums);
console.log(result, result === expected);

var nums = [113, 221];
var expected = 4;
var result = pathSum(nums);
console.log(result, result === expected);
