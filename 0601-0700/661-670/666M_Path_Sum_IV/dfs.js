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
  const root = (nums[0] / 10) | 0;
  return dfs(root, 0);

  function dfs(root, preSum) {
    // Find the level and position values from the coordinates
    const level = (root / 10) | 0;
    const position = root % 10;

    //the left child and right child position in the tree
    const childLevel = level + 1;
    const left = childLevel * 10 + position * 2 - 1;
    const right = left + 1;
    const currSum = preSum + map.get(root);

    // If the node is a leaf node, return its root to leaf path sum.
    if (!map.has(left) && !map.has(right)) {
      return currSum;
    }

    // Otherwise iterate through the left and right children recursively
    // using depth first search
    const leftSum = map.has(left) ? dfs(left, currSum) : 0;
    const rightSum = map.has(right) ? dfs(right, currSum) : 0;

    // return the total path sum of the tree rooted at the current node
    return leftSum + rightSum;
  }
};

var nums = [113, 215, 221];
var expected = 12;
var result = pathSum(nums);
console.log(result, result === expected);

var nums = [113, 221];
var expected = 4;
var result = pathSum(nums);
console.log(result, result === expected);
