// 484. Find Permutation
// https://leetcode.com/problems/find-permutation/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function (s) {
  const n = s.length;
  const nums = new Array(n + 1);
  let i = 1;
  while (i <= n) {
    nums[i] = i + 1;
    let j = i;
    if (s.charAt(i - 1) === 'D') {
      while (i <= n && s.charAt(i - 1) === 'D') i++;
      for (let k = j - 1, c = i; k <= i - 1; k++, c--) {
        nums[k] = c;
      }
    } else {
      i++;
    }
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
