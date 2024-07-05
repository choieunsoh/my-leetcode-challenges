// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} ratings
 * @param {number} minDiff
 * @return {number}
 */
function maxPairs(ratings, minDiff) {
  ratings.sort((a, b) => a - b);
  const n = ratings.length;
  let pairs = 0;
  let left = 0;
  let right = 0;
  while (left < n && right < n) {
    while (right < n && ratings[right] - ratings[left] < minDiff) {
      right++;
    }
    if (right < n) {
      pairs++;
      left++;
      right++;
    }
  }

  return pairs;
}

var rating = [1, 2, 3, 4, 5, 6],
  minDiff = 4;
var expected = 2;
var result = maxPairs(rating, minDiff);
console.log(result, result === expected);

var rating = [1, 1, 1, 1],
  minDiff = 4;
var expected = 0;
var result = maxPairs(rating, minDiff);
console.log(result, result === expected);

var rating = [3, 4, 5, 2, 1, 1],
  minDiff = 3;
var expected = 2;
var result = maxPairs(rating, minDiff);
console.log(result, result === expected);

var rating = [1, 2, 3, 3, 5, 6, 10, 9],
  minDiff = 4;
var expected = 4;
var result = maxPairs(rating, minDiff);
console.log(result, result === expected);
