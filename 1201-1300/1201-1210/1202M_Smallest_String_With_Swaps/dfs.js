// 1202. Smallest String With Swaps
// https://leetcode.com/problems/smallest-string-with-swaps/
// T.C.: O(E + V log V)
// S.C.: O(E + V)
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const n = s.length;
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of pairs) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(n).fill(false);
  const result = [];
  for (let vertex = 0; vertex < n; vertex++) {
    // If not covered in the DFS yet
    if (!visited[vertex]) {
      const characters = [];
      const indices = [];

      dfs(s, vertex, characters, indices);
      // Sort the list of characters and indices
      characters.sort();
      indices.sort((a, b) => a - b);

      // Store the sorted characters corresponding to the index
      for (let index = 0; index < characters.length; index++) {
        result[indices[index]] = characters[index];
      }
    }
  }
  return result.join('');

  function dfs(s, vertex, characters, indices) {
    // Add the character and index to the list
    characters.push(s.charAt(vertex));
    indices.push(vertex);

    visited[vertex] = true;

    // Traverse the neighbors
    for (const neighbor of graph[vertex]) {
      if (!visited[neighbor]) {
        dfs(s, neighbor, characters, indices);
      }
    }
  }
};

var s = 'dcab',
  pairs = [
    [0, 3],
    [1, 2],
  ];
var expected = 'bacd';
var result = smallestStringWithSwaps(s, pairs);
console.log(result, result === expected);

var s = 'dcab',
  pairs = [
    [0, 3],
    [1, 2],
    [0, 2],
  ];
var expected = 'abcd';
var result = smallestStringWithSwaps(s, pairs);
console.log(result, result === expected);

var s = 'cba',
  pairs = [
    [0, 1],
    [1, 2],
  ];
var expected = 'abc';
var result = smallestStringWithSwaps(s, pairs);
console.log(result, result === expected);
