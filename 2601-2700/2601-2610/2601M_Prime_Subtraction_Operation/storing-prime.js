// 2601. Prime Subtraction Operation
// https://leetcode.com/problems/prime-subtraction-operation/
// T.C.: O(n+m*sqrt(m))
// S.C.: O(m)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
  const maxElement = Math.max(...nums);
  const previousPrime = new Array(maxElement + 1).fill(0);
  for (let i = 2; i <= maxElement; i++) {
    if (isPrime(i)) {
      previousPrime[i] = i;
    } else {
      previousPrime[i] = previousPrime[i - 1];
    }
  }

  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const num = i === 0 ? nums[i] : nums[i] - nums[i - 1];
    if (num <= 0) return false;

    const largestPrime = previousPrime[num - 1];
    nums[i] -= largestPrime;
  }
  return true;

  function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
};

var nums = [5, 8, 3];
var expected = false;
var result = primeSubOperation(nums);
console.log(result, result === expected);

var nums = [2, 2];
var expected = false;
var result = primeSubOperation(nums);
console.log(result, result === expected);

var nums = [8, 4, 8, 7];
var expected = true;
var result = primeSubOperation(nums);
console.log(result, result === expected);

var nums = [998, 2];
var expected = true;
var result = primeSubOperation(nums);
console.log(result, result === expected);

var nums = [15, 20, 17, 7, 16];
var expected = true;
var result = primeSubOperation(nums);
console.log(result, result === expected);

var nums = [4, 9, 6, 10];
var expected = true;
var result = primeSubOperation(nums);
console.log(result, result === expected);

var nums = [6, 8, 11, 12];
var expected = true;
var result = primeSubOperation(nums);
console.log(result, result === expected);
