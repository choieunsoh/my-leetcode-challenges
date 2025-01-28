// 649. Dota2 Senate
// https://leetcode.com/problems/dota2-senate/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const n = senate.length;
  const rQueue = [];
  const dQueue = [];
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      rQueue.push(i);
    } else {
      dQueue.push(i);
    }
  }

  while (rQueue.length > 0 && dQueue.length > 0) {
    const rIndex = rQueue.shift();
    const dIndex = dQueue.shift();
    if (rIndex < dIndex) {
      rQueue.push(rIndex + n);
    } else {
      dQueue.push(dIndex + n);
    }
  }

  return rQueue.length > 0 ? 'Radiant' : 'Dire';
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
