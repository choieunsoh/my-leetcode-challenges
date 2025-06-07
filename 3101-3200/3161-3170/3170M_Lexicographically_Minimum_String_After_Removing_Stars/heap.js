// 3170. Lexicographically Minimum String After Removing Stars
// https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
  const pq = new PriorityQueue((a, b) => a[0] - b[0] || b[1] - a[1]);
  const excluded = new Set();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '*') {
      const removed = pq.dequeue();
      excluded.add(removed[1]);
    } else {
      pq.enqueue([ch.charCodeAt(0), i]);
    }
  }

  let result = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch !== '*' && !excluded.has(i)) {
      result += ch;
    }
  }
  return result;
};

var s = 'aaba*';
var expected = 'aab';
var result = clearStars(s);
console.log(result, result === expected);

var s = 'abc';
var expected = 'abc';
var result = clearStars(s);
console.log(result, result === expected);

var s = 'azab**ax*bxbx*';
var expected = 'zbxbxx';
var result = clearStars(s);
console.log(result, result === expected);
