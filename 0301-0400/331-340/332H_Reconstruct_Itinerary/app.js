// 332. Reconstruct Itinerary
// https://leetcode.com/problems/reconstruct-itinerary/
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const flights = tickets.length;
  const graph = new Map();
  const visitedMap = new Map();
  for (const [from, to] of tickets) {
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from).push(to);
  }
  for (const [fromAirport, toAirports] of graph) {
    toAirports.sort();
    visitedMap.set(fromAirport, new Array(toAirports.length).fill(false));
  }

  let result = [];
  const routes = ['JFK'];
  backtrack('JFK', routes);
  return result;

  function backtrack(fromAirport, routes) {
    if (routes.length === flights + 1) {
      result = [...routes];
      return true;
    }

    if (!graph.has(fromAirport)) return false;

    const visited = visitedMap.get(fromAirport);
    const toAirports = graph.get(fromAirport);
    for (let i = 0; i < toAirports.length; i++) {
      if (visited[i]) continue;

      const toAirport = toAirports[i];
      visited[i] = true;
      const result = backtrack(toAirport, [...routes, toAirport]);
      visited[i] = false;

      if (result) return true;
    }
    return false;
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
