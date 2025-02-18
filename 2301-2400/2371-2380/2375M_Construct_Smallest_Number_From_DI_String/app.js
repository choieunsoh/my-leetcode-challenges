// 2375. Construct Smallest Number From DI String
// https://leetcode.com/problems/construct-smallest-number-from-di-string/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  const nums = new Array(pattern.length + 1).fill('');
  let nextNum = 1;

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === 'I') {
      nums[i] = nextNum++;
      fillBackward(i);
    }
  }

  fillBackward(nums.length);
  return nums.join('');

  function fillBackward(idx) {
    for (let i = idx - 1; i >= 0; i--) {
      if (nums[i]) break;

      nums[i] = nextNum++;
    }
  }
};

var pattern = 'IIIDIDDD';
var expected = '123549876';
var result = smallestNumber(pattern);
console.log(result, result === expected);

var pattern = 'DDD';
var expected = '4321';
var result = smallestNumber(pattern);
console.log(result, result === expected);
