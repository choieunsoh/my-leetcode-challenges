// https://leetcode.com/problems/reverse-bits/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  return Number.parseInt(
    n.toString(2).padStart(32, '0').split('').reverse().join(''),
    2
  );
};

var x = '00000010100101000001111010011100';
var n = Number.parseInt(x, 2);
var m = reverseBits(n);
console.log(x.split('').reverse().join(''));
console.log(m.toString(2), m);

var x = '11111111111111111111111111111101';
var n = Number.parseInt(x, 2);
var m = reverseBits(n);
console.log(x.split('').reverse().join(''));
console.log(m.toString(2), m);
