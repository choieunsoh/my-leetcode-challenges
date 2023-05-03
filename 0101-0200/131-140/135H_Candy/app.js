// 135. Candy
// https://leetcode.com/problems/candy/
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  const left2right = Array.from(ratings).fill(1);
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left2right[i] = left2right[i - 1] + 1;
    }
  }

  const right2left = Array.from(ratings).fill(1);
  for (let i = n - 2; i > -1; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right2left[i] = right2left[i + 1] + 1;
    }
  }

  let candies = 0;
  for (let i = 0; i < n; i++) {
    candies += Math.max(left2right[i], right2left[i]);
  }
  return candies;
};

var ratings = [1, 0, 2];
var expected = 5;
var result = candy(ratings);
console.log(result, result === expected);

var ratings = [1, 2, 2];
var expected = 4;
var result = candy(ratings);
console.log(result, result === expected);
