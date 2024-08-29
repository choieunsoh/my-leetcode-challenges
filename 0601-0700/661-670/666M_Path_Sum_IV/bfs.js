// 666. Path Sum IV
// https://leetcode.com/problems/path-sum-iv/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function (nums) {
  const map = new Map();
  for (const num of nums) {
    const key = (num / 10) | 0;
    const value = num % 10;
    map.set(key, value);
  }

  let totalSum = 0;
  const root = (nums[0] / 10) | 0;
  let queue = [[root, map.get(root)]];
  while (queue.length) {
    const nextQueue = [];
    for (const [node, currSum] of queue) {
      const level = (node / 10) | 0;
      const position = node % 10;

      const childLevel = level + 1;
      const left = childLevel * 10 + position * 2 - 1;
      const right = left + 1;
      if (!map.has(left) && !map.get(right)) {
        totalSum += currSum;
      }

      if (map.has(left)) {
        nextQueue.push([left, currSum + map.get(left)]);
      }

      if (map.has(right)) {
        nextQueue.push([right, currSum + map.get(right)]);
      }
    }

    queue = nextQueue;
  }

  return totalSum;
};

var nums = [113, 215, 221];
var expected = 12;
var result = pathSum(nums);
console.log(result, result === expected);

var nums = [113, 221];
var expected = 4;
var result = pathSum(nums);
console.log(result, result === expected);
