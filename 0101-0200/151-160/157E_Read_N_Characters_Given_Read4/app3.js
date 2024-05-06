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
    let remainingChars = n;
    while (remainingChars >= 4 && readChars == 4) {
      const tempBuf = new Array[4]();
      readChars = read4(tempBuf);
      for (let i = 0; i < readChars; i++) {
        buf[copiedChars + i] = tempBuf[i];
      }
      copiedChars += readChars;
    }

    if (remainingChars > 0 && readChars !== 0) {
      const tempBuf = new Array[4]();
      readChars = read4(tempBuf);

      for (let i = 0; i < Math.min(remainingChars, readChars); i++) {
        buf[copiedChars++] = tempBuf[i];
      }
    }

    return Math.min(n, copiedChars);
  };
};
