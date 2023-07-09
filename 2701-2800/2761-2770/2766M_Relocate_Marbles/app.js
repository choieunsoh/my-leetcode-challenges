// 2766. Relocate Marbles
// https://leetcode.com/problems/relocate-marbles/
/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function (nums, moveFrom, moveTo) {
  const marbles = new Set(nums);
  for (let i = 0; i < moveFrom.length; i++) {
    marbles.delete(moveFrom[i]);
    marbles.add(moveTo[i]);
  }
  return [...marbles].sort((a, b) => a - b);
};

var nums = [1, 6, 7, 8],
  moveFrom = [1, 7, 2],
  moveTo = [2, 9, 5];
var expected = [5, 6, 8, 9];
var result = relocateMarbles(nums, moveFrom, moveTo);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 3, 3],
  moveFrom = [1, 3],
  moveTo = [2, 2];
var expected = [2];
var result = relocateMarbles(nums, moveFrom, moveTo);
console.log(result, result.join() === expected.join());
