// https://leetcode.com/problems/set-mismatch/
// 645. Set Mismatch
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }

  let [duplicate, missing] = [-1, -1];
  for (let i = 1; i <= nums.length; i++) {
    const count = map.get(i);
    if (count === 1) continue;
    if (count > 1) duplicate = i;
    else missing = i;
  }
  return [duplicate, missing];
};

var nums = [1, 2, 2, 4];
var expected = [2, 3];
var result = findErrorNums(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 1];
var expected = [1, 2];
var result = findErrorNums(nums);
console.log(result, result.join() === expected.join());
