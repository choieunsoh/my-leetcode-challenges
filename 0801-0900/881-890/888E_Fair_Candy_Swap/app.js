// https://leetcode.com/problems/fair-candy-swap/
// 888. Fair Candy Swap
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const aliceSum = aliceSizes.reduce((sum, size) => sum + size, 0);
  const bobSum = bobSizes.reduce((sum, size) => sum + size, 0);
  const diff = (bobSum - aliceSum) / 2;
  const bobSet = new Set(bobSizes);
  for (let i = 0; i < aliceSizes.length; i++) {
    const swap = aliceSizes[i] + diff;
    if (bobSet.has(swap)) {
      return [aliceSizes[i], swap];
    }
  }
  return [];
};

var aliceSizes = [1, 1],
  bobSizes = [2, 2];
var expected = [1, 2];
var actual = fairCandySwap(aliceSizes, bobSizes);
console.log(actual, actual.join() === expected.join());

var aliceSizes = [1, 2],
  bobSizes = [2, 3];
var expected = [1, 2];
var actual = fairCandySwap(aliceSizes, bobSizes);
console.log(actual, actual.join() === expected.join());

var aliceSizes = [2],
  bobSizes = [1, 3];
var expected = [2, 3];
var actual = fairCandySwap(aliceSizes, bobSizes);
console.log(actual, actual.join() === expected.join());
