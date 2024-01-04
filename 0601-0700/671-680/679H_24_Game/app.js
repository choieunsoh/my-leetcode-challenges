// 679. 24 Game
// https://leetcode.com/problems/24-game/description/
// T.C.: O(n^3 * 3^(n-1) * n! * (n-1)!)
// S.C.: O(n^2)
/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
  return checkPoint24(cards);

  function generatePossibleResults(a, b) {
    const result = [a + b, a - b, b - a, a * b];
    if (a !== 0) result.push(b / a);
    if (b !== 0) result.push(a / b);
    return result;
  }

  function checkPoint24(list) {
    const n = list.length;
    if (n === 1) {
      return Math.abs(list[0] - 24.0) <= 0.1;
    }

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const newList = list.filter((_, k) => k !== i && k !== j);
        const results = generatePossibleResults(list[i], list[j]);
        for (const result of results) {
          if (checkPoint24([...newList, result])) {
            return true;
          }
        }
      }
    }

    return false;
  }
};

var cards = [4, 1, 8, 7];
var expected = true;
var result = judgePoint24(cards);
console.log(result, result === expected);

var cards = [1, 2, 1, 2];
var expected = false;
var result = judgePoint24(cards);
console.log(result, result === expected);
