// 3498. Reverse Degree of a String
// https://leetcode.com/problems/reverse-degree-of-a-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
  const a = 'a'.charCodeAt(0);
  let reverseDegree = 0;
  for (let i = 0; i < s.length; i++) {
    const reverseAlphabet = 26 - (s.charCodeAt(i) - a);
    reverseDegree += reverseAlphabet * (i + 1);
  }
  return reverseDegree;
};

var s = 'abc';
var expected = 148;
var result = reverseDegree(s);
console.log(result, result === expected); // 148

var s = 'zaza';
var expected = 160;
var result = reverseDegree(s);
console.log(result, result === expected); // 148
