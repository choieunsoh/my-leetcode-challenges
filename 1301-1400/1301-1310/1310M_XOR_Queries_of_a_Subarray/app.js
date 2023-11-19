// 1310. XOR Queries of a Subarray
// https://leetcode.com/problems/xor-queries-of-a-subarray/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  const xor = new Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    xor[i + 1] = xor[i] ^ arr[i];
  }

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    result[i] = xor[start] ^ xor[end + 1];
  }
  return result;
};

var arr = [1, 3, 4, 8],
  queries = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 3],
  ];
var expected = [2, 7, 14, 8];
var result = xorQueries(arr, queries);
console.log(result, result.join() === expected.join());

var arr = [4, 8, 2, 10],
  queries = [
    [2, 3],
    [1, 3],
    [0, 0],
    [0, 3],
  ];
var expected = [8, 0, 4, 4];
var result = xorQueries(arr, queries);
console.log(result, result.join() === expected.join());

var arr = [15, 8, 8, 8, 15],
  queries = [
    [2, 2],
    [3, 3],
  ];
var expected = [8, 8];
var result = xorQueries(arr, queries);
console.log(result, result.join() === expected.join());

var arr = [11, 14, 7],
  queries = [[1, 2]];
var expected = [9];
var result = xorQueries(arr, queries);
console.log(result, result.join() === expected.join());
