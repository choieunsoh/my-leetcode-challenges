// 3095. Shortest Subarray With OR at Least K I
// https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  let orVal = 0;
  let minLength = Number.MAX_SAFE_INTEGER;
  const bitCount = new Array(32).fill(0);
  const orValWrapper = [orVal];
  for (let left = 0, right = 0; right < nums.length; right++) {
    doBitWiseOrOperation(nums[right]);
    if (orValWrapper[0] < k) continue;

    while (left <= right && orValWrapper[0] >= k) {
      undoBitWiseOrOperation(nums[left]);
      minLength = Math.min(minLength, right - left + 1);
      left++;
    }
  }
  return minLength === Number.MAX_SAFE_INTEGER ? -1 : minLength;

  function doBitWiseOrOperation(num) {
    orValWrapper[0] = orValWrapper[0] | num;
    for (let i = 0; i < 32; i++) {
      bitCount[i] += (num & (1 << i)) !== 0 ? 1 : 0;
    }
  }

  function undoBitWiseOrOperation(num) {
    for (let i = 0; i < 32; i++) {
      bitCount[i] += (num & (1 << i)) !== 0 ? -1 : 0;
      if (bitCount[i] === 0) {
        orValWrapper[0] = orValWrapper[0] & ~(1 << i);
      }
    }
  }
};

var nums = [1, 2, 3],
  k = 2;
var expected = 1;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [2, 1, 8],
  k = 10;
var expected = 3;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [1, 2],
  k = 0;
var expected = 1;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [1, 12, 2, 5],
  k = 43;
var expected = -1;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [16, 1, 2, 20, 32],
  k = 45;
var expected = 2;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [2, 1, 8],
  k = 10;
var expected = 3;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);
