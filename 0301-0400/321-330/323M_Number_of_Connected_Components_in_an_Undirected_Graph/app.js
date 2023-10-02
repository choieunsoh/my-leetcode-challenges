// 323. Number of Connected Components in an Undirected Graph
// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph
// T.C.: O(E+V)
// S.C.: O(E+V)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  for (let i = 0; i < edges.length; i++) {
    const root1 = findParent(arr, edges[i][0]);
    const root2 = findParent(arr, edges[i][1]);
    if (root1 != root2) {
      arr[root1] = arr[root2];
      //Every connection we make we have 1 less component.
      n--;
    }
  }
  return n;
};

function findParent(arr, num) {
  let parent = arr[num];
  while (parent != num) {
    arr[num] = arr[parent];
    num = parent;
    parent = arr[parent];
    //set current to parent to improve next find run time.
    arr[num] = parent;
  }
  return parent;
}

var n = 5,
  edges = [
    [0, 1],
    [1, 2],
    [3, 4],
  ];
var expected = 2;
var result = countComponents(n, edges);
console.log(result, result === expected);

var n = 5,
  edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ];
var expected = 1;
var result = countComponents(n, edges);
console.log(result, result === expected);
