// https://leetcode.com/problems/reverse-bits/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let x = n.toString(2).padStart(32, '0').split('');
  let l = 0;
  let r = x.length - 1;
  while (l < r) {
    [x[l], x[r]] = [x[r], x[l]];
    l++;
    r--;
  }
  return parseInt(x.join(''), 2);
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
