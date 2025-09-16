// 2197. Replace Non-Coprime Numbers in Array
// https://leetcode.com/problems/replace-non-coprime-numbers-in-array/description/
// T.C.: O(n log M)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function (nums) {
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    while (stack.length > 0 && gcd(stack[stack.length - 1], num) > 1) {
      const prev = stack.pop();
      num = lcm(num, prev);
    }
    stack.push(num);
  }
  return stack;

  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
};

var nums = [6, 4, 3, 2, 7, 6, 2];
var expected = [12, 7, 6];
var result = replaceNonCoprimes(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 2, 1, 1, 3, 3, 3];
var expected = [2, 1, 1, 3];
var result = replaceNonCoprimes(nums);
console.log(result, result.join() === expected.join());
