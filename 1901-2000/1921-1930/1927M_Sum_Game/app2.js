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
  const [n0, q0] = get(num.substring(0, n / 2));
  const [n1, q1] = get(num.substring(n / 2));
  return (q0 + q1) % 2 === 1 || n0 - n1 !== ((q1 - q0) * 9) / 2;

  function get(s) {
    let nn = 0;
    let qq = 0;
    for (const ch of s) {
      if (ch === '?') {
        qq++;
      } else {
        nn += parseInt(ch);
      }
    }
    return [nn, qq];
  }
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
