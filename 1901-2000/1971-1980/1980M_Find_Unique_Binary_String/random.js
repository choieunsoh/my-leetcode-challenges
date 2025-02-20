// 1980. Find Unique Binary String
// https://leetcode.com/problems/find-unique-binary-string/
// T.C.: O(inf)
// S.C.: O(n)
/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  const integers = new Set();
  for (const num of nums) {
    integers.add(parseInt(num, 2));
  }

  let ans = parseInt(nums[0], 2);
  const n = nums.length;

  while (integers.has(ans)) {
    ans = (Math.random() * (1 << n)) | 0;
  }

  let s = ans.toString(2);
  while (s.length < n) {
    s = '0' + s;
  }
  return s;
};

var nums = ['01', '10'];
var expected = ['00', '11'];
var result = findDifferentBinaryString(nums);
console.log(result, expected.includes(result));

var nums = ['00', '01'];
var expected = ['10', '11'];
var result = findDifferentBinaryString(nums);
console.log(result, expected.includes(result));

var nums = ['111', '011', '001'];
var expected = ['000', '010', '100', '101', '110'];
var result = findDifferentBinaryString(nums);
console.log(result, expected.includes(result));
