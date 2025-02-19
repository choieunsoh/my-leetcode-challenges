// 1415. The k-th Lexicographical String of All Happy Strings of Length n
// https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  // Calculate the total number of happy strings of length n
  const total = 3 * (1 << (n - 1));

  // If k is greater than the total number of happy strings, return an empty string
  if (k > total) return '';

  // Initialize result with 'a' characters
  const result = new Array(n).fill('a');

  // Define mappings for the next smallest and greatest valid characters
  const nextSmallest = new Map();
  nextSmallest.set('a', 'b');
  nextSmallest.set('b', 'a');
  nextSmallest.set('c', 'a');

  const nextGreatest = new Map();
  nextGreatest.set('a', 'c');
  nextGreatest.set('b', 'c');
  nextGreatest.set('c', 'b');

  // Calculate the starting indices for strings beginning with 'a', 'b', and 'c'
  let startA = 1;
  let startB = startA + (1 << (n - 1));
  let startC = startB + (1 << (n - 1));

  // Determine the first character based on the value of k
  if (k < startB) {
    result[0] = 'a';
    k -= startA;
  } else if (k < startC) {
    result[0] = 'b';
    k -= startB;
  } else {
    result[0] = 'c';
    k -= startC;
  }

  // Iterate through the remaining positions in the result string
  for (let charIndex = 1; charIndex < n; charIndex++) {
    // Calculate the midpoint of the group for the current character position
    const midpoint = 1 << (n - charIndex - 1);

    // Determine the next character based on the value of k
    result[charIndex] = nextSmallest.get(result[charIndex - 1]);
    if (k >= midpoint) {
      k -= midpoint;
    }
  }

  return result.join('');
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
