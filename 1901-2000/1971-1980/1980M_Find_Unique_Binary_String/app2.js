// 1980. Find Unique Binary String
// https://leetcode.com/problems/find-unique-binary-string/
// T.C.: O(n^2)
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

  const n = nums.length;
  for (let num = 0; num <= n; num++) {
    if (!integers.has(num)) {
      let ans = num.toString(2);
      while (ans.length < n) {
        ans = '0' + ans;
      }
      return ans;
    }
  }

  return '';
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
