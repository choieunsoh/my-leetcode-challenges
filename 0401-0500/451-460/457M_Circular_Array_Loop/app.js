// 457. Circular Array Loop
// https://leetcode.com/problems/circular-array-loop/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  const n = nums.length;
  const visited = new Array(n);
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    let curr = i;
    const seen = new Set();
    while (true) {
      const next = (n + ((curr + nums[curr]) % n)) % n;
      if (next === curr || nums[next] * nums[curr] < 0) break;
      if (seen.has(curr)) return true;
      seen.add(curr);
      curr = next;
      visited[next] = true;
    }
  }
  return false;
};

var nums = [2, -1, 1, 2, 2];
var expected = true;
var result = circularArrayLoop(nums);
console.log(result, result === expected);

var nums = [-1, -2, -3, -4, -5, 6];
var expected = false;
var result = circularArrayLoop(nums);
console.log(result, result === expected);

var nums = [1, -1, 5, 1, 4];
var expected = true;
var result = circularArrayLoop(nums);
console.log(result, result === expected);

var nums = [-2, -3, -9];
var expected = false;
var result = circularArrayLoop(nums);
console.log(result, result === expected);
