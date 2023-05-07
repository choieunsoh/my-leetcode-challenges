/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function (n, queries) {
  const result = [];
  const nums = new Array(n).fill(0);
  let count = 0;
  for (const [index, color] of queries) {
    if (nums[index]) {
      if (index > 0 && nums[index] === nums[index - 1]) count--;
      if (index < n - 1 && nums[index] === nums[index + 1]) count--;
    }
    nums[index] = color;
    if (index > 0 && nums[index] === nums[index - 1]) count++;
    if (index < n - 1 && nums[index] === nums[index + 1]) count++;
    result.push(count);
  }
  return result;
};

var n = 17,
  queries = [
    [11, 3],
    [5, 1],
    [16, 2],
    [4, 4],
    [5, 1],
    [13, 2],
    [15, 1],
    [15, 3],
    [8, 1],
    [14, 4],
    [1, 3],
    [6, 2],
    [8, 2],
    [2, 2],
    [3, 4],
    [7, 1],
    [10, 2],
    [14, 3],
    [6, 5],
    [3, 5],
    [5, 5],
    [9, 2],
    [2, 3],
    [3, 3],
    [4, 1],
    [12, 1],
    [0, 4],
    [16, 4],
    [8, 1],
    [14, 3],
    [15, 3],
    [12, 1],
    [11, 5],
    [3, 1],
    [2, 4],
    [10, 1],
    [14, 5],
    [15, 5],
    [5, 2],
    [8, 1],
    [6, 5],
    [10, 2],
  ];
var expected = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 1, 2, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 4, 3,
  3, 3, 4,
];
var result = colorTheArray(n, queries);
console.log(result, result.join() === expected.join());
return;
var n = 4,
  queries = [
    [0, 2],
    [1, 2],
    [3, 1],
    [1, 1],
    [2, 1],
  ];
var expected = [0, 1, 1, 0, 2];
var result = colorTheArray(n, queries);
console.log(result, result.join() === expected.join());
