// New Year Chaos
// https://www.hackerrank.com/challenges/new-year-chaos/problem
/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  let [count, p1, p2, p3] = [0, 1, 2, 3];
  for (let i = 0; i < q.length; i++) {
    if (q[i] === p1) {
      // 2 3 4
      p1 = p2;
      p2 = p3;
      p3++;
    } else if (q[i] === p2) {
      // 1 3 4
      count++;
      p2 = p3;
      p3++;
    } else if (q[i] === p3) {
      // 1 2 4
      count += 2;
      p3++;
    } else {
      return 'Too chaotic';
    }
  }
  return count;
}

var q = [2, 1, 5, 3, 4];
var expected = 3;
var result = minimumBribes(q);
console.log(result, result === expected);

var q = [2, 5, 1, 3, 4];
var expected = 'Too chaotic';
var result = minimumBribes(q);
console.log(result, result === expected);
