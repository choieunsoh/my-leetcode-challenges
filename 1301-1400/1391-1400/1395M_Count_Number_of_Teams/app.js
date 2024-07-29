// 1395. Count Number of Teams
// https://leetcode.com/problems/count-number-of-teams/description/
// T.C.: O(n * log(maxRating))
// S.C.: O(maxRating)
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  let teams = 0;
  const maxRating = Math.max(...rating);
  const leftBIT = new Array(maxRating + 1).fill(0);
  const rightBIT = new Array(maxRating + 1).fill(0);

  // Populate the right BIT with all ratings initially
  for (const r of rating) {
    updateBIT(rightBIT, r, 1);
  }

  for (const currentRating of rating) {
    // Remove current rating from right BIT
    updateBIT(rightBIT, currentRating, -1);

    // Count soldiers with smaller and larger ratings on both sides
    const smallerRatingsLeft = getPrefixSum(leftBIT, currentRating - 1);
    const smallerRatingsRight = getPrefixSum(rightBIT, currentRating - 1);
    const largerRatingsLeft = getPrefixSum(leftBIT, maxRating) - getPrefixSum(leftBIT, currentRating);
    const largerRatingsRight = getPrefixSum(rightBIT, maxRating) - getPrefixSum(rightBIT, currentRating);

    // Count increasing and decreasing sequences
    teams += smallerRatingsLeft * largerRatingsRight;
    teams += largerRatingsLeft * smallerRatingsRight;

    // Add current rating to left BIT
    updateBIT(leftBIT, currentRating, 1);
  }

  return teams;

  // Update the Binary Indexed Tree
  function updateBIT(BIT, index, value) {
    while (index < BIT.length) {
      BIT[index] += value;
      index += index & -index; // Move to the next relevant index in BIT
    }
  }

  // Get the sum of all elements up to the given index in the BIT
  function getPrefixSum(BIT, index) {
    let sum = 0;
    while (index > 0) {
      sum += BIT[index];
      index -= index & -index; // Move to the parent node in BIT
    }
    return sum;
  }
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
