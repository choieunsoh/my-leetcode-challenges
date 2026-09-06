// 158. Read N Characters Given read4 II - Call Multiple Times
// https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/description/
// T.C.: O()
// S.C.: O()
/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
  // We don't have access to the actual source file, so we will use a queue to
  // represent the reading of a copy (imagine read4 is a diligent scholar who, very nicely,
  // copies a text for us in pieces, which we "read" from start to end and then request
  // another piece once we are done)
  this.read4Queue = new Array();
  const _self = this;

  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function (buf, n) {
    let counter = 0;
    while (counter < n) {
      // if our queue is empty, we need to retrieve another batch from the source file
      if (!_self.read4Queue.length) {
        let size = read4(_self.read4Queue);
        if (size == 0) {
          break; // if our copy comes back empty, we have reached the end of the file!
        }
      } else {
        // we read the first character from our copy and add it to our buffer
        buf.push(_self.read4Queue.shift());
        counter++;
      }
    }
    return counter;
  };
};

var file = 'abc',
  queries = [1, 2, 1];
var expected = [1, 2, 0];
var result = solution(read4);

var file = 'abc',
  queries = [4, 1];
var expected = [3, 0];
