// 2375. Construct Smallest Number From DI String
// https://leetcode.com/problems/construct-smallest-number-from-di-string/description/
// T.C.: O(n!*n^2)
// S.C.: O(n)
/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  const patternLength = pattern.length;
  const numberSequence = new Array(patternLength + 1).fill('');

  for (let position = 1; position <= patternLength + 1; position++) {
    numberSequence[position] = position;
  }

  while (!check(numberSequence.join(''), pattern)) {
    if (!findNextPermutation(numberSequence)) {
      break;
    }
  }

  return numberSequence.join('');

  function check(sequence, pattern) {
    for (let index = 0; index < pattern.length; index++) {
      if (pattern.charAt(index) === 'I') {
        if (sequence.charAt(index) > sequence.charAt(index + 1)) {
          return false;
        }
      } else {
        if (sequence.charAt(index) < sequence.charAt(index + 1)) {
          return false;
        }
      }
    }
    return true;
  }

  function findNextPermutation(numberSequence) {
    let lastIncreasingIndex = numberSequence.length - 2;

    while (lastIncreasingIndex >= 0 && numberSequence[lastIncreasingIndex] >= numberSequence[lastIncreasingIndex + 1]) {
      lastIncreasingIndex--;
    }

    if (lastIncreasingIndex == -1) return false;

    let swapIndex = numberSequence.length - 1;
    while (numberSequence[swapIndex] <= numberSequence[lastIncreasingIndex]) {
      swapIndex--;
    }

    swapCharacters(numberSequence, lastIncreasingIndex, swapIndex);
    reverseSuffix(numberSequence, lastIncreasingIndex + 1, numberSequence.length - 1);

    return true;
  }

  function swapCharacters(array, firstIdx, secondIdx) {
    [array[firstIdx], array[secondIdx]] = [array[secondIdx], array[firstIdx]];
  }

  function reverseSuffix(array, startIdx, endIdx) {
    while (startIdx < endIdx) {
      swapCharacters(array, startIdx++, endIdx--);
    }
  }
};

var pattern = 'IIIDIDDD';
var expected = '123549876';
var result = smallestNumber(pattern);
console.log(result, result === expected);

var pattern = 'DDD';
var expected = '4321';
var result = smallestNumber(pattern);
console.log(result, result === expected);
