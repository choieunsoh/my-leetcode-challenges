// sumSubsets
/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[][]}
 */
function sumSubsets(arr, num) {
  const seen = new Set();
  const n = arr.length;
  const result = [];
  dfs(0, 0, []);
  return result;

  function dfs(index, sum, part) {
    if (sum === num) {
      const key = part.join();
      if (!seen.has(key)) {
        result.push([...part]);
        seen.add(key);
      }
      return;
    }

    for (let i = index; i < n; i++) {
      if (sum + arr[i] > num) break;
      dfs(i + 1, sum + arr[i], [...part, arr[i]]);
    }
  }
}

var arr = [1, 2, 3, 4, 5],
  num = 5;
var expected = [[1, 4], [2, 3], [5]];
var result = sumSubsets(arr, num);
console.log(result, result.join() === expected.join());

var arr = [1, 1, 2, 2, 2, 5, 5, 6, 8, 8],
  num = 9;
var expected = [
  [1, 1, 2, 5],
  [1, 2, 6],
  [1, 8],
  [2, 2, 5],
];
var result = sumSubsets(arr, num);
console.log(result, result.join() === expected.join());
