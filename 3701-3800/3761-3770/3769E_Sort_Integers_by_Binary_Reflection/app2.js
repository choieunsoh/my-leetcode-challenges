// 3769. Sort Integers by Binary Reflection
// https://leetcode.com/problems/sort-integers-by-binary-reflection/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function (nums) {
  return nums
    .map(reverseBinary)
    .sort((a, b) => a.ref - b.ref || a.val - b.val)
    .map((item) => item.val);

  function reverseBinary(val) {
    let ref = 0;
    let n = val;
    while (n > 0) {
      ref = (ref << 1) | (n & 1);
      n >>= 1;
    }
    return { val, ref };
  }
};

var nums = [4, 5, 4];
var expected = [4, 4, 5];
var result = sortByReflection(nums);
console.log(result, result.join() === expected.join());

var nums = [3, 6, 5, 8];
var expected = [8, 3, 6, 5];
var result = sortByReflection(nums);
console.log(result, result.join() === expected.join());

var nums = [8, 2];
var expected = [2, 8];
var result = sortByReflection(nums);
console.log(result, result.join() === expected.join());
