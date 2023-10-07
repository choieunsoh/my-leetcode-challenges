// 275. H-Index II
// https://leetcode.com/problems/h-index-ii
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const n = citations.length;
  let hIndex = 0;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const citation = citations[mid];
    if (citation >= n - mid) {
      hIndex = n - mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return hIndex;
};

var citations = [0, 1, 3, 5, 6];
var expected = 3;
var result = hIndex(citations);
console.log(result, result === expected);

var citations = [1, 2, 100];
var expected = 2;
var result = hIndex(citations);
console.log(result, result === expected);
