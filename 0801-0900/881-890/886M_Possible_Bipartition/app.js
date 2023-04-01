// 886. Possible Bipartition
// https://leetcode.com/problems/possible-bipartition/
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  const g = Array.from({ length: n + 1 }, () => []);
  const team = Array(n + 1).fill(-1);
  for (const [a, b] of dislikes) {
    g[a].push(b);
    g[b].push(a);
  }

  for (let i = 1; i <= n; i++) {
    if (team[i] !== -1) continue;
    let q = [i];
    team[i] = 0;
    while (q.length) {
      const qq = [];
      for (let j = 0; j < q.length; j++) {
        const person = q[j];
        if (g[person].length === 0) continue;
        for (const dislikePerson of g[person]) {
          if (team[person] === team[dislikePerson]) return false;
          if (team[dislikePerson] !== -1) continue;
          team[dislikePerson] = team[person] ^ 1;
          qq.push(dislikePerson);
        }
      }
      q = qq;
    }
  }
  return true;
};

var n = 4,
  dislikes = [
    [1, 2],
    [1, 3],
    [2, 4],
  ];
var expected = true;
var result = possibleBipartition(n, dislikes);
console.log(result, result === expected);

var n = 3,
  dislikes = [
    [1, 2],
    [1, 3],
    [2, 3],
  ];
var expected = false;
var result = possibleBipartition(n, dislikes);
console.log(result, result === expected);
