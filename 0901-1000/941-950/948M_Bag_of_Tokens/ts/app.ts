// 948. Bag of Tokens
// https://leetcode.com/problems/bag-of-tokens/description/
// T.C.: O(n log n)
// S.C.: O(1)
var bagOfTokensScore = function (tokens: number[], power: number): number {
  tokens.sort((a, b) => a - b);
  let left = 0;
  let right = tokens.length - 1;
  let maxScore = 0;
  let score = 0;
  let currentPower = power;
  while (left <= right) {
    if (currentPower >= tokens[left]) {
      currentPower -= tokens[left++];
      maxScore = Math.max(maxScore, ++score);
    } else if (score > 0) {
      currentPower += tokens[right--];
      score--;
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
