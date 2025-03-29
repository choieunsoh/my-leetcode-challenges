/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
  const a = 'a'.charCodeAt(0);
  let degree = 0;
  for (let i = 0; i < s.length; i++) {
    const reverseAlphabet = 26 - (s.charCodeAt(i) - a);
    degree += reverseAlphabet * (i + 1);
  }
  return degree;
};

var s = 'abc';
var expected = 148;
var result = reverseDegree(s);
console.log(result, result === expected); // 148

var s = 'zaza';
var expected = 160;
var result = reverseDegree(s);
console.log(result, result === expected); // 148
