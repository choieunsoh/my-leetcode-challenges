// 332. Reconstruct Itinerary
// https://leetcode.com/problems/reconstruct-itinerary/
// T.C.: O(N log N)
// S.C.: O(N)
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const graph = new Map();
  for (const [src, dst] of tickets) {
    if (!graph.has(src)) graph.set(src, []);
    graph.get(src).push(dst);
  }

  for (const [, airports] of graph) {
    airports.sort((a, b) => b.localeCompare(a));
  }

  const stack = ['JFK'];
  const itinerary = [];
  while (stack.length > 0) {
    while (graph.has(stack[stack.length - 1]) && graph.get(stack[stack.length - 1]).length > 0) {
      stack.push(graph.get(stack[stack.length - 1]).pop());
    }
    itinerary.push(stack.pop());
  }
  return itinerary.reverse();
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
