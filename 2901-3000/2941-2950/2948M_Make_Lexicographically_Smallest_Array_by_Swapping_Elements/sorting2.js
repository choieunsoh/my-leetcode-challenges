// 2948. Make Lexicographically Smallest Array by Swapping Elements
// https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  const indexed = nums.map((num, index) => ({ num, index })).sort((a, b) => a.num - b.num);

  const groups = [];
  let currentGroup = [indexed[0]];

  for (let i = 1; i < indexed.length; i++) {
    if (indexed[i].num - indexed[i - 1].num <= limit) {
      currentGroup.push(indexed[i]);
    } else {
      groups.push(currentGroup);
      currentGroup = [indexed[i]];
    }
  }
  groups.push(currentGroup);

  const result = new Array(nums.length);
  for (const group of groups) {
    group.sort((a, b) => a.index - b.index);
    const sortedValues = group.map((x) => x.num).sort((a, b) => a - b);

    for (let i = 0; i < group.length; i++) {
      result[group[i].index] = sortedValues[i];
    }
  }

  return result;
};

var nums = [1, 5, 3, 9, 8],
  limit = 2;
var expected = [1, 3, 5, 8, 9];
var result = lexicographicallySmallestArray(nums, limit);
console.log(result, result.join() === expected.join());

var nums = [1, 7, 6, 18, 2, 1],
  limit = 3;
var expected = [1, 6, 7, 18, 1, 2];
var result = lexicographicallySmallestArray(nums, limit);
console.log(result, result.join() === expected.join());

var nums = [1, 7, 28, 19, 10],
  limit = 3;
var expected = [1, 7, 28, 19, 10];
var result = lexicographicallySmallestArray(nums, limit);
console.log(result, result.join() === expected.join());
