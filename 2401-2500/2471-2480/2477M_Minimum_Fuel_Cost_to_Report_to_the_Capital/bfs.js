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
  const routes = new Array(n).fill().map(() => new Array());
  const degree = new Array(n).fill(0);
  for (const [a, b] of roads) {
    routes[a].push(b);
    routes[b].push(a);
    degree[a]++;
    degree[b]++;
  }

  const queue = [];
  for (let i = 0; i < degree.length; i++) {
    if (degree[i] === 1 && i !== 0) {
      queue.push(i);
    }
  }

  const count = new Array(n).fill(1);
  const visited = new Array(n).fill(false);
  let index = 0;
  while (index < queue.length) {
    const fromCity = queue[index++];
    visited[fromCity] = true;

    const toCities = routes[fromCity];
    for (const city of toCities) {
      if (visited[city]) continue;
      result += Math.ceil(count[fromCity] / seats);
      count[city] += count[fromCity];
      degree[city]--;
      if (city !== 0 && degree[city] === 1) {
        queue.push(city);
      }
    }
  }
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
