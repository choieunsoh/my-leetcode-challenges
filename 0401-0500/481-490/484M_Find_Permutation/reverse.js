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
  const nums = Array.from({ length: n + 1 }, (_, i) => i + 1);
  let i = 1;
  while (i <= n) {
    let j = i;
    while (i <= n && s.charAt(i - 1) === 'D') i++;
    reverse(nums, j - 1, i);
    i++;
  }
  return nums;

  function reverse(a, start, end) {
    for (let i = 0; i < (end - start) / 2; i++) {
      const x = i + start;
      const y = end - i - 1;
      [a[x], a[y]] = [a[y], a[x]];
    }
  }
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
