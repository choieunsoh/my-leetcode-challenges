// 2285. Maximum Total Importance of Roads
// https://leetcode.com/problems/maximum-total-importance-of-roads/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
  const cities = new Array(n).fill(0);
  for (const [a, b] of roads) {
    cities[a]++;
    cities[b]++;
  }

  const counts = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    counts[cities[i]]++;
  }

  let importance = 0;
  let value = n;
  for (let city = n; city > 0; city--) {
    while (counts[city] > 0) {
      importance += city * value;
      counts[city]--;
      value--;
    }
  }
  return importance;
};

var n = 5,
  roads = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 2],
    [1, 3],
    [2, 4],
  ];
var expected = 43;
var result = maximumImportance(n, roads);
console.log(result, result === expected);

var n = 5,
  roads = [
    [0, 3],
    [2, 4],
    [1, 3],
  ];
var expected = 20;
var result = maximumImportance(n, roads);
console.log(result, result === expected);

var n = 5,
  roads = [[0, 1]];
var expected = 9;
var result = maximumImportance(n, roads);
console.log(result, result === expected);
