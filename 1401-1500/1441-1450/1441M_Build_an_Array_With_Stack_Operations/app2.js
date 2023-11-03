// 1441. Build an Array With Stack Operations
// https://leetcode.com/problems/build-an-array-with-stack-operations/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let targetIndex = 0;
  const result = [];
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  for (let numIndex = 0; numIndex < nums.length; numIndex++) {
    if (nums[numIndex] === target[targetIndex]) {
      result.push('Push');
      targetIndex++;
    } else if (nums[numIndex] < target[targetIndex]) {
      result.push('Push', 'Pop');
    }
  }
  return result;
};

var target = [1, 3],
  n = 3;
var expected = ['Push', 'Push', 'Pop', 'Push'];
var result = buildArray(target, n);
console.log(result, result.join() === expected.join());

var target = [1, 2, 3],
  n = 3;
var expected = ['Push', 'Push', 'Push'];
var result = buildArray(target, n);
console.log(result, result.join() === expected.join());

var target = [1, 2],
  n = 4;
var expected = ['Push', 'Push'];
var result = buildArray(target, n);
console.log(result, result.join() === expected.join());
