// 2940. Find Building Where Alice and Bob Can Meet
// https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/description/
// T.C.: O(q log n)
// S.C.: O(q + n)
/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function (heights, queries) {
  const monoStack = [];
  const result = new Array(queries.length).fill(-1);
  const newQueries = Array.from({ length: heights.length }, () => []);

  for (let i = 0; i < queries.length; i++) {
    let [alice, bob] = queries[i];
    if (alice > bob) {
      [alice, bob] = [bob, alice];
    }

    if (heights[bob] > heights[alice] || alice === bob) {
      result[i] = bob;
    } else {
      newQueries[bob].push({ height: heights[alice], index: i });
    }
  }

  for (let i = heights.length - 1; i >= 0; i--) {
    for (const { height, index } of newQueries[i]) {
      const position = search(height, monoStack);
      if (position < monoStack.length && position >= 0) {
        result[index] = monoStack[position].index;
      }
    }

    while (monoStack.length > 0 && monoStack[monoStack.length - 1].height <= heights[i]) {
      monoStack.pop();
    }
    monoStack.push({ height: heights[i], index: i });
  }

  return result;

  function search(height, monoStack) {
    let left = 0;
    let right = monoStack.length - 1;
    let position = -1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (monoStack[mid].height > height) {
        position = Math.max(position, mid);
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return position;
  }
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
