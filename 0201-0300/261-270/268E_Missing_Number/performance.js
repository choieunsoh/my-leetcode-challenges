// https://leetcode.com/problems/missing-number/
// 268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber_BrutForce1 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.filter((num) => num === i).length === 0) return i;
  }
  return nums.length;
};
var missingNumber_BrutForce2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(i) === -1) return i;
  }
  return nums.length;
};
var missingNumber_BrutForce3 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
  return nums.length;
};
var missingNumber_Sorting = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums.length;
};
var missingNumber_Math = function (nums) {
  let sum = (nums.length * (nums.length + 1)) / 2;
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
  }
  return sum;
};
var missingNumber_Set1 = function (nums) {
  const numbers = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    if (!numbers.has(i)) return i;
  }
  return nums.length;
};
var missingNumber_Set2 = function (nums) {
  const numbers = new Set();
  for (let i = 0; i < nums.length; i++) {
    numbers.add(nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (!numbers.has(i)) return i;
  }
  return nums.length;
};
var missingNumber_Map1 = function (nums) {
  const numbers = new Map();
  for (let i = 0; i < nums.length; i++) {
    numbers.set(nums[i], true);
  }
  for (let i = 0; i < nums.length; i++) {
    if (!numbers.has(i)) return i;
  }
  return nums.length;
};
var missingNumber_Map2 = function (nums) {
  const numbers = {};
  for (let i = 0; i < nums.length; i++) {
    numbers[nums[i]] = true;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!numbers[i]) return i;
  }
  return nums.length;
};

var approach = 'Bootstrap';
console.time(approach);
var max = 10000;
var nums = Array.from(Array(max), (_, i) => i + 1);
nums.pop();
nums.pop();
nums.pop();
nums.push(max - 1, 0);
var expected = max - 2;
missingNumber_Set1(nums);
console.timeEnd(approach);

console.log();
console.time('new Set(nums)');
console.log({ result: missingNumber_Set1(nums), expected });
console.timeEnd('new Set(nums)');

console.log();
console.time('new Set()');
console.log({ result: missingNumber_Set2(nums), expected });
console.timeEnd('new Set()');

console.log();
console.time('new Map()');
console.log({ result: missingNumber_Map1(nums), expected });
console.timeEnd('new Map()');

console.log();
console.time('Map {}');
console.log({ result: missingNumber_Map2(nums), expected });
console.timeEnd('Map {}');

console.log();
console.time('Array.filter');
console.log({ result: missingNumber_BrutForce1(nums), expected });
console.timeEnd('Array.filter');

console.log();
console.time('Array.indexOf');
console.log({ result: missingNumber_BrutForce2(nums), expected });
console.timeEnd('Array.indexOf');

console.log();
console.time('Array.includes');
console.log({ result: missingNumber_BrutForce3(nums), expected });
console.timeEnd('Array.includes');

console.log();
console.time('Sorting');
console.log({ result: missingNumber_Sorting(nums), expected });
console.timeEnd('Sorting');

console.log();
console.time('Math');
console.log({ result: missingNumber_Math(nums), expected });
console.timeEnd('Math');
