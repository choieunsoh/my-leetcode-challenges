// 71. Simplify Path
// https://leetcode.com/problems/simplify-path/
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const paths = path.split('/');
  const stack = [];
  for (const path of paths) {
    if (path === '' || path === '.') continue;
    if (path === '..') {
      stack.pop();
    } else {
      stack.push(path);
    }
  }
  return '/' + stack.join('/');
};

var path = '/home/';
var expected = '/home';
var result = simplifyPath(path);
console.log(result, result === expected);

var path = '/../';
var expected = '/';
var result = simplifyPath(path);
console.log(result, result === expected);

var path = '/home//foo/';
var expected = '/home/foo';
var result = simplifyPath(path);
console.log(result, result === expected);

var path = '/.../';
var expected = '/...';
var result = simplifyPath(path);
console.log(result, result === expected);

var path = '/...///a/';
var expected = '/.../a';
var result = simplifyPath(path);
console.log(result, result === expected);

var path = '/a/./b/../../c/';
var expected = '/c';
var result = simplifyPath(path);
console.log(result, result === expected);

var path = '/a/../../b/../c//.//';
var expected = '/c';
var result = simplifyPath(path);
console.log(result, result === expected);
