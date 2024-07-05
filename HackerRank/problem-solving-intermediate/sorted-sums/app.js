// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
function sortedSum(nums) {
  let sum = 0;
  const MOD = 1e9 + 7;
  const n = nums.length;
  const sorted = [];
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    sorted.push(num);
    sorted.sort((a, b) => a - b);
    const localSum = sorted.reduce((sum, num, index) => sum + num * (index + 1), 0) % MOD;
    sum = (sum + localSum) % MOD;
  }
  return sum;
}

var nums = [4, 3, 2, 1];
var expected = 65;
// 4
// 3 4
// 2 3 4
// 1 2 3 4
var result = sortedSum(nums);
console.log(result, result === expected);

var nums = [9, 5, 8];
var expected = 80;
// 9
// 5 9
// 5 8 9
var result = sortedSum(nums);
console.log(result, result === expected);

var nums = [5, 9];
var expected = 28;
// 5
// 5 9
var result = sortedSum(nums);
console.log(result, result === expected);
