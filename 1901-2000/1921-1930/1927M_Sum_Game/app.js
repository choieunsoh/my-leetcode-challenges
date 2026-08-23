// 1927. Sum Game
// https://leetcode.com/problems/sum-game/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function (num) {
  const n = num.length;
  const half = n / 2;

  let leftSum = 0;
  let rightSum = 0;
  let leftQ = 0;
  let rightQ = 0;

  for (let i = 0; i < half; i++) {
    if (num[i] === '?') {
      leftQ++;
    } else {
      leftSum += num.charCodeAt(i) - 48;
    }
  }

  for (let i = half; i < n; i++) {
    if (num[i] === '?') {
      rightQ++;
    } else {
      rightSum += num.charCodeAt(i) - 48;
    }
  }

  if ((leftQ + rightQ) % 2 === 1) return true;

  return leftSum - rightSum !== ((rightQ - leftQ) / 2) * 9;
};

var num = '5023';
var expected = false;
var result = sumGame(num);
console.log(result, result === expected);

var num = '25??';
var expected = true;
var result = sumGame(num);
console.log(result, result === expected);

var num = '?3295???';
var expected = false;
var result = sumGame(num);
console.log(result, result === expected);
