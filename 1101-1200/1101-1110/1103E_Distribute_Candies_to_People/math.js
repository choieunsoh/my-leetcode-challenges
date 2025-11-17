// 1103. Distribute Candies to People
// https://leetcode.com/problems/distribute-candies-to-people/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const n = num_people;
  // how many people received complete gifts
  const p = (Math.sqrt(2 * candies + 0.25) - 0.5) | 0;
  const remaining = (candies - (p + 1) * p * 0.5) | 0;
  const rows = (p / n) | 0;
  const cols = p % n;

  const d = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    // complete rows
    d[i] = (i + 1) * rows + ((rows * (rows - 1) * 0.5) | 0) * n;
    // cols in the last row
    if (i < cols) d[i] += i + 1 + rows * n;
  }
  // remaining candies
  d[cols] += remaining;
  return d;
};

var candies = 7,
  num_people = 4;
var expected = [1, 2, 3, 1];
var result = distributeCandies(candies, num_people);
console.log(result, result.join() === expected.join());

var candies = 10,
  num_people = 3;
var expected = [5, 2, 3];
var result = distributeCandies(candies, num_people);
console.log(result, result.join() === expected.join());
