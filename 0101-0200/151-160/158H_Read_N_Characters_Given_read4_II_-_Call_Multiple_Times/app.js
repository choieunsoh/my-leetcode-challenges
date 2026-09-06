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
  let leftover = [];
  let leftoverIdx = 0;

  return function (buf, n) {
    let count = 0;

    while (count < n) {
      if (leftoverIdx < leftover.length) {
        buf[count] = leftover[leftoverIdx];

        count += 1;
        leftoverIdx += 1;

        continue;
      }

      const buf4 = new Array(4);
      const size = read4(buf4);

      if (size === 0) {
        break;
      }

      leftover = buf4;
      leftoverIdx = 0;
    }

    return count;
  };
};

var file = 'abc',
  queries = [1, 2, 1];
var expected = [1, 2, 0];
var result = solution(read4);

var file = 'abc',
  queries = [4, 1];
var expected = [3, 0];
