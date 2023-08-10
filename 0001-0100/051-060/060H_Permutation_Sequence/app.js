// 60. Permutation Sequence
// https://leetcode.com/problems/permutation-sequence/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let result = '';
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  const factorials = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    factorials[i] = factorials[i - 1] * i;
  }

  k--;
  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(k / factorials[i]);
    result += nums[index].toString();
    nums.splice(index, 1);
    k %= factorials[i];
  }
  return result;
};

var n = 3,
  k = 3;
var expected = '213';
var result = getPermutation(n, k);
console.log(result, result === expected);

var n = 4,
  k = 9;
var expected = '2314';
var result = getPermutation(n, k);
console.log(result, result === expected);

var n = 3,
  k = 1;
var expected = '123';
var result = getPermutation(n, k);
console.log(result, result === expected);
