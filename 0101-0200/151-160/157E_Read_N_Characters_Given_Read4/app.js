// 157. Read N Characters Given Read4
// https://leetcode.com/problems/read-n-characters-given-read4/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function (buf, n) {
    const buf4 = [];
    while (buf4.length < n) {
      const readChars = read4(buf4);
      for (let i = 0; i < readChars && buf.length < n; i++) {
        buf.push(buf4[i]);
      }
      if (readChars < 4) {
        break;
      }
    }
    return buf.length;
  };
};
