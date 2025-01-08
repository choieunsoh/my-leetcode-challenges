// 2168. Unique Substrings With Equal Digit Frequency
// https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
class TrieNode {
  constructor() {
    this.children = new Array(10).fill(null); // For digits 0-9
    this.isVisited = false; // Checks if this substring has been counted
  }
}

/**
 * @param {string} s
 * @return {number}
 */
var equalDigitFrequency = function (s) {
  const root = new TrieNode(); // Initialize the Trie root
  let totalValidSubstrings = 0;

  // Iterate through all starting indices of substrings
  for (let start = 0; start < s.length; start++) {
    let currentNode = root;
    const digitFrequency = new Array(10).fill(0);
    let uniqueDigitsCount = 0;
    let maxDigitFrequency = 0;

    // Extend the substring from 'start' to different end positions
    for (let end = start; end < s.length; end++) {
      const currentDigit = s.charCodeAt(end) - '0'.charCodeAt(0);

      // Update digit frequency and unique digits count
      if (digitFrequency[currentDigit]++ === 0) {
        uniqueDigitsCount++;
      }
      maxDigitFrequency = Math.max(maxDigitFrequency, digitFrequency[currentDigit]);

      // Traverse or create a new node in the Trie
      if (currentNode.children[currentDigit] === null) {
        currentNode.children[currentDigit] = new TrieNode(); // Add new node for the digit
      }
      currentNode = currentNode.children[currentDigit]; // Move to the child node

      // Check if the substring is valid
      if (uniqueDigitsCount * maxDigitFrequency === end - start + 1 && !currentNode.isVisited) {
        totalValidSubstrings++; // Increment count of valid substrings
        currentNode.isVisited = true; // Mark this substring as seen
      }
    }
  }
  return totalValidSubstrings;
};

var s = '1212';
var expected = 5;
var result = equalDigitFrequency(s);
console.log(result, result === expected);

var s = '12321';
var expected = 9;
var result = equalDigitFrequency(s);
console.log(result, result === expected);

var s = '0123456789';
var expected = 55;
var result = equalDigitFrequency(s);
console.log(result, result === expected);
