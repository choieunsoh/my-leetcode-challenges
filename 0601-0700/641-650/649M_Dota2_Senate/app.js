// 649. Dota2 Senate
// https://leetcode.com/problems/dota2-senate/
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const senators = [...senate];
  const stack = [];
  for (const senator of senators) {
    if (stack.length === 0) {
      stack.push(senator);
    } else if (stack.length > 0 && stack[stack.length - 1] === senator) {
      stack.push(senator);
    } else {
      senators.push(stack.pop());
    }
  }
  return stack[0] === 'R' ? 'Radiant' : 'Dire';
};

var senate = 'DDRRR';
var expected = 'Dire';
var result = predictPartyVictory(senate);
console.log(result, result === expected);

var senate = 'RD';
var expected = 'Radiant';
var result = predictPartyVictory(senate);
console.log(result, result === expected);

var senate = 'RDD';
var expected = 'Dire';
var result = predictPartyVictory(senate);
console.log(result, result === expected);

var senate = 'DDRRR';
var expected = 'Dire';
var result = predictPartyVictory(senate);
console.log(result, result === expected);

var senate = 'DRRDRDRDRDDRDRDR';
var expected = 'Radiant';
var result = predictPartyVictory(senate);
console.log(result, result === expected);
