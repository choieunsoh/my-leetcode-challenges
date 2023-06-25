// 1575. Count All Possible Routes
// https://leetcode.com/problems/count-all-possible-routes/
/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function (locations, start, finish, fuel) {
  const MOD = 1e9 + 7;
  const n = locations.length;
  const dp = Array.from({ length: n }, () => new Array(fuel + 1).fill(0));
  dp[finish] = new Array(fuel + 1).fill(1);
  for (let remainFuel = 0; remainFuel <= fuel; remainFuel++) {
    for (let currentCity = 0; currentCity < n; currentCity++) {
      for (let nextCity = 0; nextCity < n; nextCity++) {
        if (currentCity === nextCity) continue;
        const usedFuel = Math.abs(locations[currentCity] - locations[nextCity]);
        if (usedFuel > remainFuel) continue;
        const nextRemainFuel = remainFuel - usedFuel;
        dp[currentCity][remainFuel] += dp[nextCity][nextRemainFuel];
        dp[currentCity][remainFuel] %= MOD;
      }
    }
  }
  return dp[start][fuel];
};

var locations = [2, 3, 6, 8, 4],
  start = 1,
  finish = 3,
  fuel = 5;
var expected = 4;
var result = countRoutes(locations, start, finish, fuel);
console.log(result, result === expected);

var locations = [4, 3, 1],
  start = 1,
  finish = 0,
  fuel = 6;
var expected = 5;
var result = countRoutes(locations, start, finish, fuel);
console.log(result, result === expected);

var locations = [5, 2, 1],
  start = 0,
  finish = 2,
  fuel = 3;
var expected = 0;
var result = countRoutes(locations, start, finish, fuel);
console.log(result, result === expected);
