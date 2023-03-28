// 388. Longest Absolute File Path
// https://leetcode.com/problems/longest-absolute-file-path/
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  let result = 0;
  const backslashLength = 1;
  const paths = input.split('\n');
  const stack = [0]; // length
  for (const path of paths) {
    const p = path.split('\t');
    const depth = p.length;
    const name = p[depth - 1];
    while (stack.length > depth) stack.pop();

    const pathLength = stack[stack.length - 1];
    const fileLength = name.length;
    if (name.includes('.')) {
      result = Math.max(result, pathLength + fileLength);
    } else {
      stack.push(pathLength + fileLength + backslashLength);
    }
  }
  return result;
};

var input = 'dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext';
var expected = 20;
var result = lengthLongestPath(input);
console.log(result, result === expected);

var input = 'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext';
var expected = 32;
var result = lengthLongestPath(input);
console.log(result, result === expected);

var input = 'a';
var expected = 0;
var result = lengthLongestPath(input);
console.log(result, result === expected);
