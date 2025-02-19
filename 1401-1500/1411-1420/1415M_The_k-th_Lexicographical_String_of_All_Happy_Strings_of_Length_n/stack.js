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
  const stringsStack = [];
  let indexInSortedList = 0;
  stringsStack.push(''); // Start with an empty string

  while (stringsStack.length > 0) {
    const currentString = stringsStack.pop();

    // If we have built a string of length n, count it
    if (currentString.length === n) {
      // If we reach the k-th happy string, return it
      if (++indexInSortedList === k) {
        return currentString;
      }
      continue;
    }

    // Expand the current string by adding 'a', 'b', or 'c'
    // Ensuring lexicographic order by pushing in reverse
    for (const currentChar of ['c', 'b', 'a']) {
      // Avoid consecutive identical characters
      if (currentString.length === 0 || currentString[currentString.length - 1] !== currentChar) {
        stringsStack.push(currentString + currentChar);
      }
    }
  }
  return '';
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
