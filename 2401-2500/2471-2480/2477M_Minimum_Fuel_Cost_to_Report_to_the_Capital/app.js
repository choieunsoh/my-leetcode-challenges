// 2477. Minimum Fuel Cost to Report to the Capital
// https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/
/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
  let result = 0;
  const n = roads.length + 1;
  const routes = Array.from({ length: n }, () => []);
  for (const [a, b] of roads) {
    routes[a].push(b);
    routes[b].push(a);
  }

  function dfs(node, parent) {
    let representatives = 1;
    if (routes[node].length === 0) return representatives;

    const cities = routes[node];
    for (const city of cities) {
      if (city === parent) continue;
      representatives += dfs(city, node);
    }

    if (node !== 0) {
      result += Math.ceil(representatives / seats);
    }

    return representatives;
  }

  dfs(0, -1);
  return result;
};

var roads = [
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  seats = 5;
var expected = 3;
var result = minimumFuelCost(roads, seats);
console.log(result, result === expected);

var roads = [
    [3, 1],
    [3, 2],
    [1, 0],
    [0, 4],
    [0, 5],
    [4, 6],
  ],
  seats = 2;
var expected = 7;
var result = minimumFuelCost(roads, seats);
console.log(result, result === expected);

var roads = [],
  seats = 1;
var expected = 0;
var result = minimumFuelCost(roads, seats);
console.log(result, result === expected);
