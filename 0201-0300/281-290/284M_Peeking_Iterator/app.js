// 284. Peeking Iterator
// https://leetcode.com/problems/peeking-iterator/
// T.C.: O(1)
// S.C.: O(1)
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.peeked = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (!this.peeked) {
    this.peeked = this.iterator.next();
  }
  return this.peeked;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (this.peeked) {
    const next = this.peeked;
    this.peeked = null;
    return next;
  }
  return this.iterator.next();
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  if (this.peeked) {
    return true;
  }
  return this.iterator.hasNext();
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
/*
Input
["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
[[[1, 2, 3]], [], [], [], [], []]
Output
[null, 1, 2, 2, 3, false]
*/
