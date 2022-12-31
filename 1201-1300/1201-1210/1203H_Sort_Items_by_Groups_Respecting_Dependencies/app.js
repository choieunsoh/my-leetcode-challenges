// 1203. Sort Items by Groups Respecting Dependencies
// https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function (n, m, group, beforeItems) {
  const groupGraph = new Map();
  const itemGraph = new Map();

  // Each item belongs to a group. If an item doesn't have a group it forms it's own isolated group.
  for (let i = 0; i < group.length; i++) {
    if (group[i] === -1) group[i] = m++;
  }

  for (let i = 0; i < m; i++) {
    groupGraph.set(i, []);
  }

  for (let i = 0; i < n; i++) {
    itemGraph.set(i, []);
  }

  const groupsIndegree = Array(m).fill(0);
  const itemsIndegree = Array(n).fill(0);

  // form graph structure across different groups and also calculate indegree.
  buildGraphOfGroups(group, beforeItems, n);

  // form graph structure across different items and also calculate indegree.
  buildGraphOfItems(beforeItems, n);

  // Topological ordering of the groups.
  const groupsList = topologicalSortUtil(groupGraph, groupsIndegree, m);
  // Topological ordering of the items.
  const itemsList = topologicalSortUtil(itemGraph, itemsIndegree, n);

  // Detect if there are any cycles.
  if (groupsList.length === 0 || itemsList.length === 0) return [];

  // This Map holds relative order of items in the same group computed in the loop below.
  const groupsToItems = new Map();

  for (const item of itemsList) {
    const temp = groupsToItems.get(group[item]) ?? [];
    temp.push(item);
    groupsToItems.set(group[item], temp);
  }

  const result = [];
  let index = 0;
  for (const grp of groupsList) {
    const items = groupsToItems.get(grp) ?? [];
    for (const item of items) {
      result[index++] = item;
    }
  }

  return result;

  function buildGraphOfGroups(group, beforeItems, n) {
    for (let i = 0; i < group.length; i++) {
      const toGroup = group[i];
      const fromItems = beforeItems[i];
      for (const fromItem of fromItems) {
        const fromGroup = group[fromItem];
        if (fromGroup !== toGroup) {
          const temp = groupGraph.get(fromGroup) ?? [];
          temp.push(toGroup);
          groupGraph.set(fromGroup, temp);
          groupsIndegree[toGroup]++;
        }
      }
    }
  }

  function buildGraphOfItems(beforeItems, n) {
    for (let i = 0; i < n; i++) {
      const items = beforeItems[i] ?? [];
      for (const item of items) {
        const temp = itemGraph.get(item) ?? [];
        temp.push(i);
        itemGraph.set(item, temp);
        itemsIndegree[i]++;
      }
    }
  }

  function topologicalSortUtil(graph, indegree, n) {
    const list = [];
    const queue = [];
    for (const [key] of graph) {
      if (indegree[key] === 0) {
        queue.push(key);
      }
    }

    while (queue.length) {
      const node = queue.shift();
      n--;
      list.push(node);
      for (const neighbor of graph.get(node) ?? []) {
        indegree[neighbor]--;
        if (indegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }
    return n === 0 ? list : [];
  }
};

var n = 8,
  m = 2,
  group = [-1, -1, 1, 0, 0, 1, 0, -1],
  beforeItems = [[], [6], [5], [6], [3, 6], [], [], []];
var expected = [6, 3, 4, 5, 2, 0, 7, 1];
var result = sortItems(n, m, group, beforeItems);
console.log(result, result.join() === expected.join());

var n = 8,
  m = 2,
  group = [-1, -1, 1, 0, 0, 1, 0, -1],
  beforeItems = [[], [6], [5], [6], [3], [], [4], []];
var expected = [];
var result = sortItems(n, m, group, beforeItems);
console.log(result, result.join() === expected.join());
