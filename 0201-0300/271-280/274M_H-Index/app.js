// 274. H-Index
// https://leetcode.com/problems/h-index/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const n = citations.length;
  const counter = new Array(n + 1).fill(0);
  for (const citation of citations) {
    if (citation >= n) {
      counter[n]++;
    } else {
      counter[citation]++;
    }
  }

  let count = 0;
  for (let i = n; i >= 0; i--) {
    count += counter[i];
    if (count >= i) {
      return i;
    }
  }
  return 0;
};

var citations = [3, 0, 6, 1, 5];
var expected = 3;
var result = hIndex(citations);
console.log(result, result === expected);

var citations = [1, 3, 1];
var expected = 1;
var result = hIndex(citations);
console.log(result, result === expected);
