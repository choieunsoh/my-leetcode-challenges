// 2182. Construct String With Repeat Limit
// https://leetcode.com/problems/construct-string-with-repeat-limit/description/
const { PriorityQueue } = require('@datastructures-js/priority-queue');
// T.C.: O(n log k)
// S.C.: O(k)
/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
  const counts = new Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i) - a;
    counts[c]++;
  }

  const pq = new PriorityQueue({ compare: (a, b) => b[0] - a[0] });
  for (let i = 0; i < counts.length; i++) {
    if (counts[i]) {
      pq.enqueue([i, counts[i]]);
    }
  }

  let largestString = '';
  while (!pq.isEmpty()) {
    const [c, count] = pq.dequeue();
    const ch = String.fromCharCode(c + a);
    if (ch === largestString[largestString.length - 1]) {
      if (pq.isEmpty()) {
        break;
      }

      const [nextC, nextCount] = pq.dequeue();
      largestString += String.fromCharCode(nextC + a);
      if (nextCount > 1) {
        pq.enqueue([nextC, nextCount - 1]);
      }
      pq.enqueue([c, count]);
      continue;
    }

    if (count > repeatLimit) {
      largestString += ch.repeat(repeatLimit);
      pq.enqueue([c, count - repeatLimit]);
    } else {
      largestString += new Array(count).fill(String.fromCharCode(c + a)).join('');
    }
  }
  return largestString;
};

var s = 'cczazcc',
  repeatLimit = 3;
var expected = 'zzcccac';
var result = repeatLimitedString(s, repeatLimit);
console.log(result, result === expected);

var s = 'aababab',
  repeatLimit = 2;
var expected = 'bbabaa';
var result = repeatLimitedString(s, repeatLimit);
console.log(result, result === expected);
