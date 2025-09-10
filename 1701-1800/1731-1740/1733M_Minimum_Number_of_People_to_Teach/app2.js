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
  const ln = languages.length;
  const canCommunicate = initialize2DArrayNew(ln, n);
  for (let person = 0; person < ln; person++) {
    for (const language of languages[person]) {
      canCommunicate[person][language - 1] = true;
    }
  }

  const people = new Set();
  for (const fr of friendships) {
    const a = fr[0] - 1;
    const b = fr[1] - 1;
    let flag = false;
    for (const language of languages[a]) {
      if (canCommunicate[b][language - 1]) flag = true;
    }
    if (flag) continue;
    people.add(a);
    people.add(b);
  }

  let result = Number.MAX_SAFE_INTEGER;
  for (let language = 0; language < n; language++) {
    let teach = 0;
    for (const person of people) {
      if (!canCommunicate[person][language]) teach++;
    }
    result = Math.min(result, teach);
  }
  return result;

  function initialize2DArrayNew(m, n) {
    const data = [];
    for (let i = 0; i < m; i++) {
      const tmp = new Array(n).fill(false);
      data.push(tmp);
    }
    return data;
  }
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
