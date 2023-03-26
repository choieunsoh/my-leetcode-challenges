function createPrimeNumbers() {
  const limit = 100000;
  const prime = Array(limit + 1).fill(true);
  for (let p = 2; p * p <= limit; p++) {
    if (prime[p] == true) {
      for (i = p * p; i <= limit; i += p) {
        prime[i] = false;
      }
    }
  }
  return prime;
}
var prime = createPrimeNumbers();

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
  const n = nums.length;
  const prime = createPrimeNumbers();
  console.log(nums);
  for (let i = n - 1; i > 0; i--) {
    const num = nums[i];
    const prevNum = nums[i - 1];
    if (prevNum < num) continue;

    for (let j = 2; j < Math.max(prevNum, num); j++) {
      if (!prime[j]) continue;
      if (prevNum - j < num) {
        nums[i - 1] -= j;
        break;
      }
    }
    console.log(nums);
  }
  console.log(nums);

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] >= nums[i + 1]) return false;
  }
  return true;
};

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

var nums = [5, 8, 3];
var expected = false;
var result = primeSubOperation(nums);
console.log(result, result === expected);

var nums = [2, 2];
var expected = false;
var result = primeSubOperation(nums);
console.log(result, result === expected);
