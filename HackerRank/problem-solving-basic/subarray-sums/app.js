// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} numbers
 * @param {number[][]} queries
 * @return {number[]}
 */
function findSum(numbers, queries) {
  const n = numbers.length;
  const prefixSum = new Array(n + 1).fill(0);
  const zeroCount = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + numbers[i];
    zeroCount[i + 1] = zeroCount[i] + (numbers[i] === 0 ? 1 : 0);
  }

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [left, right, k] = queries[i];
    result[i] = prefixSum[right] - prefixSum[left - 1];
    const zeros = zeroCount[right] - zeroCount[left - 1];
    result[i] += k * zeros;
  }
  return result;
}

var numbers = [20, 30, 0, 10],
  queries = [[1, 3, 10]];
var expected = [60];
var result = findSum(numbers, queries);
console.log(result, result.join() === expected.join());

var numbers = [5, 10, 10],
  queries = [[1, 2, 5]];
var expected = [15];
var result = findSum(numbers, queries);
console.log(result, result.join() === expected.join());

var numbers = [-5, 0],
  queries = [
    [2, 2, 20],
    [1, 2, 10],
  ];
var expected = [20, 5];
var result = findSum(numbers, queries);
console.log(result, result.join() === expected.join());
