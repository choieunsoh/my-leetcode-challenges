// 274. H-Index
// https://leetcode.com/problems/h-index/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);

  let i = 0;
  while (citations[i] >= i + 1) i++;

  return i;
};

var citations = [3, 0, 6, 1, 5];
var expected = 3;
var result = hIndex(citations);
console.log(result, result === expected);

var citations = [1, 3, 1];
var expected = 1;
var result = hIndex(citations);
console.log(result, result === expected);
