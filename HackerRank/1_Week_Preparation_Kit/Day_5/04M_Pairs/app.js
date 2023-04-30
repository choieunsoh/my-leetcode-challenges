// Pairs
// https://www.hackerrank.com/challenges/pairs/problem
function pairs(k, arr) {
  // Write your code here
  let count = 0;
  const nums = new Set(arr);
  for (const num of nums) {
    if (nums.has(num + k)) count++;
  }
  return count;
}

var k = 2,
  arr = [1, 5, 3, 4, 2];
var expected = 3;
var result = pairs(k, arr);
console.log(result, result === expected);
