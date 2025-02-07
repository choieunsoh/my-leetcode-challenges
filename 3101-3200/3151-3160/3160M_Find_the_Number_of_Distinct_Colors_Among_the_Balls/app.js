// 3160. Find the Number of Distinct Colors Among the Balls
// https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  const ballMap = new Map();
  const colorMap = new Map();
  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [ball, color] = queries[i];
    if (ballMap.has(ball) && ballMap.get(ball) !== color) {
      const prevColor = ballMap.get(ball);
      colorMap.set(prevColor, colorMap.get(prevColor) - 1);
      if (colorMap.get(prevColor) === 0) {
        colorMap.delete(prevColor);
      }
    }

    colorMap.set(color, (colorMap.get(color) ?? 0) + 1);
    ballMap.set(ball, color);

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
