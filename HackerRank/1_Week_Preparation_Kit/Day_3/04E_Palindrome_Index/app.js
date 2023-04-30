// Palindrome Index
// https://www.hackerrank.com/challenges/palindrome-index/problem
/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
  // Write your code here
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s.charAt(l) === s.charAt(r)) {
      l++;
      r--;
      continue;
    }
    if (isPalindrome(s, l, r - 1)) {
      return r;
    }
    if (isPalindrome(s, l + 1, r)) {
      return l;
    }
  }
  return -1;

  function isPalindrome(s, l, r) {
    while (l < r) {
      if (s.charAt(l++) !== s.charAt(r--)) return false;
    }
    return true;
  }
}

var s = 'aaab';
var expected = 3;
var result = palindromeIndex(s);
console.log(result, result === expected);

var s = 'baa';
var expected = 0;
var result = palindromeIndex(s);
console.log(result, result === expected);

var s = 'aaa';
var expected = -1;
var result = palindromeIndex(s);
console.log(result, result === expected);

var s = 'hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh';
var expected = 8;
var result = palindromeIndex(s);
console.log(result, result === expected);
