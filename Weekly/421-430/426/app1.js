/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
  const num = n.toString(2);
  const len = num.length;
  for (let i = 0; i < len; i++) {
    n |= 1 << i;
  }
  return n;
};

var n = 5;
var expected = 7;
var result = smallestNumber(n);
console.log(result, result === expected);

var n = 10;
var expected = 15;
var result = smallestNumber(n);
console.log(result, result === expected);
