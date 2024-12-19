// 769. Max Chunks To Make Sorted
// https://leetcode.com/problems/max-chunks-to-make-sorted/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (stack.length === 0 || num >= stack[stack.length - 1]) {
      stack.push(num);
    } else {
      const max = stack.pop();
      while (stack.length && stack[stack.length - 1] > num) {
        stack.pop();
      }
      stack.push(max);
    }
  }
  return stack.length;
};

var arr = [4, 3, 2, 1, 0];
var expected = 1;
var result = maxChunksToSorted(arr);
console.log(result, result === expected);

var arr = [1, 0, 2, 3, 4];
var expected = 4;
var result = maxChunksToSorted(arr);
console.log(result, result === expected);
