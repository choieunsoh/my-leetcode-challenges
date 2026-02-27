// 3666. Minimum Operations to Equalize Binary String
// https://leetcode.com/problems/minimum-operations-to-equalize-binary-string/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { AvlTree } = require('@datastructures-js/binary-search-tree');
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minOperations = function (s, k) {
  const n = s.length;
  let m = 0;

  const dist = new Array(n + 1).fill(Infinity);
  const nodeTrees = [new AvlTree(), new AvlTree()];
  for (let i = 0; i <= n; i++) {
    nodeTrees[i % 2].insert(i);
    if (i < n && s[i] === '0') {
      m++;
    }
  }

  const queue = new Array(n + 1);
  let head = 0;
  let tail = 0;
  queue[tail++] = m;

  dist[m] = 0;
  nodeTrees[m % 2].remove(m);

  while (head < tail) {
    const currentM = queue[head++];
    const c1 = Math.max(k - n + currentM, 0);
    const c2 = Math.min(currentM, k);
    const leftNode = currentM + k - 2 * c2;
    const rightNode = currentM + k - 2 * c1;
    const currentTree = nodeTrees[leftNode % 2];
    let node = currentTree.upperBound(leftNode, true);

    while (node !== null) {
      const nodeValue = node.getValue();
      if (nodeValue > rightNode) {
        break;
      }
      dist[nodeValue] = dist[currentM] + 1;
      queue[tail++] = nodeValue;
      const nextNode = currentTree.upperBound(nodeValue, false);
      currentTree.remove(nodeValue);
      node = nextNode;
    }
  }

  return dist[0] === Infinity ? -1 : dist[0];
};

var s = '110',
  k = 1;
var expected = 1;
var result = minOperations(s, k);
console.log(result, result === expected);

var s = '0101',
  k = 3;
var expected = 2;
var result = minOperations(s, k);
console.log(result, result === expected);

var s = '101',
  k = 2;
var expected = -1;
var result = minOperations(s, k);
console.log(result, result === expected);
