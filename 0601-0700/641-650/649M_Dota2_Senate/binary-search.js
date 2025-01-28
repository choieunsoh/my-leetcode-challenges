// 649. Dota2 Senate
// https://leetcode.com/problems/dota2-senate/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  // Number of Senators
  const n = senate.length;

  // To mark Banned Senators
  const banned = new Array(n).fill(false);

  // List of indices of Eligible Radiant and Dire Senators
  const rIndices = [];
  const dIndices = [];
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') rIndices.push(i);
    else dIndices.push(i);
  }

  // Ban the senator of "indices" immediate next to "startAt"
  const ban = (indices, startAt) => {
    // Find the index of "index of senator to ban" using Binary Search
    const temp = indices.findIndex((x) => x >= startAt);

    // If startAt is more than the last index,
    // then start from the beginning. Ban the first senator
    if (temp === -1) {
      banned[indices[0]] = true;
      indices.shift();
    }

    // Else, Ban the senator at the index
    else {
      banned[indices[temp]] = true;
      indices.splice(temp, 1);
    }
  };

  // Turn of Senator at this Index
  let turn = 0;

  // While both parties have at least one senator
  while (rIndices.length > 0 && dIndices.length > 0) {
    if (!banned[turn]) {
      if (senate[turn] === 'R') ban(dIndices, turn);
      else ban(rIndices, turn);
    }

    turn = (turn + 1) % n;
  }

  // Return the party with at least one senator
  return dIndices.length === 0 ? 'Radiant' : 'Dire';
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
