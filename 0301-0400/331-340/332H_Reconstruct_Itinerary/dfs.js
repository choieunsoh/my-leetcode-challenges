// 332. Reconstruct Itinerary
// https://leetcode.com/problems/reconstruct-itinerary/
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const graph = new Map();
  for (const [from, to] of tickets) {
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from).push(to);
  }

  for (const [, toAirports] of graph) {
    toAirports.sort((a, b) => (a > b ? -1 : 1));
  }

  const result = [];
  dfs('JFK');
  return result.reverse();

  function dfs(fromAirport) {
    const toAirports = graph.get(fromAirport) ?? [];
    while (toAirports.length) {
      const nextAirport = toAirports.pop();
      dfs(nextAirport);
    }
    result.push(fromAirport);
  }
};

var tickets = [
  ['MUC', 'LHR'],
  ['JFK', 'MUC'],
  ['SFO', 'SJC'],
  ['LHR', 'SFO'],
];
var expected = ['JFK', 'MUC', 'LHR', 'SFO', 'SJC'];
var result = findItinerary(tickets);
console.log(result, result.join() === expected.join());

var tickets = [
  ['JFK', 'SFO'],
  ['JFK', 'ATL'],
  ['SFO', 'ATL'],
  ['ATL', 'JFK'],
  ['ATL', 'SFO'],
];
var expected = ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'];
var result = findItinerary(tickets);
console.log(result, result.join() === expected.join());
