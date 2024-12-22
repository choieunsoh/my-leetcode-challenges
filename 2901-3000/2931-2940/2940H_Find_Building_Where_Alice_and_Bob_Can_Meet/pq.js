// 2940. Find Building Where Alice and Bob Can Meet
// https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/description/
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
// T.C.: O(q log q)
// S.C.: O(q + n)
/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function (heights, queries) {
  const maxIndex = new MinPriorityQueue({
    compare: (a, b) => a[0] - b[0],
  });
  const result = new Array(queries.length).fill(-1);
  const storeQueries = Array.from({ length: heights.length }, () => []);

  // Store the mappings for all queries in storeQueries.
  for (let currQuery = 0; currQuery < queries.length; currQuery++) {
    const [a, b] = queries[currQuery];
    if (a < b && heights[a] < heights[b]) {
      result[currQuery] = b;
    } else if (a > b && heights[a] > heights[b]) {
      result[currQuery] = a;
    } else if (a === b) {
      result[currQuery] = a;
    } else {
      storeQueries[Math.max(a, b)].push([Math.max(heights[a], heights[b]), currQuery]);
    }
  }

  // If the priority queue's minimum pair value is less than the current index of height, it is an answer to the query.
  for (let index = 0; index < heights.length; index++) {
    while (!maxIndex.isEmpty() && maxIndex.front()[0] < heights[index]) {
      const [_, queryIndex] = maxIndex.dequeue();
      result[queryIndex] = index;
    }

    // Push the queries with their maximum height as the current index in the priority queue.
    for (const element of storeQueries[index]) {
      maxIndex.enqueue(element);
    }
  }

  return result;
};

var heights = [6, 4, 8, 5, 2, 7],
  queries = [
    [0, 1],
    [0, 3],
    [2, 4],
    [3, 4],
    [2, 2],
  ];
var expected = [2, 5, -1, 5, 2];
var result = leftmostBuildingQueries(heights, queries);
console.log(result, result.join() === expected.join());

var heights = [5, 3, 8, 2, 6, 1, 4, 6],
  queries = [
    [0, 7],
    [3, 5],
    [5, 2],
    [3, 0],
    [1, 6],
  ];
var expected = [7, 6, -1, 4, 6];
var result = leftmostBuildingQueries(heights, queries);
console.log(result, result.join() === expected.join());
