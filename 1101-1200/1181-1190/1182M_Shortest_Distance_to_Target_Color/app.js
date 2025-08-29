// 1182. Shortest Distance to Target Color
// https://leetcode.com/problems/shortest-distance-to-target-color/description/
// T.C.: O(m log n + n)
// S.C.: O(n)
/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceColor = function (colors, queries) {
  const map = new Map();
  for (let i = 0; i < colors.length; i++) {
    if (!map.has(colors[i])) {
      map.set(colors[i], []);
    }
    map.get(colors[i]).push(i);
  }

  const result = [];
  for (const [index, color] of queries) {
    if (!map.has(color)) {
      result.push(-1);
      continue;
    }
    const [lower, upper] = binarySearch(map.get(color), index);
    result.push(Math.min(Math.abs(index - lower), Math.abs(upper - index)));
  }
  return result;

  function binarySearch(arr, target) {
    let index = -1;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
        index = mid;
      }
    }

    if (index === 0) return [arr[0], arr[0]];
    if (index === -1) return [arr[right], arr[right]];
    return [arr[index - 1], arr[index]];
  }
};

var colors = [1, 1, 2, 1, 3, 2, 2, 3, 3],
  queries = [
    [1, 3],
    [2, 2],
    [6, 1],
  ];
var expected = [3, 0, 3];
var result = shortestDistanceColor(colors, queries);
console.log(result, result.join() === expected.join());

var colors = [1, 2],
  queries = [[0, 3]];
var expected = [-1];
var result = shortestDistanceColor(colors, queries);
console.log(result, result.join() === expected.join());
