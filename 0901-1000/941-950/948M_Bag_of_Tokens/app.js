// 948. Bag of Tokens
// https://leetcode.com/problems/bag-of-tokens/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  tokens.sort((a, b) => a - b);
  let left = 0;
  let right = tokens.length - 1;
  let maxScore = 0;
  let currentScore = 0;
  let currentPower = power;
  while (left <= right) {
    if (currentPower >= tokens[left]) {
      currentPower -= tokens[left++];
      currentScore++;
      maxScore = Math.max(maxScore, currentScore);
    } else if (currentScore > 0) {
      currentPower += tokens[right--];
      currentScore--;
    } else {
      break;
    }
  }

  return maxScore;
};

var tokens = [100],
  power = 50;
var expected = 0;
var result = bagOfTokensScore(tokens, power);
console.log(result, result === expected);

var tokens = [200, 100],
  power = 150;
var expected = 1;
var result = bagOfTokensScore(tokens, power);
console.log(result, result === expected);

var tokens = [100, 200, 300, 400],
  power = 200;
var expected = 2;
var result = bagOfTokensScore(tokens, power);
console.log(result, result === expected);

var tokens = [33, 4, 28, 24, 96],
  power = 35;
var expected = 3;
var result = bagOfTokensScore(tokens, power);
console.log(result, result === expected);
