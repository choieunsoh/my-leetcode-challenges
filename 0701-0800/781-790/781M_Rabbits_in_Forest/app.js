// 781. Rabbits in Forest
// https://leetcode.com/problems/rabbits-in-forest/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  const max = Math.max(...answers);
  const colorRabbits = new Array(Math.min(max, 1000) + 1).fill(0);
  for (const answer of answers) {
    colorRabbits[answer]++;
  }

  let minRabbits = 0;
  for (let color = 0; color < colorRabbits.length; color++) {
    const rabbitsInColor = colorRabbits[color];
    if (rabbitsInColor === 0) continue;
    const maxRabbitsInTheSameColorGroup = color + 1;
    const numberOfColorGroups = Math.ceil(rabbitsInColor / maxRabbitsInTheSameColorGroup);
    minRabbits += numberOfColorGroups * maxRabbitsInTheSameColorGroup;
  }

  return minRabbits;
};

var answers = [1, 1, 2];
var expected = 5;
var result = numRabbits(answers);
console.log(result, result === expected);

var answers = [10, 10, 10];
var expected = 11;
var result = numRabbits(answers);
console.log(result, result === expected);

var answers = [2, 2, 2];
var expected = 3;
var result = numRabbits(answers);
console.log(result, result === expected);

var answers = [2, 2, 2, 2];
var expected = 6;
var result = numRabbits(answers);
console.log(result, result === expected);

var answers = [1, 0, 1, 0, 0];
var expected = 5;
var result = numRabbits(answers);
console.log(result, result === expected);
