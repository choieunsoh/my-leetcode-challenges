// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} parents
 * @param {number[]} filesSize
 * @return {number}
 */
function mostBalancedPartition(parents, filesSize) {
  const totalSize = filesSize.reduce((sum, size) => sum + size, 0);
  const n = parents.length;
  const subtreeSizes = new Array(n).fill(0);
  const graph = Array.from({ length: n }, () => []);
  for (let node = 1; node < n; node++) {
    graph[parents[node]].push(node);
    graph[node].push(parents[node]);
  }

  calculateSubtreeSizes(0, -1);

  let minSizeDiff = Number.MAX_SAFE_INTEGER;
  for (let node = 1; node < n; node++) {
    const currentSize = subtreeSizes[node];
    const anotherSize = totalSize - currentSize;
    const sizeDiff = Math.abs(currentSize - anotherSize);
    minSizeDiff = Math.min(minSizeDiff, sizeDiff);
    if (minSizeDiff === 0) return minSizeDiff;
  }
  return minSizeDiff;

  function calculateSubtreeSizes(node, parent) {
    subtreeSizes[node] = filesSize[node];
    for (const child of graph[node]) {
      if (child === parent) continue;
      subtreeSizes[node] += calculateSubtreeSizes(child, node);
    }
    return subtreeSizes[node];
  }
}

var parent = [-1, 0, 0, 1, 1, 2],
  filesSize = [1, 2, 2, 1, 1, 1];
var expected = 0;
var result = mostBalancedPartition(parent, filesSize);
console.log(result, result === expected);

var parent = [-1, 0, 1, 2],
  filesSize = [1, 4, 3, 4];
var expected = 2;
var result = mostBalancedPartition(parent, filesSize);
console.log(result, result === expected);

var parent = [-1, 0, 0, 0],
  filesSize = [10, 11, 10, 10];
var expected = 19;
var result = mostBalancedPartition(parent, filesSize);
console.log(result, result === expected);
