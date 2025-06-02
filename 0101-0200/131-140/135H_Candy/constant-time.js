// 135. Candy
// https://leetcode.com/problems/candy/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  if (ratings.length <= 1) {
    return ratings.length;
  }
  let candies = 0;
  let up = 0;
  let down = 0;
  let oldSlope = 0;
  for (let i = 1; i < ratings.length; i++) {
    const newSlope = ratings[i] > ratings[i - 1] ? 1 : ratings[i] < ratings[i - 1] ? -1 : 0;
    // slope is changing from uphill to flat or downhill
    // or from downhill to flat or uphill
    if ((oldSlope > 0 && newSlope === 0) || (oldSlope < 0 && newSlope >= 0)) {
      candies += count(up) + count(down) + Math.max(up, down);
      up = 0;
      down = 0;
    }
    // slope is uphill
    if (newSlope > 0) {
      up++;
    }
    // slope is downhill
    else if (newSlope < 0) {
      down++;
    }
    // slope is flat
    else {
      candies++;
    }
    oldSlope = newSlope;
  }
  candies += count(up) + count(down) + Math.max(up, down) + 1;
  return candies;

  function count(n) {
    // Function to calculate sum of first n natural numbers
    return (n * (n + 1)) / 2;
  }
};

var ratings = [1, 0, 2];
var expected = 5;
var result = candy(ratings);
console.log(result, result === expected);

var ratings = [1, 2, 2];
var expected = 4;
var result = candy(ratings);
console.log(result, result === expected);
