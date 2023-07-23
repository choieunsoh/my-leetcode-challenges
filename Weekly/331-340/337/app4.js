/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function (nums, value) {
  const counter = Array(value).fill(0);
  for (const num of nums) {
    const x = ((num % value) + value) % value;
    counter[x]++;
  }
  const min = Math.min(...counter);
  for (let i = 0; i < counter.length; i++) {
    if (counter[i] === min) {
      return i + value * counter[i];
    }
  }
  return counter.length;
};

var nums = [1, -10, 7, 13, 6, 8],
  value = 5;
var expected = 4;
var result = findSmallestInteger(nums, value);
console.log(result, result === expected);

var nums = [1, -10, 7, 13, 6, 8],
  value = 7;
var expected = 2;
var result = findSmallestInteger(nums, value);
console.log(result, result === expected);

var nums = [3, 0, 3, 2, 4, 2, 1, 1, 0, 4],
  value = 5;
var expected = 10;
var result = findSmallestInteger(nums, value);
console.log(result, result === expected);
