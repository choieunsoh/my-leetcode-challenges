// 1980. Find Unique Binary String
// https://leetcode.com/problems/find-unique-binary-string/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  const n = nums.length;
  const zero = '0'.repeat(n);
  const seen = new Set(nums);
  if (!seen.has(zero)) return zero;

  const result = backtrack('');
  return result;

  function backtrack(num) {
    if (num.length === n) {
      if (!seen.has(num)) return num;
      return '';
    }

    const addZero = backtrack(num + '0');
    if (addZero !== '') {
      return addZero;
    }

    const addOne = backtrack(num + '1');
    return addOne;
  }
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
