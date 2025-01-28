// 649. Dota2 Senate
// https://leetcode.com/problems/dota2-senate/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  // Count of Each Type of Senator to check for the Winner
  let rCount = senate.split('').filter((x) => x == 'R').length;
  let dCount = senate.length - rCount;

  // To mark Banned Senators
  const banned = new Array(senate.length).fill(false);

  // Ban the candidate "toBan", immediate next to "startAt"
  const ban = (toBan, startAt) => {
    // Find the next eligible senator of "toBan" type
    // On found, mark him as banned
    while (true) {
      if (senate[startAt] == toBan && !banned[startAt]) {
        banned[startAt] = true;
        break;
      }
      startAt = (startAt + 1) % senate.length;
    }
  };

  // Turn of Senator at this Index
  let turn = 0;

  // While both parties have at least one senator
  while (rCount > 0 && dCount > 0) {
    if (!banned[turn]) {
      if (senate[turn] == 'R') {
        ban('D', (turn + 1) % senate.length);
        dCount--;
      } else {
        ban('R', (turn + 1) % senate.length);
        rCount--;
      }
    }

    turn = (turn + 1) % senate.length;
  }

  // Return Winner
  return dCount === 0 ? 'Radiant' : 'Dire';
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
