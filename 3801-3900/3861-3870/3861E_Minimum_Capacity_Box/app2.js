// 3861. Minimum Capacity Box
// https://leetcode.com/problems/minimum-capacity-box/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function (capacity, itemSize) {
  let best = -1;
  for (let i = 0; i < capacity.length; i++) {
    if (capacity[i] >= itemSize && (best === -1 || capacity[best] - itemSize > capacity[i] - itemSize)) {
      best = i;
    }
  }
  return best;
};

var capacity = [1, 5, 3, 7],
  itemSize = 3;
var expected = 2;
var result = minimumIndex(capacity, itemSize);
console.log(result, result === expected);

var capacity = [3, 5, 4, 3],
  itemSize = 2;
var expected = 0;
var result = minimumIndex(capacity, itemSize);
console.log(result, result === expected);

var capacity = [4],
  itemSize = 5;
var expected = -1;
var result = minimumIndex(capacity, itemSize);
console.log(result, result === expected);
