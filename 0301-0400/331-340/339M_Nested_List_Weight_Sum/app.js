// 339. Nested List Weight Sum
// https://leetcode.com/problems/nested-list-weight-sum/description/
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
var depthSum = function (nestedList) {
  let result = 0;
  let level = 1;
  let queue = [...nestedList];
  while (queue.length) {
    let newQueue = [];
    for (const list of queue) {
      if (list.isInteger()) {
        result += level * list.getInteger();
      } else {
        newQueue.push(...list.getList());
      }
    }
    level++;
    queue = newQueue;
  }
  return result;
};

var nestedList = [[1, 1], 2, [1, 1]];
var expected = 10;
var result = depthSum(nestedList);
console.log(result, result === expected);

var nestedList = [1, [4, [6]]];
var expected = 27;
var result = depthSum(nestedList);
console.log(result, result === expected);

var nestedList = [0];
var expected = 0;
var result = depthSum(nestedList);
console.log(result, result === expected);
