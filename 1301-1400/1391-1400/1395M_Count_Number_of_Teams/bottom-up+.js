// 1395. Count Number of Teams
// https://leetcode.com/problems/count-number-of-teams/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  let teams = 0;
  const n = rating.length;

  // Iterate through each soldier as the middle soldier
  for (let mid = 0; mid < n; mid++) {
    let leftSmaller = 0;
    let rightLarger = 0;

    // Count soldiers with smaller rating on the left side of the current soldier
    for (let left = mid - 1; left >= 0; left--) {
      if (rating[left] < rating[mid]) {
        leftSmaller++;
      }
    }

    // Count soldiers with larger ratings on the right side of the current soldier
    for (let right = mid + 1; right < n; right++) {
      if (rating[right] > rating[mid]) {
        rightLarger++;
      }
    }

    // Calculate and add the number of ascending rating teams (small-mid-large)
    teams += leftSmaller * rightLarger;

    // Calculate soldiers with larger ratings on the left and smaller ratings on the right
    const leftLarger = mid - leftSmaller;
    const rightSmaller = n - mid - 1 - rightLarger;

    // Calculate and add the number of descending rating teams (large-mid-small)
    teams += leftLarger * rightSmaller;
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
