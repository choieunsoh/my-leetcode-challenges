/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  s = s.split('');
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] === s[r]) {
      //
    } else if (s[l] < s[r]) {
      s[r] = s[l];
    } else {
      s[l] = s[r];
    }
    l++;
    r--;
  }
  return s.join('');
};

var s = 'egcfe';
var expected = 'efcfe';
var result = makeSmallestPalindrome(s);
console.log(result, result === expected);

var s = 'abcd';
var expected = 'abba';
var result = makeSmallestPalindrome(s);
console.log(result, result === expected);

var s = 'seven';
var expected = 'neven';
var result = makeSmallestPalindrome(s);
console.log(result, result === expected);
