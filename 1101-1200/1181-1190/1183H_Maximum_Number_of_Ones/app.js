// 1183. Maximum Number of Ones
// https://leetcode.com/problems/maximum-number-of-ones/description/
// T.C.: O(n^2 log n^2)
// S.C.: O(n^2)
/**
 * @param {number} width
 * @param {number} height
 * @param {number} sideLength
 * @param {number} maxOnes
 * @return {number}
 */
var maximumNumberOfOnes = function (width, height, sideLength, maxOnes) {
  const count = [];
  for (let row = 0; row < sideLength; row++) {
    for (let col = 0; col < sideLength; col++) {
      const w = ((width - 1 - col) / sideLength) | 0;
      const h = ((height - 1 - row) / sideLength) | 0;
      count.push((1 + w) * (1 + h));
    }
  }
  count.sort((a, b) => b - a);

  let result = 0;
  for (let i = 0; i < maxOnes; ++i) {
    result += count[i];
  }
  return result;
};

var width = 3,
  height = 3,
  sideLength = 2,
  maxOnes = 1;
var expected = 4;
var result = maximumNumberOfOnes(width, height, sideLength, maxOnes);
console.log(result, result === expected);

var width = 3,
  height = 3,
  sideLength = 2,
  maxOnes = 2;
var expected = 6;
var result = maximumNumberOfOnes(width, height, sideLength, maxOnes);
console.log(result, result === expected);
