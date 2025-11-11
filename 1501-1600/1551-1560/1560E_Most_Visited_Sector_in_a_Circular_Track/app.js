// 1560. Most Visited Sector in a Circular Track
// https://leetcode.com/problems/most-visited-sector-in-a-circular-track/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
  const result = [];
  const start = rounds[0];
  const end = rounds[rounds.length - 1];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  if (result.length > 0) return result;

  for (let i = 1; i <= end; i++) {
    result.push(i);
  }
  for (let i = start; i <= n; i++) {
    result.push(i);
  }
  return result;
};

var n = 4,
  rounds = [1, 3, 1, 2];
var expected = [1, 2];
var result = mostVisited(n, rounds);
console.log(result, result.join() === expected.join());

var n = 2,
  rounds = [2, 1, 2, 1, 2, 1, 2, 1, 2];
var expected = [2];
var result = mostVisited(n, rounds);
console.log(result, result.join() === expected.join());

var n = 7,
  rounds = [1, 3, 5, 7];
var expected = [1, 2, 3, 4, 5, 6, 7];
var result = mostVisited(n, rounds);
console.log(result, result.join() === expected.join());
