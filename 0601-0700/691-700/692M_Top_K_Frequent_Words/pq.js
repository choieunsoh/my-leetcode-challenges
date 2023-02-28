// 692. Top K Frequent Words
// https://leetcode.com/problems/top-k-frequent-words/
const { PriorityQueue } = require('@datastructures-js/priority-queue');
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

  const pq = new PriorityQueue(compare);
  for (const [word, count] of freqMap) {
    pq.enqueue([count, word]);
  }

  const result = [];
  for (let i = 0; i < k; i++) {
    const [, word] = pq.dequeue();
    result.push(word);
  }
  return result;

  function compare(a, b) {
    const [count1, word1] = a;
    const [count2, word2] = b;
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
