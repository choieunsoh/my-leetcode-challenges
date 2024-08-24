// 564. Find the Closest Palindrome
// https://leetcode.com/problems/find-the-closest-palindrome/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
  const len = n.length;
  const even = len % 2 === 0;
  const mid = len % 2 === 0 ? len / 2 - 1 : Math.floor(len / 2);
  const firstHalf = BigInt(n.slice(0, mid + 1));

  const possibilities = [];
  possibilities.push(halfToPalindrome(firstHalf, even));
  possibilities.push(halfToPalindrome(firstHalf - 1n, even));
  possibilities.push(halfToPalindrome(firstHalf + 1n, even));
  possibilities.push(BigInt(10 ** (len - 1) - 1));
  possibilities.push(BigInt(10 ** len + 1));

  const num = BigInt(n);
  let diff = num;
  let result = 0n;
  for (const possibility of possibilities) {
    let diffToNum = possibility - num;
    if (diffToNum === 0n) continue;
    if (diffToNum < 0n) diffToNum = -diffToNum;

    if (diffToNum < diff) {
      diff = diffToNum;
      result = possibility;
    } else if (diffToNum === diff) {
      if (possibility < result) result = possibility;
    }
  }

  return result.toString();

  function halfToPalindrome(left, even) {
    let result = left;
    if (!even) left = left / 10n;
    while (left > 0) {
      result = result * 10n + (left % 10n);
      left = left / 10n;
    }
    return result;
  }
};

var n = '123';
var expected = '121';
var result = nearestPalindromic(n);
console.log(result, result === expected);

var n = '12323';
var expected = '12321';
var result = nearestPalindromic(n);
console.log(result, result === expected);

var n = '1';
var expected = '0';
var result = nearestPalindromic(n);
console.log(result, result === expected);

var n = '1234';
var expected = '1221';
var result = nearestPalindromic(n);
console.log(result, result === expected);

var n = '999';
var expected = '1001';
var result = nearestPalindromic(n);
console.log(result, result === expected);

var n = '1000';
var expected = '999';
var result = nearestPalindromic(n);
console.log(result, result === expected);

var n = '12932';
var expected = '12921';
var result = nearestPalindromic(n);
console.log(result, result === expected);

var n = '99800';
var expected = '99799';
var result = nearestPalindromic(n);
console.log(result, result === expected);

var n = '12120';
var expected = '12121';
var result = nearestPalindromic(n);
console.log(result, result === expected);
