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
  const memo = Array.from({ length: n }, () => new Array(fuel + 1).fill(-1));
  return solve(start, finish, fuel);

  function solve(currentCity, finishCity, remainFuel) {
    if (remainFuel < 0) return 0;
    if (memo[currentCity][remainFuel] !== -1) return memo[currentCity][remainFuel];

    let result = currentCity === finishCity ? 1 : 0;
    for (let nextCity = 0; nextCity < n; nextCity++) {
      if (currentCity === nextCity) continue;
      const usedFuel = Math.abs(locations[nextCity] - locations[currentCity]);
      result += solve(nextCity, finishCity, remainFuel - usedFuel);
      result %= MOD;
    }
    return (memo[currentCity][remainFuel] = result);
  }
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
