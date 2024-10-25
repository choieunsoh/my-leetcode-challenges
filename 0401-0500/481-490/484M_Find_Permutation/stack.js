// 484. Find Permutation
// https://leetcode.com/problems/find-permutation/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function (s) {
  const n = s.length;
  const nums = new Array(n + 1);
  const stack = [];
  let index = 0;
  for (let num = 1; num <= n; num++) {
    if (s.charAt(num - 1) === 'I') {
      stack.push(num);
      while (stack.length) {
        nums[index++] = stack.pop();
      }
    } else {
      stack.push(num);
    }
  }

  stack.push(n + 1);
  while (stack.length) {
    nums[index++] = stack.pop();
  }
  return nums;
};

var s = 'I';
var expected = [1, 2];
var result = findPermutation(s);
console.log(result, result.join() === expected.join());

var s = 'DI';
var expected = [2, 1, 3];
var result = findPermutation(s);
console.log(result, result.join() === expected.join());

var s = 'DDIIIID';
var expected = [3, 2, 1, 4, 5, 6, 8, 7];
var result = findPermutation(s);
console.log(result, result.join() === expected.join());

var s = 'DDIIIIDI';
var expected = [3, 2, 1, 4, 5, 6, 8, 7, 9];
var result = findPermutation(s);
console.log(result, result.join() === expected.join());
