// 1720. Decode XORed Array
// https://leetcode.com/problems/decode-xored-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const result = [first];
  for (const num of encoded) {
    result.push(result[result.length - 1] ^ num);
  }
  return result;
};

var encoded = [1, 2, 3],
  first = 1;
var expected = [1, 0, 2, 1];
var result = decode(encoded, first);
console.log(result, result.join() === expected.join());

var encoded = [6, 2, 7, 3],
  first = 4;
var expected = [4, 2, 0, 7, 4];
var result = decode(encoded, first);
console.log(result, result.join() === expected.join());
