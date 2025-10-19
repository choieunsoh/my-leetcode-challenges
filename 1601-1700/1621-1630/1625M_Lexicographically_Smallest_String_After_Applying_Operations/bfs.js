// 1625. Lexicographically Smallest String After Applying Operations
// https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  const visited = new Set([s]);
  let smallest = s;
  const q = [s];

  while (q.length) {
    const cur = q.shift();
    if (cur < smallest) smallest = cur;

    const arr = cur.split('');
    for (let i = 1; i < arr.length; i += 2) {
      arr[i] = ((+arr[i] + a) % 10).toString();
    }

    const added = arr.join('');
    if (!visited.has(added)) {
      visited.add(added);
      q.push(added);
    }

    const rotated = cur.slice(-b) + cur.slice(0, -b);
    if (!visited.has(rotated)) {
      visited.add(rotated);
      q.push(rotated);
    }
  }
  return smallest;
};

var s = '5525',
  a = 9,
  b = 2;
var expected = '2050';
var result = findLexSmallestString(s, a, b);
console.log(result, result === expected);

var s = '74',
  a = 5,
  b = 1;
var expected = '24';
var result = findLexSmallestString(s, a, b);
console.log(result, result === expected);

var s = '0011',
  a = 4,
  b = 2;
var expected = '0011';
var result = findLexSmallestString(s, a, b);
console.log(result, result === expected);
