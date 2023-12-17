// 2865. Beautiful Towers I
// https://leetcode.com/problems/beautiful-towers-i/description/
// T.O.: O(n)
// S.O.: O(n)
/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (maxHeights) {
  const n = maxHeights.length;
  const stack = [];
  const left = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    while (stack.length && maxHeights[stack[stack.length - 1]] >= maxHeights[i]) {
      stack.pop();
    }

    if (stack.length) {
      const lastIndex = stack[stack.length - 1];
      const currentRange = i - lastIndex;
      left[i] = left[lastIndex] + maxHeights[i] * currentRange;
    } else {
      left[i] = maxHeights[i] * (i + 1);
    }

    stack.push(i);
  }

  let result = 0;
  stack.length = 0;
  const right = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && maxHeights[stack[stack.length - 1]] >= maxHeights[i]) {
      stack.pop();
    }

    if (stack.length) {
      const lastIndex = stack[stack.length - 1];
      const currentRange = lastIndex - i;
      right[i] = right[lastIndex] + maxHeights[i] * currentRange;
    } else {
      right[i] = maxHeights[i] * (n - i);
    }

    stack.push(i);

    result = Math.max(result, left[i] + right[i] - maxHeights[i]);
  }

  return result;
};

var maxHeights = [5, 3, 4, 1, 1];
var expected = 13;
var result = maximumSumOfHeights(maxHeights);
console.log(result, result === expected);

var maxHeights = [6, 5, 3, 9, 2, 7];
var expected = 22;
var result = maximumSumOfHeights(maxHeights);
console.log(result, result === expected);

var maxHeights = [3, 2, 5, 5, 2, 3];
var expected = 18;
var result = maximumSumOfHeights(maxHeights);
console.log(result, result === expected);

// 6:58
var maxHeights = [3, 6, 3, 5, 5, 1, 2, 5, 5, 6];
var expected = 24;
var result = maximumSumOfHeights(maxHeights);
console.log(result, result === expected);

var maxHeights = [5, 2, 4, 4];
var expected = 12;
var result = maximumSumOfHeights(maxHeights);
console.log(result, result === expected);
