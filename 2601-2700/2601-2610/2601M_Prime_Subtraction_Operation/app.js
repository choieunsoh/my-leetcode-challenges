// 2601. Prime Subtraction Operation
// https://leetcode.com/problems/prime-subtraction-operation/
let isPrime = [];
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
  if (isPrime.length === 0) {
    createPrimeNumbers(1000);
  }

  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const primes = getPrimeNumbers(num);

    let j = 0;
    while (j < primes.length && nums[i] - primes[j] <= nums[i - 1]) {
      j++;
    }

    if (j < primes.length) {
      nums[i] -= primes[j];
    }
  }

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] >= nums[i + 1]) return false;
  }
  return true;

  function getPrimeNumbers(num) {
    const result = [];
    for (let i = num - 1; i > 1; i--) {
      if (isPrime[i]) result.push(i);
    }
    return result;
  }
  function createPrimeNumbers(n) {
    isPrime = Array(n + 1).fill(true);
    isPrime[1] = false;
    for (let i = 2; i * i < n; i++) {
      if (!isPrime[i]) continue;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
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
