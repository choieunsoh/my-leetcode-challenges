// 2438. Range Product Queries of Powers
// https://leetcode.com/problems/range-product-queries-of-powers/description/
// T.C.: O(q + log^2 n)
// S.C.: O(log^2 n)
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
  const mod = 1e9 + 7;
  const powers = buildPowerOf2(n);
  const m = powers.length;
  const results = Array.from({ length: m }, () => new Array(m));
  for (let i = 0; i < m; i++) {
    let cur = 1;
    for (let j = i; j < m; j++) {
      cur = (cur * powers[j]) % mod;
      results[i][j] = cur;
    }
  }

  const result = [];
  for (const [start, end] of queries) {
    result.push(results[start][end]);
  }
  return result;

  function buildPowerOf2(n) {
    const powers = [];
    let base = 1;
    while (n > 0) {
      if (n % 2 === 1) {
        powers.push(base);
      }
      n = Math.floor(n / 2);
      base *= 2;
    }
    return powers;
  }
};

var n = 15,
  queries = [
    [0, 1],
    [2, 2],
    [0, 3],
  ];
var expected = [2, 4, 64];
var result = productQueries(n, queries);
console.log(result, result.join() === expected.join());

var n = 2,
  queries = [[0, 0]];
var expected = [2];
var result = productQueries(n, queries);
console.log(result, result.join() === expected.join());
