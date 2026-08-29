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
  const totalElements = nums.length;
  const indexedOriginalPositions = new Array(totalElements).fill(0).map((_elementValue, originalPos) => originalPos);
  indexedOriginalPositions.sort((indexOne, indexTwo) => nums[indexOne] - nums[indexTwo]);

  const finalResult = new Array(totalElements).fill(0);
  let groupStartingIndex = 0;

  while (groupStartingIndex < totalElements) {
    let groupEndingPointer = groupStartingIndex + 1;

    while (
      groupEndingPointer < totalElements &&
      nums[indexedOriginalPositions[groupEndingPointer]] - nums[indexedOriginalPositions[groupEndingPointer - 1]] <=
        limit
    ) {
      groupEndingPointer++;
    }

    const currentGroupOriginalIndices = indexedOriginalPositions.slice(groupStartingIndex, groupEndingPointer);
    currentGroupOriginalIndices.sort((posOne, posTwo) => posOne - posTwo);

    for (let elementOffset = 0; elementOffset < currentGroupOriginalIndices.length; elementOffset++) {
      finalResult[currentGroupOriginalIndices[elementOffset]] =
        nums[indexedOriginalPositions[groupStartingIndex + elementOffset]];
    }
    groupStartingIndex = groupEndingPointer;
  }

  return finalResult;
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
