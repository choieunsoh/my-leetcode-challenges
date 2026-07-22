// 3501. Maximize Active Section with Trade II
// https://leetcode.com/problems/maximize-active-section-with-trade-ii/description/
// T.C.: O(q log q + n sqrt(n) + q sqrt(n))
// S.C.: O(n)
// Mo's Algorithm
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var maxActiveSectionsAfterTrade = function (s, queries) {
  const n = s.length,
    m = queries.length;
  let cnt1 = 0;
  for (let c of s) {
    if (c === '1') {
      cnt1++;
    }
  }
  // left[i]: represents the length of the continuous block ending at position i, which is the same as s[i]
  const left = new Array(n);
  // right[i]: represents the length of the continuous block starting at position i with the same value as s[i]
  const right = new Array(n);

  for (let i = 0; i < n; i++) {
    left[i] = i > 0 && s[i - 1] === s[i] ? left[i - 1] + 1 : 1;
  }
  for (let i = n - 1; i >= 0; i--) {
    right[i] = i < n - 1 && s[i + 1] === s[i] ? right[i + 1] + 1 : 1;
  }

  const ans = new Array(m).fill(-1);
  const block_size = Math.floor(Math.sqrt(n));
  // query with length greater than block length
  const longQueries = [];

  const bruteForce = (l, r) => {
    let i = l;
    let best = 0;
    let prev = -Infinity;

    while (i <= r) {
      let start = i;
      while (i <= r && s[i] === s[start]) {
        i++;
      }
      if (s[start] === '0') {
        let cur = i - start;
        if (prev !== -Infinity && prev + cur > best) {
          best = prev + cur;
        }
        prev = cur;
      }
    }
    return best;
  };

  for (let i = 0; i < m; i++) {
    const l = queries[i][0],
      r = queries[i][1];
    if (r - l + 1 > block_size) {
      longQueries.push([Math.floor(l / block_size), l, r, i]);
    } else {
      // queries shorter than block length, brute-force calculation
      ans[i] = cnt1 + bruteForce(l, r);
    }
  }

  // sort by the ID of the block where the left endpoint is located as the first keyword, and by the right endpoint as the second keyword
  longQueries.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[2] - b[2];
  });

  // use an array to simulate a double-ended queue, expanding from the middle
  const subZeroBlocks = new Array(n).fill(0);
  let head = Math.floor(n / 2),
    tail = Math.floor(n / 2);
  let L = 0,
    R = 0,
    bestGain = 0;

  for (let i = 0; i < longQueries.length; i++) {
    const [bid, l, r, qid] = longQueries[i];
    if (i === 0 || bid > longQueries[i - 1][0]) {
      // traverse to a new block, perform initialization operations
      L = (bid + 1) * block_size - 1; // L is initialized to the right endpoint of the block
      R = (bid + 1) * block_size; // R is initialized to the left endpoint of the next block
      head = tail = Math.floor(n / 2);
      bestGain = 0;
    }

    while (R <= r) {
      let sz = Math.min(r - R + 1, right[R]);
      if (s[R] === '0') {
        if (tail > head && s[R - 1] === '0') {
          subZeroBlocks[tail - 1] += sz;
        } else {
          subZeroBlocks[tail] = sz;
          tail++;
        }
        if (tail - head >= 2) {
          bestGain = Math.max(subZeroBlocks[tail - 1] + subZeroBlocks[tail - 2], bestGain);
        }
      }
      R += sz;
    }

    // before moving the left endpoint L, backup the value of bestGain
    const tmp_bestGain = bestGain;
    // value of the first element of subZeroBlocks before moving the left endpoint
    const tmp_firstValue = tail > head ? subZeroBlocks[head] : -1;
    // the number of digits added from the left during the process of recording the movement of the left endpoint L
    let cnt = 0;

    while (L >= l) {
      let sz = Math.min(L - l + 1, left[L]);
      if (s[L] === '0') {
        if (tail > head && s[L + 1] === '0') {
          subZeroBlocks[head] += sz;
        } else {
          head--;
          subZeroBlocks[head] = sz;
          cnt++;
        }
        if (tail - head >= 2) {
          bestGain = Math.max(subZeroBlocks[head] + subZeroBlocks[head + 1], bestGain);
        }
      }
      L -= sz;
    }

    // answering inquiries
    ans[qid] = bestGain + cnt1;
    // restore left endpoint L
    L = (bid + 1) * block_size - 1;
    // restore bestGain
    bestGain = tmp_bestGain;
    // restore subZeroBlocks
    head += cnt;
    if (tmp_firstValue !== -1) {
      subZeroBlocks[head] = tmp_firstValue;
    }
  }
  return ans;
};

var s = '01',
  queries = [[0, 1]];
var expected = [1];
var result = maxActiveSectionsAfterTrade(s, queries);
console.log(result, result.toString() === expected.toString());

var s = '0100',
  queries = [
    [0, 3],
    [0, 2],
    [1, 3],
    [2, 3],
  ];
var expected = [4, 3, 1, 1];
var result = maxActiveSectionsAfterTrade(s, queries);
console.log(result, result.toString() === expected.toString());

var s = '1000100',
  queries = [
    [1, 5],
    [0, 6],
    [0, 4],
  ];
var expected = [6, 7, 2];
var result = maxActiveSectionsAfterTrade(s, queries);
console.log(result, result.toString() === expected.toString());

var s = '01010',
  queries = [
    [0, 3],
    [1, 4],
    [1, 3],
  ];
var expected = [4, 4, 2];
var result = maxActiveSectionsAfterTrade(s, queries);
console.log(result, result.toString() === expected.toString());
