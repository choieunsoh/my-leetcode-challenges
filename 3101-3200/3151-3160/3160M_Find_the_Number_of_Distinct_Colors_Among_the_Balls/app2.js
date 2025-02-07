// 3160. Find the Number of Distinct Colors Among the Balls
// https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/description/
// T.C.: O(n)
// S.C.: O(n+m)
/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  const n = queries.length;
  const result = new Array(n);
  const colorMap = new Map();
  const ballArray = new Array(limit + 1).fill(0);
  for (let i = 0; i < n; i++) {
    const [ball, color] = queries[i];
    if (ballArray[ball] !== 0) {
      const prevColor = ballArray[ball];
      colorMap.set(prevColor, colorMap.get(prevColor) - 1);

      if (colorMap.get(prevColor) === 0) {
        colorMap.delete(prevColor);
      }
    }

    ballArray[ball] = color;
    colorMap.set(color, (colorMap.get(color) ?? 0) + 1);

    result[i] = colorMap.size;
  }

  return result;
};

var limit = 4,
  queries = [
    [1, 4],
    [2, 5],
    [1, 3],
    [3, 4],
  ];
var expected = [1, 2, 2, 3];
var result = queryResults(limit, queries);
console.log(result, result.join() === expected.join());

var limit = 4,
  queries = [
    [0, 1],
    [1, 2],
    [2, 2],
    [3, 4],
    [4, 5],
  ];
var expected = [1, 2, 2, 3, 4];
var result = queryResults(limit, queries);
console.log(result, result.join() === expected.join());
