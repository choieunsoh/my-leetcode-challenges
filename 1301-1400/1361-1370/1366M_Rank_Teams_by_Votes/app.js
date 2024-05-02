// 1366. Rank Teams by Votes
// https://leetcode.com/problems/rank-teams-by-votes/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  if (votes.length === 1) return votes[0];

  const A = 'A'.charCodeAt(0);
  const teamCount = votes[0].length;
  const teams = votes[0].split('');
  const scores = Array.from({ length: 26 }, () => new Array(teamCount).fill(0));
  for (const vote of votes) {
    for (let position = 0; position < teamCount; position++) {
      const teamIndex = vote.charCodeAt(position) - A;
      scores[teamIndex][position]++;
    }
  }

  teams.sort((team1, team2) => {
    const team1Score = scores[team1.charCodeAt(0) - A];
    const team2Score = scores[team2.charCodeAt(0) - A];
    for (let position = 0; position < teamCount; position++) {
      if (team1Score[position] > team2Score[position]) {
        return -1;
      } else if (team1Score[position] < team2Score[position]) {
        return 1;
      }
    }
    return team1.charCodeAt(0) - team2.charCodeAt(0);
  });
  return teams.join('');
};

var votes = ['ABC', 'ACB', 'ABC', 'ACB', 'ACB'];
var expected = 'ACB';
var result = rankTeams(votes);
console.log(result, result === expected);

var votes = ['WXYZ', 'XYZW'];
var expected = 'XWYZ';
var result = rankTeams(votes);
console.log(result, result === expected);

var votes = ['ZMNAGUEDSJYLBOPHRQICWFXTVK'];
var expected = 'ZMNAGUEDSJYLBOPHRQICWFXTVK';
var result = rankTeams(votes);
console.log(result, result === expected);
