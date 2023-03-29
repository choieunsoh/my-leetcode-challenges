// composeRanges
// LC-228. Summary Ranges
// https://leetcode.com/problems/summary-ranges/
/**
 * @param {number[]} nums
 * @return {number}
 */
function composeRanges(nums) {
  if (nums.length === 0) return [];
  nums.push(Number.MAX_SAFE_INTEGER);
  let start = 0;
  const result = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      console.log([start, i - 1], [nums[start], nums[i - 1]]);
      const a = nums[start];
      const b = nums[i - 1];
      if (a === b) {
        result.push(`${a}`);
      } else {
        result.push(`${a}->${b}`);
      }
      start = i;
    }
  }
  return result;
}

var nums = [-1, 0, 1, 2, 6, 7, 9];
var expected = ['-1->2', '6->7', '9'];
var result = composeRanges(nums);
console.log(result, result.join() === expected.join());
