// 907. Sum of Subarray Minimums
// https://leetcode.com/problems/sum-of-subarray-minimums/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const MOD = 1e9 + 7;
  const n = arr.length;
  const stack = [];
  let result = 0;
  for (let i = 0; i <= n; i++) {
    while (stack.length && (i === n || arr[stack[stack.length - 1]] >= arr[i])) {
      const mid = stack.pop();
      const leftBoundary = stack.length ? stack[stack.length - 1] : -1;
      const rightBoundary = i;

      const count = ((mid - leftBoundary) * (rightBoundary - mid)) % MOD;
      result += (count * arr[mid]) % MOD;
      result %= MOD;
    }
    stack.push(i);
  }
  return result;
};

var arr = [3, 1, 2, 4];
var expected = 17;
var result = sumSubarrayMins(arr);
console.log(result, result === expected);

var arr = [11, 81, 94, 43, 3];
var expected = 444;
var result = sumSubarrayMins(arr);
console.log(result, result === expected);
