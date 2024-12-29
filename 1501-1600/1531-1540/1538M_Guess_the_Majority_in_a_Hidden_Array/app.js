// 1538. Guess the Majority in a Hidden Array
// https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares 4 different elements in the array
 *     // return 4 if the values of the 4 elements are the same (0 or 1).
 *     // return 2 if three elements have a value equal to 0 and one element has value equal to 1 or vice versa.
 *     // return 0 : if two element have a value equal to 0 and two elements have a value equal to 1.
 *     @param {number} a, b, c, d
 *     @return {number}
 *     this.query = function(a, b, c, d) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var guessMajority = function (reader) {
  const n = reader.length();
  let cntEqual = 1;
  let cntDiffer = 0;
  let indexDiffer = -1;

  let query0123 = reader.query(0, 1, 2, 3);
  let query1234 = reader.query(1, 2, 3, 4);
  f(query1234 == query0123, 4);
  for (let i = 5; i < n; i++) {
    f(reader.query(1, 2, 3, i) === query0123, i);
  }
  f(reader.query(0, 2, 3, 4) === query1234, 1);
  f(reader.query(0, 1, 3, 4) === query1234, 2);
  f(reader.query(0, 1, 2, 4) === query1234, 3);
  return cntEqual > cntDiffer ? 0 : cntDiffer > cntEqual ? indexDiffer : -1;

  function f(equal, i) {
    if (equal) {
      cntEqual++;
    } else {
      cntDiffer++;
      indexDiffer = i;
    }
  }
};

var nums = [0, 0, 1, 0, 1, 1, 1, 1];
var expected = 5;
var result = guessMajority(nums);
console.log(result, result === expected);

var nums = [0, 0, 1, 1, 0];
var expected = 0;
var result = guessMajority(nums);
console.log(result, result === expected);

var nums = [1, 0, 1, 0, 1, 0, 1, 0];
var expected = -1;
var result = guessMajority(nums);
console.log(result, result === expected);
