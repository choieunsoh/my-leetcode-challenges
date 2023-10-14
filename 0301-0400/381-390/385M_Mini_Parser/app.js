// 385. Mini Parser
// https://leetcode.com/problems/mini-parser/
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
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  const input = JSON.parse(s);
  return dfs(input);

  function dfs(input) {
    if (Number.isInteger(input)) {
      return new NestedInteger(input);
    }

    const nested = new NestedInteger();
    for (const value of input) {
      nested.add(dfs(value));
    }
    return nested;
  }
};

var s = '324';
var expected = 324;
var result = deserialize(s);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var s = '[123,[456,[789]]]';
var expected = [123, [456, [789]]];
var result = deserialize(s);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
