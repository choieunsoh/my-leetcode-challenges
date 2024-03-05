// 1750. Minimum Length of String After Deleting Similar Ends
// https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/
// T.C.: O(n)
// S.C.: O(1)
var minimumLength = function (s: String): number {
  let left = 0;
  let right = s.length - 1;
  while (left < right && s.charAt(left) === s.charAt(right)) {
    const char = s.charAt(left);
    while (left <= right && s.charAt(left) === char) {
      left++;
    }

    while (left < right && s.charAt(right) === char) {
      right--;
    }
  }
  return right - left + 1;
};

var s = 'ca';
var expected = 2;
var result = minimumLength(s);
console.log(result, result === expected);

var s = 'cabaabac';
var expected = 0;
var result = minimumLength(s);
console.log(result, result === expected);

var s = 'aabccabba';
var expected = 3;
var result = minimumLength(s);
console.log(result, result === expected);

var s = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb';
var expected = 1;
var result = minimumLength(s);
console.log(result, result === expected);

var s = 'abbbbbbbbbbbbbbbbbbba';
var expected = 0;
var result = minimumLength(s);
console.log(result, result === expected);
