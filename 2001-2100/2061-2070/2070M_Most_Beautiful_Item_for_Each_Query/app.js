// 2070. Most Beautiful Item for Each Query
// https://leetcode.com/problems/most-beautiful-item-for-each-query/description/
// T.C.: O((n + q) * log n)
// S.C.: O(n)
/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
  const itemsMap = new Map();
  for (const [price, beauty] of items) {
    const maxBeauty = itemsMap.get(price) ?? 0;
    itemsMap.set(price, Math.max(maxBeauty, beauty));
  }

  const sortedItems = [...itemsMap.entries()].sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < sortedItems.length - 1; i++) {
    if (sortedItems[i][1] > sortedItems[i + 1][1]) {
      sortedItems[i + 1][1] = sortedItems[i][1];
    }
  }

  const n = queries.length;
  const result = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const targetPrice = queries[i];
    let left = 0;
    let right = sortedItems.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (sortedItems[mid][0] <= targetPrice) {
        result[i] = sortedItems[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return result;
};

var items = [
    [1, 2],
    [3, 2],
    [2, 4],
    [5, 6],
    [3, 5],
  ],
  queries = [1, 2, 3, 4, 5, 6];
var expected = [2, 4, 5, 5, 6, 6];
var result = maximumBeauty(items, queries);
console.log(result, result.join() === expected.join());

var items = [
    [1, 2],
    [1, 2],
    [1, 3],
    [1, 4],
  ],
  queries = [1];
var expected = [4];
var result = maximumBeauty(items, queries);
console.log(result, result.join() === expected.join());

var items = [[10, 1000]],
  queries = [5];
var expected = [0];
var result = maximumBeauty(items, queries);
console.log(result, result.join() === expected.join());

var items = [
    [193, 732],
    [781, 962],
    [864, 954],
    [749, 627],
    [136, 746],
    [478, 548],
    [640, 908],
    [210, 799],
    [567, 715],
    [914, 388],
    [487, 853],
    [533, 554],
    [247, 919],
    [958, 150],
    [193, 523],
    [176, 656],
    [395, 469],
    [763, 821],
    [542, 946],
    [701, 676],
  ],
  queries = [885, 1445, 1580, 1309, 205, 1788, 1214, 1404, 572, 1170, 989, 265, 153, 151, 1479, 1180, 875, 276, 1584];
var expected = [962, 962, 962, 962, 746, 962, 962, 962, 946, 962, 962, 919, 746, 746, 962, 962, 962, 919, 962];
var result = maximumBeauty(items, queries);
console.log(result, result.join() === expected.join());
