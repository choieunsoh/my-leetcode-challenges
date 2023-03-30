// 87. Scramble String
// https://leetcode.com/problems/scramble-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  const n = s1.length;
  const mp = new Map();

  // if both strings are not equal in size
  if (s2.length !== n) {
    return false;
  }

  // if both strings are equal
  if (s1 === s2) {
    return true;
  }

  // if code is reached to this condition then following this are sure:
  // 1. size of both string is equal
  // 2. string are not equal
  // so size is equal (where size==1) and they are not equal then obviously false
  // example 'a' and 'b' size is equal ,string are not equal
  if (n === 1) {
    return false;
  }

  const key = s1 + ' ' + s2;

  // check if this problem has already been solved
  if (mp.has(key)) {
    return mp.get(key);
  }

  // for every iteration it can two condition
  // 1.we should proceed without swapping
  // 2.we should swap before looking next
  for (let i = 1; i < n; i++) {
    // ex of without swap: gr|eat and rg|eat
    const withoutSwap =
      // left part of first and second string
      isScramble(s1.substring(0, i), s2.substring(0, i)) &&
      // right part of first and second string;
      isScramble(s1.substring(i), s2.substring(i));

    // if without swap give us right answer then we do not need
    // to call the recursion with swap
    if (withoutSwap) {
      mp.set(key, true);
      return true;
    }

    // ex of with swap: gr|eat rge|at
    // here we compare "gr" with "at" and "eat" with "rge"
    const withSwap =
      // left part of first and right part of second
      isScramble(s1.substring(0, i), s2.substring(n - i)) &&
      // right part of first and left part of second
      isScramble(s1.substring(i), s2.substring(0, n - i));

    // if with swap give us right answer then we return true
    // otherwise the for loop do it work
    if (withSwap) {
      mp.set(key, true);
      return true;
    }
    // we are not returning false in else case
    // because we want to check further cases with the for loop
  }

  mp.set(key, false);
  return false;
};

var s1 = 'great',
  s2 = 'rgeat';
var expected = true;
var result = isScramble(s1, s2);
console.log(result, result === expected);

var s1 = 'abcde',
  s2 = 'caebd';
var expected = false;
var result = isScramble(s1, s2);
console.log(result, result === expected);

var s1 = 'a',
  s2 = 'a';
var expected = true;
var result = isScramble(s1, s2);
console.log(result, result === expected);
