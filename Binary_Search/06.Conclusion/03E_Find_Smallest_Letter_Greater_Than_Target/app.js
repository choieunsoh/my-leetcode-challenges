// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
// 744. Find Smallest Letter Greater Than Target
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let [left, right] = [0, letters.length - 1];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (letters[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return letters[left % letters.length];
};

var letters = ['e', 'e', 'e', 'k', 'q', 'q', 'q', 'v', 'v', 'y'],
  target = 'e';
var expected = 'k';
console.log(nextGreatestLetter(letters, target), expected);

var letters = ['e', 'e', 'e', 'e', 'e', 'e', 'n', 'n', 'n', 'n'],
  target = 'e';
var expected = 'n';
console.log(nextGreatestLetter(letters, target), expected);

var letters = ['c', 'f', 'j'],
  target = 'g';
var expected = 'j';
console.log(nextGreatestLetter(letters, target), expected);

var letters = ['c', 'f', 'j'],
  target = 'j';
var expected = 'c';
console.log(nextGreatestLetter(letters, target), expected);

var letters = ['c', 'f', 'j'],
  target = 'a';
var expected = 'c';
console.log(nextGreatestLetter(letters, target), expected);

var letters = ['c', 'f', 'j'],
  target = 'c';
var expected = 'f';
console.log(nextGreatestLetter(letters, target), expected);

var letters = ['c', 'f', 'j'],
  target = 'd';
var expected = 'f';
console.log(nextGreatestLetter(letters, target), expected);

var letters = ['c', 'f', 'g', 'h', 'j', 'm', 'r'],
  target = 'k';
var expected = 'm';
console.log(nextGreatestLetter(letters, target), expected);

var letters = ['a', 'b', 'c'],
  target = 'z';
var expected = 'a';
console.log(nextGreatestLetter(letters, target), expected);

var letters = ['c', 'd', 'e'],
  target = 'x';
var expected = 'c';
console.log(nextGreatestLetter(letters, target), expected);
