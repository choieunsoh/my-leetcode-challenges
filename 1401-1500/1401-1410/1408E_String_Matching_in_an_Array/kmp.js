// 1408. String Matching in an Array
// https://leetcode.com/problems/string-matching-in-an-array/description/
// KMP Algorithm
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const matchingWords = [];

  // Iterate through each word in the input array.
  for (const word of words) {
    const lps = computeLPSArray(word);
    console.log(lps);
    // Compare the current word with all other words.
    for (const otherWord of words) {
      if (word === otherWord) continue; // Skip comparing the word with itself.

      // Check if the current word is a substring of another word.
      if (isSubstringOf(word, otherWord, lps)) {
        matchingWords.push(word); // Add it to the result list if true.
        break; // No need to check further for this word.
      }
    }
  }

  return matchingWords;

  // Function to compute the LPS (Longest Prefix Suffix) array for the substring 'sub'.
  function computeLPSArray(sub) {
    const lps = new Array(sub.length).fill(0);
    let currentIndex = 1;
    let len = 0;
    while (currentIndex < sub.length) {
      if (sub.charAt(currentIndex) === sub.charAt(len)) {
        lps[currentIndex++] = ++len;
      } else {
        if (len > 0) {
          len = lps[len - 1]; // Backtrack using LPS array to find a shorter match.
        } else {
          currentIndex++;
        }
      }
    }
    return lps;
  }

  // Function to check if 'sub' is a substring of 'main' using the KMP algorithm.
  function isSubstringOf(sub, main, lps) {
    let mainIndex = 0;
    let subIndex = 0;
    while (mainIndex < main.length) {
      if (main.charAt(mainIndex) === sub.charAt(subIndex)) {
        mainIndex++;
        subIndex++;
        if (subIndex == sub.length) return true; // Found a match.
      } else {
        if (subIndex > 0) {
          subIndex = lps[subIndex - 1]; // Use the LPS to skip unnecessary comparisons.
        } else {
          mainIndex++;
        }
      }
    }
    return false; // No match found.
  }
};

var words = ['mass', 'as', 'hero', 'superhero'];
var expected = ['as', 'hero'];
var result = stringMatching(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['leetcode', 'et', 'code'];
var expected = ['et', 'code'];
var result = stringMatching(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['blue', 'green', 'bu'];
var expected = [];
var result = stringMatching(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['leetcoder', 'leetcode', 'od', 'hamlet', 'am'];
var expected = ['leetcode', 'od', 'am'];
var result = stringMatching(words);
console.log(result, result.sort().join() === expected.sort().join());
