// https://leetcode.com/problems/hamming-distance/
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  const hamming = (x ^ y).toString(2);
  let count = 0;
  let index = hamming.indexOf('1');
  while (index !== -1 && index < hamming.length) {
    count++;
    index = hamming.indexOf('1', index + 1);
  }
  return count;
};

var x = 1,
  y = 4,
  expect = 2;
console.log(hammingDistance(x, y), '=', expect);

var x = 3,
  y = 1,
  expect = 1;
console.log(hammingDistance(x, y), '=', expect);
