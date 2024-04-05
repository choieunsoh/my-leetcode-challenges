// 364. Nested List Weight Sum II
// https://leetcode.com/problems/nested-list-weight-sum-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function (nestedList) {
  let sum = 0;
  let maxDepth = 1;
  let queue = nestedList.map((list) => [list, 1]);
  const values = [];
  while (queue.length) {
    const newQueue = [];
    for (const [list, depth] of queue) {
      maxDepth = Math.max(maxDepth, depth);
      if (list.isInteger()) {
        const value = list.getInteger();
        values.push([value, depth]);
        continue;
      }

      for (const nested of list.getList()) {
        newQueue.push([nested, depth + 1]);
      }
    }
    queue = newQueue;
  }

  for (const [value, depth] of values) {
    sum += (maxDepth - depth + 1) * value;
  }
  return sum;
};

var nestedList = [[1, 1], 2, [1, 1]];
var expected = 8;
var result = depthSumInverse(nestedList);
console.log(result, result === expected);

var nestedList = [1, [4, [6]]];
var expected = 17;
var result = depthSumInverse(nestedList);
console.log(result, result === expected);
