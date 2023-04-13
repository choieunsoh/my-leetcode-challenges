// 946. Validate Stack Sequences
// https://leetcode.com/problems/validate-stack-sequences/
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  const n = pushed.length;
  let i = 0;
  let j = 0;
  while (i < n && j < n) {
    stack.push(pushed[i++]);
    while (stack.length && j < n && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }
  return stack.length === 0;
};

var pushed = [1, 2, 3, 4, 5],
  popped = [4, 5, 3, 2, 1];
var expected = true;
var result = validateStackSequences(pushed, popped);
console.log(result, result === expected);

var pushed = [1, 2, 3, 4, 5],
  popped = [4, 3, 5, 1, 2];
var expected = false;
var result = validateStackSequences(pushed, popped);
console.log(result, result === expected);
