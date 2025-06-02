// 135. Candy
// https://leetcode.com/problems/candy/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1);
  let hasChanged = true;
  while (hasChanged) {
    hasChanged = false;
    for (let i = 0; i < n; i++) {
      if (i !== n - 1 && ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
        candies[i] = candies[i + 1] + 1;
        hasChanged = true;
      }
      if (i > 0 && ratings[i] > ratings[i - 1] && candies[i] <= candies[i - 1]) {
        candies[i] = candies[i - 1] + 1;
        hasChanged = true;
      }
    }
  }
  return candies.reduce((a, b) => a + b, 0);
};

var ratings = [1, 0, 2];
var expected = 5;
var result = candy(ratings);
console.log(result, result === expected);

var ratings = [1, 2, 2];
var expected = 4;
var result = candy(ratings);
console.log(result, result === expected);
