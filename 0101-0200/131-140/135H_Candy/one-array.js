// 135. Candy
// https://leetcode.com/problems/candy/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  let sum = candies[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
    sum += candies[i];
  }
  return sum;
};

var ratings = [1, 0, 2];
var expected = 5;
var result = candy(ratings);
console.log(result, result === expected);

var ratings = [1, 2, 2];
var expected = 4;
var result = candy(ratings);
console.log(result, result === expected);
