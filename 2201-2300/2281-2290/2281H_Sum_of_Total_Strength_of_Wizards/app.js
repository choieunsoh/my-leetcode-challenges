// 2281. Sum of Total Strength of Wizards
// https://leetcode.com/problems/sum-of-total-strength-of-wizards/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} strength
 * @return {number}
 */
var totalStrength = function (strength) {
  const ll = BigInt;
  let result = ll(0);
  let sumStrength = ll(0);
  const MOD = ll(1e9 + 7);
  const n = strength.length;
  const stack = [];
  const prefixSum = new Array(n + 2).fill(ll(0));
  for (let right = 0; right <= n; ++right) {
    const currStrength = strength[right] ?? 0;
    sumStrength = (sumStrength + ll(currStrength)) % MOD;
    prefixSum[right + 1] = (sumStrength + prefixSum[right]) % MOD;

    while (stack.length > 0 && strength[stack[stack.length - 1]] > currStrength) {
      const mid = stack.pop();
      const left = stack.length === 0 ? -1 : stack[stack.length - 1];
      const leftSum = ll(left < 0 ? prefixSum[mid] : prefixSum[mid] - prefixSum[left]);
      const rightSum = ll(prefixSum[right] - prefixSum[mid]);
      const leftCount = ll(mid - left);
      const rightCount = ll(right - mid);
      result = (result + ((((rightSum * leftCount - leftSum * rightCount) % MOD) * ll(strength[mid])) % MOD)) % MOD;
    }
    stack.push(right);
  }
  return Number((result + MOD) % MOD);
};

var strength = [1, 3, 1, 2];
var expected = 44;
var result = totalStrength(strength);
console.log(result, result === expected);

var strength = [5, 4, 6];
var expected = 213;
var result = totalStrength(strength);
console.log(result, result === expected);
