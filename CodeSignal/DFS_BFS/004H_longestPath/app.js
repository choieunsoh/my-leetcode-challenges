// longestPath
// LC-388. Longest Absolute File Path
// https://leetcode.com/problems/longest-absolute-file-path/
/**
 * @param {string} fileSystem
 * @return {number}
 */
function longestPath(fileSystem) {
  let result = 0;
  const paths = fileSystem.split('\f');
  const stack = [0];
  for (const path of paths) {
    const p = path.split('\t');
    const depth = p.length;
    const name = p[p.length - 1];
    while (stack.length > depth) {
      stack.pop();
    }

    const lastLength = stack[stack.length - 1];
    if (name.includes('.')) {
      result = Math.max(result, lastLength + name.length);
    } else {
      stack.push(lastLength + name.length + 1);
    }
    //console.log(p, depth, name, lastLength, stack, result);
  }
  return result;
}

var fileSystem = 'user\f\tpictures\f\tdocuments\f\t\tnotes.txt';
var expected = 24;
var result = longestPath(fileSystem);
console.log(result, result === expected);

var fileSystem = 'user\f\tpictures\f\t\tphoto.png\f\t\tcamera\f\tdocuments\f\t\tlectures\f\t\t\tnotes.txt';
var expected = 33;
var result = longestPath(fileSystem);
console.log(result, result === expected);
