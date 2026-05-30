// 3161. Block Placement Queries
// https://leetcode.com/problems/block-placement-queries/description/
// T.C.: O(q log q + q log n)
// S.C.: O(q + n)
/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function (queries) {
  const mx = 50000;
  const st = [0, mx];

  for (const q of queries) {
    if (q[0] === 1) {
      insort(st, q[1]);
    }
  }

  const bt = new Array(mx + 1).fill(0);

  let pre = 0;
  for (const x of st) {
    if (x === 0) {
      continue;
    }
    update(x, x - pre);
    pre = x;
  }

  const result = [];
  for (let i = queries.length - 1; i >= 0; i--) {
    const q = queries[i];
    if (q[0] === 2) {
      const x = q[1],
        sz = q[2];
      const idx = bisectLeft(st, x);
      let preVal;

      if (idx < st.length && st[idx] === x) {
        preVal = x;
      } else {
        preVal = st[idx - 1];
      }

      let maxSpace = query(preVal);
      maxSpace = Math.max(maxSpace, x - preVal);
      result.push(maxSpace >= sz);
    } else {
      const x = q[1];
      const idx = bisectLeft(st, x);
      const preVal = st[idx - 1];
      const nxt = st[idx + 1];

      update(nxt, nxt - preVal);
      st.splice(idx, 1);
    }
  }

  return result.reverse();

  function bisectLeft(arr, x) {
    let low = 0;
    let high = arr.length;
    while (low < high) {
      const mid = (low + high) >>> 1;
      if (arr[mid] < x) low = mid + 1;
      else high = mid;
    }
    return low;
  }

  function insort(arr, x) {
    const idx = bisectLeft(arr, x);
    arr.splice(idx, 0, x);
  }

  function update(x, v) {
    while (x <= mx) {
      if (v > bt[x]) bt[x] = v;
      x += x & -x;
    }
  }

  function query(x) {
    let result = 0;
    while (x > 0) {
      if (bt[x] > result) result = bt[x];
      x -= x & -x;
    }
    return result;
  }
};

var queries = [
  [1, 2],
  [2, 3, 3],
  [2, 3, 1],
  [2, 2, 2],
];
var expected = [false, true, true];
var result = getResults(queries);
console.log(result, result.join(',') === expected.join(','));

var queries = [
  [1, 7],
  [2, 7, 6],
  [1, 2],
  [2, 7, 5],
  [2, 7, 6],
];
var expected = [true, true, false];
var result = getResults(queries);
console.log(result, result.join(',') === expected.join(','));
