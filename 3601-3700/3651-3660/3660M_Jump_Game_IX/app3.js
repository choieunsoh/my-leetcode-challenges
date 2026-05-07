// 3660. Jump Game IX
// https://leetcode.com/problems/jump-game-ix/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function (nums) {
  const n = nums.length;
  const result = new Array(n);
  const stack = [];
  for (let i = 0; i < n; i++) {
    let curr = {
      value: nums[i],
      left: i,
      right: i,
    };

    while (stack.length > 0 && stack.at(-1).value > nums[i]) {
      const top = stack.pop();
      curr = {
        value: Math.max(curr.value, top.value),
        left: top.left,
        right: curr.right,
      };
    }

    stack.push(curr);
  }

  for (let i = 0; i < stack.length; i++) {
    for (let j = stack[i].left; j <= stack[i].right; j++) {
      result[j] = stack[i].value;
    }
  }

  return result;
};

var nums = [2, 1, 3];
var expected = [2, 2, 3];
var result = maxValue(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 3, 1];
var expected = [3, 3, 3];
var result = maxValue(nums);
console.log(result, result.join() === expected.join());
