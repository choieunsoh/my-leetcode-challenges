/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
  const len = n.toString(2).length;
  return (1 << len) - 1;
};

var n = 5;
var expected = 7;
var result = smallestNumber(n);
console.log(result, result === expected);

var n = 10;
var expected = 15;
var result = smallestNumber(n);
console.log(result, result === expected);
