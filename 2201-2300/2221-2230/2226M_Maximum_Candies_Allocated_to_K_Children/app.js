// 2226. Maximum Candies Allocated to K Children
// https://leetcode.com/problems/maximum-candies-allocated-to-k-children/description/
// T.C.: O()
// S.C.: O()
/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  const totalCandies = candies.reduce((a, b) => a + b, 0);
  let maxCandies = (totalCandies / k) | 0;
  if (maxCandies === 0) return 0;

  let minCandies = 1;
  let maxCandiesPerChild = maxCandies;
  while (minCandies <= maxCandies) {
    const midCandies = (minCandies + maxCandies) >> 1;
    if (canDistributeCandies(midCandies)) {
      maxCandiesPerChild = midCandies;
      minCandies = midCandies + 1;
    } else {
      maxCandies = midCandies - 1;
    }
  }
  return maxCandiesPerChild;

  function canDistributeCandies(maxCandies) {
    let childrenCount = 0;
    for (const candy of candies) {
      if (candy >= maxCandies) {
        childrenCount += (candy / maxCandies) | 0;
        if (childrenCount >= k) return true;
      }
    }
    return childrenCount >= k;
  }
};

var candies = [5, 8, 6],
  k = 3;
var expected = 5;
var result = maximumCandies(candies, k);
console.log(result, result === expected);

var candies = [2, 5],
  k = 11;
var expected = 0;
var result = maximumCandies(candies, k);
console.log(result, result === expected);

var candies = [2, 5],
  k = 7;
var expected = 1;
var result = maximumCandies(candies, k);
console.log(result, result === expected);

var candies = [5, 5, 5, 5],
  k = 4;
var expected = 5;
var result = maximumCandies(candies, k);
console.log(result, result === expected);

var candies = [1, 1],
  k = 1;
var expected = 1;
var result = maximumCandies(candies, k);
console.log(result, result === expected);
