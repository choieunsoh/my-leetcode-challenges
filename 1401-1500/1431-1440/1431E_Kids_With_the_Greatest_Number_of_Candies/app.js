// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const result = new Array(candies.length).fill(false);
  const maxCandies = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    const currentCandies = candies[i] + extraCandies;
    if (currentCandies >= maxCandies) {
      result[i] = true;
    }
  }
  return result;
};

var candies = [2, 3, 5, 1, 3],
  extraCandies = 3;
var expected = [true, true, true, false, true];
var result = kidsWithCandies(candies, extraCandies);
console.log(result, result.join() === expected.join());

var candies = [4, 2, 1, 1, 2],
  extraCandies = 1;
var expected = [true, false, false, false, false];
var result = kidsWithCandies(candies, extraCandies);
console.log(result, result.join() === expected.join());

var candies = [12, 1, 12],
  extraCandies = 10;
var expected = [true, false, true];
var result = kidsWithCandies(candies, extraCandies);
console.log(result, result.join() === expected.join());
