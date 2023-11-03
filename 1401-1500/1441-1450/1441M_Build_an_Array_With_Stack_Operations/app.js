// 1441. Build an Array With Stack Operations
// https://leetcode.com/problems/build-an-array-with-stack-operations/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let num = 1;
  const result = [];
  for (let i = 0; i < target.length; i++) {
    while (num++ < target[i]) {
      result.push('Push', 'Pop');
    }
    result.push('Push');
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
