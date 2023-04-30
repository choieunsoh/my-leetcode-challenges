// Recursive Digit Sum
// https://www.hackerrank.com/challenges/recursive-digit-sum/problem
function superDigit(n, k) {
  // Write your code here
  let nums = sum(n, k);
  while (nums.length > 1) {
    nums = sum(nums);
  }
  return Number(nums);

  function sum(nums, k = 1) {
    return (nums.split('').reduce((s, x) => s + Number(x), 0) * k).toString();
  }
}

var n = '148',
  k = 3;
var expected = 3;
var result = superDigit(n, k);
console.log(result, result === expected);

var n = '9875',
  k = 4;
var expected = 8;
var result = superDigit(n, k);
console.log(result, result === expected);

var n = '123',
  k = 3;
var expected = 9;
var result = superDigit(n, k);
console.log(result, result === expected);
