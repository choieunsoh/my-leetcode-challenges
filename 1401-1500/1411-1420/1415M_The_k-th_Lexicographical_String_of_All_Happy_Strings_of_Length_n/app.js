// 1415. The k-th Lexicographical String of All Happy Strings of Length n
// https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/description/
// T.C.: O(2^n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  const chars = ['a', 'b', 'c'];
  let happyStringIndex = 0;
  let happyString = '';
  backtrack(0, '');
  return happyString;

  function backtrack(index, str) {
    if (index === n) {
      if (++happyStringIndex === k) {
        happyString = str;
      }
      return;
    }

    if (happyString !== '') {
      return;
    }

    for (const char of chars) {
      if (str.length > 0 && str[str.length - 1] === char) {
        continue;
      }
      backtrack(index + 1, str + char);
    }
  }
};

var n = 1,
  k = 3;
var expected = 'c';
var result = getHappyString(n, k);
console.log(result, result === expected);

var n = 1,
  k = 4;
var expected = '';
var result = getHappyString(n, k);
console.log(result, result === expected);

var n = 3,
  k = 9;
var expected = 'cab';
var result = getHappyString(n, k);
console.log(result, result === expected);
