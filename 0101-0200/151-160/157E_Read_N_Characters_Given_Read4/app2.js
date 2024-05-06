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
    let copiedChars = 0;
    let readChars = 4;
    const buf4 = [];
    while (copiedChars < n && readChars === 4) {
      readChars = read4(buf4);
      for (let i = 0; i < readChars; ++i) {
        if (copiedChars === n) return copiedChars;
        buf[copiedChars] = buf4[i];
        copiedChars++;
      }
    }
    return copiedChars;
  };
};
