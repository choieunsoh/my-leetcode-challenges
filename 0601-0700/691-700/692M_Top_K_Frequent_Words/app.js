// 692. Top K Frequent Words
// https://leetcode.com/problems/top-k-frequent-words/
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const freqMap = new Map();
  for (const word of words) {
    const count = freqMap.get(word) ?? 0;
    freqMap.set(word, count + 1);
  }

  const topFreq = [...freqMap.entries()].sort(compare);
  topFreq.length = k;
  return topFreq.map(([word]) => word);

  function compare(a, b) {
    const [word1, count1] = a;
    const [word2, count2] = b;
    if (count1 === count2) return word1.localeCompare(word2);
    return count2 - count1;
  }
};

var words = ['i', 'love', 'leetcode', 'i', 'love', 'coding'],
  k = 2;
var expected = ['i', 'love'];
var result = topKFrequent(words, k);
console.log(result, result.join() === expected.join());

var words = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
  k = 4;
var expected = ['the', 'is', 'sunny', 'day'];
var result = topKFrequent(words, k);
console.log(result, result.join() === expected.join());

var words = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is', 'day'],
  k = 3;
var expected = ['the', 'is', 'day'];
var result = topKFrequent(words, k);
console.log(result, result.join() === expected.join());
