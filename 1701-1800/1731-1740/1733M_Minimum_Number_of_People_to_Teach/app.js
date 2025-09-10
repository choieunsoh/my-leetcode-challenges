// 1733. Minimum Number of People to Teach
// https://leetcode.com/problems/minimum-number-of-people-to-teach/description/
// T.C.: O(m*n)
// S.C.: O(m+n)
/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (n, languages, friendships) {
  const people = new Set();
  for (const [u, v] of friendships) {
    const know = new Set();
    let needTeach = true;
    for (const language of languages[u - 1]) {
      know.add(language);
    }
    for (const language of languages[v - 1]) {
      if (know.has(language)) {
        needTeach = false;
        break;
      }
    }
    if (needTeach) {
      people.add(u - 1);
      people.add(v - 1);
    }
  }

  let maxTeach = 0;
  const counts = new Array(n + 1).fill(0);
  for (const person of people) {
    for (const language of languages[person]) {
      maxTeach = Math.max(maxTeach, ++counts[language]);
    }
  }
  return people.size - maxTeach;
};

var n = 2,
  languages = [[1], [2], [1, 2]],
  friendships = [
    [1, 2],
    [1, 3],
    [2, 3],
  ];
var expected = 1;
var result = minimumTeachings(n, languages, friendships);
console.log(result, result === expected);

var n = 3,
  languages = [[2], [1, 3], [1, 2], [3]],
  friendships = [
    [1, 4],
    [1, 2],
    [3, 4],
    [2, 3],
  ];
var expected = 2;
var result = minimumTeachings(n, languages, friendships);
console.log(result, result === expected);
