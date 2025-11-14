// 1313. Decompress Run-Length Encoded List
// https://leetcode.com/problems/decompress-run-length-encoded-list/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i];
    const val = nums[i + 1];
    for (let j = 0; j < freq; j++) {
      result.push(val);
    }
  }
  return result;
};

var nums = [1, 2, 3, 4];
var expected = [2, 4, 4, 4];
var result = decompressRLElist(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 2, 3];
var expected = [1, 3, 3];
var result = decompressRLElist(nums);
console.log(result, result.join() === expected.join());
