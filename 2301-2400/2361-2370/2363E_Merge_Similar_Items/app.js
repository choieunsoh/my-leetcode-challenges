// 2363. Merge Similar Items
// https://leetcode.com/problems/merge-similar-items/
// T.C.: O(m+n)
// S.C.: O(1)
/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const result = [];
  const counts = new Array(1001).fill(0);
  for (const [value, count] of items1) {
    counts[value] += count;
  }
  for (const [value, count] of items2) {
    counts[value] += count;
  }
  for (let i = 1; i < counts.length; i++) {
    if (counts[i] > 0) {
      result.push([i, counts[i]]);
    }
  }
  return result;
};

var items1 = [
    [1, 1],
    [4, 5],
    [3, 8],
  ],
  items2 = [
    [3, 1],
    [1, 5],
  ];
var expected = [
  [1, 6],
  [3, 9],
  [4, 5],
];
var result = mergeSimilarItems(items1, items2);
console.log(result, result.join() === expected.join());

var items1 = [
    [1, 1],
    [3, 2],
    [2, 3],
  ],
  items2 = [
    [2, 1],
    [3, 2],
    [1, 3],
  ];
var expected = [
  [1, 4],
  [2, 4],
  [3, 4],
];
var result = mergeSimilarItems(items1, items2);
console.log(result, result.join() === expected.join());

var items1 = [
    [1, 3],
    [2, 2],
  ],
  items2 = [
    [7, 1],
    [2, 2],
    [1, 4],
  ];
var expected = [
  [1, 7],
  [2, 4],
  [7, 1],
];
var result = mergeSimilarItems(items1, items2);
console.log(result, result.join() === expected.join());
