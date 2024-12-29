// 1183. Maximum Number of Ones
// https://leetcode.com/problems/maximum-number-of-ones/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} width
 * @param {number} height
 * @param {number} sideLength
 * @param {number} maxOnes
 * @return {number}
 */
var maximumNumberOfOnes = function (width, height, sideLength, maxOnes) {
  let result = maxOnes * Math.floor(height / sideLength) * Math.floor(width / sideLength);
  let remain = maxOnes;

  const cnt1 = Math.min((height % sideLength) * (width % sideLength), remain);
  result += (Math.floor(height / sideLength) + Math.floor(width / sideLength) + 1) * cnt1;
  remain -= cnt1;

  if (Math.floor(height / sideLength) > Math.floor(width / sideLength)) {
    const cnt2 = Math.min((width % sideLength) * sideLength - (height % sideLength) * (width % sideLength), remain);
    result += Math.floor(height / sideLength) * cnt2;
    remain -= cnt2;
    const cnt3 = Math.min((height % sideLength) * sideLength - (height % sideLength) * (width % sideLength), remain);
    result += Math.floor(width / sideLength) * cnt3;
    remain -= cnt3;
  } else {
    const cnt2 = Math.min((height % sideLength) * sideLength - (height % sideLength) * (width % sideLength), remain);
    result += Math.floor(width / sideLength) * cnt2;
    remain -= cnt2;
    const cnt3 = Math.min((width % sideLength) * sideLength - (height % sideLength) * (width % sideLength), remain);
    result += Math.floor(height / sideLength) * cnt3;
    remain -= cnt3;
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
