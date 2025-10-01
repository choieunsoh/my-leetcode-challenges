// 3216. Lexicographically Smallest String After a Swap
// https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
  const nums = s.split('').map(Number);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i - 1] % 2 && nums[i] < nums[i - 1]) {
      [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
      break;
    }
  }
  return nums.join('');
};

var s = '45320';
var expected = '43520';
var result = getSmallestString(s);
console.log(result, result === expected);

var s = '001';
var expected = '001';
var result = getSmallestString(s);
console.log(result, result === expected);

var s = '10';
var expected = '10';
var result = getSmallestString(s);
console.log(result, result === expected);

var s = '220';
var expected = '202';
var result = getSmallestString(s);
console.log(result, result === expected);
