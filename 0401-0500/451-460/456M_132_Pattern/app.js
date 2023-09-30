// 456. 132 Pattern
// https://leetcode.com/problems/132-pattern/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  const n = nums.length;
  if (n < 3) return false;

  const min_i = new Array(n);
  min_i[0] = nums[0];
  for (let i = 1; i < n; i++) {
    min_i[i] = Math.min(min_i[i - 1], nums[i]);
  }

  // num_i, num_j, num_k
  // 132 = num_i < num_k < num_j
  const stack_k = [];
  for (let j = n - 1; j >= 0; j--) {
    const num_i = min_i[j];
    const num_j = nums[j];

    if (num_j <= num_i) continue;

    while (stack_k.length && num_k() <= num_i) {
      stack_k.pop();
    }

    if (stack_k.length && num_k() < num_j) {
      return true;
    }
    stack_k.push(num_j);
  }
  return false;

  function num_k() {
    return stack_k[stack_k.length - 1];
  }
};

var nums = [1, 2, 3, 4];
var expected = false;
var result = find132pattern(nums);
console.log(result, result === expected);

var nums = [3, 1, 4, 2];
var expected = true;
var result = find132pattern(nums);
console.log(result, result === expected);

var nums = [-1, 3, 2, 0];
var expected = true;
var result = find132pattern(nums);
console.log(result, result === expected);

var nums = [2, 3, 1, 2];
var expected = false;
var result = find132pattern(nums);
console.log(result, result === expected);

var nums = [6, 12, 3, 4, 6, 11, 20];
var expected = true;
var result = find132pattern(nums);
console.log(result, result === expected);
