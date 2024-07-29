// 1395. Count Number of Teams
// https://leetcode.com/problems/count-number-of-teams/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  const numsGreaterThanIdx = new Array(rating.length).fill(0);
  const numsLessThanIdx = new Array(rating.length).fill(0);

  // Skip 0 since there will never be any numbers less/greater than it that come before the 0th index in rating
  for (let calculatedIdx = rating.length - 1; calculatedIdx > 0; calculatedIdx--) {
    // All numbers are unique, so each number must be greater than or less than rating[calculatedIdx]
    for (let i = calculatedIdx - 1; i >= 0; i--) {
      if (rating[i] > rating[calculatedIdx]) {
        numsGreaterThanIdx[calculatedIdx]++;
      } else {
        numsLessThanIdx[calculatedIdx]++;
      }
    }
  }

  let teams = 0;
  for (let firstRatingIdx = rating.length - 1; firstRatingIdx >= 0; firstRatingIdx--) {
    for (let i = firstRatingIdx - 1; i >= 0; i--) {
      // Ternary operation of true: If ratings[i] is greater than rating[firstRatingIdx], then we
      // know we're looking for a sequence of rating[j] > rating[i] > rating[firstRatingIdx].
      // Since we cached all numbers greater than rating[i] in numsGreaterThanIdx[i], we can find
      // all rating[j] values which are greater than rating[i] in O(1) time here

      // Ternary operation of false: If ratings[i] is less than rating[firstRatingIdx] then we
      // know we're looking for a sequence of rating[j] < rating[i] < rating[firstRatingIdx].
      // Since we also cached all the numbers less than rating[i] in numsLessThanIdx[i], we can
      // find all rating[j] values which are less than rating[i] in O(1) time as well.
      teams += rating[i] > rating[firstRatingIdx] ? numsGreaterThanIdx[i] : numsLessThanIdx[i];
    }
  }

  return teams;
};

var rating = [2, 5, 3, 4, 1];
var expected = 3;
var result = numTeams(rating);
console.log(result, result === expected);

var rating = [2, 1, 3];
var expected = 0;
var result = numTeams(rating);
console.log(result, result === expected);

var rating = [1, 2, 3, 4];
var expected = 4;
var result = numTeams(rating);
console.log(result, result === expected);
