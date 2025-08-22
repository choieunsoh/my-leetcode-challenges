// 1181. Before and After Puzzle
// https://leetcode.com/problems/before-and-after-puzzle/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {string[]} phrases
 * @return {string[]}
 */
var beforeAndAfterPuzzles = function (phrases) {
  const n = phrases.length;
  const sp = phrases.map((phrase) => {
    const words = phrase.split(' ');
    return { first: words[0], last: words[words.length - 1] };
  });

  const unique = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (sp[i].first === sp[j].last) {
        const combined = phrases[j] + phrases[i].slice(sp[i].first.length);
        unique.add(combined);
      }
    }
  }

  return Array.from(unique).sort();
};

var phrases = ['writing code', 'code rocks'];
var expected = ['writing code rocks'];
var result = beforeAndAfterPuzzles(phrases);
console.log(result, result.join() === expected.join());

var phrases = [
  'mission statement',
  'a quick bite to eat',
  'a chip off the old block',
  'chocolate bar',
  'mission impossible',
  'a man on a mission',
  'block party',
  'eat my words',
  'bar of soap',
];
var expected = [
  'a chip off the old block party',
  'a man on a mission impossible',
  'a man on a mission statement',
  'a quick bite to eat my words',
  'chocolate bar of soap',
];
var result = beforeAndAfterPuzzles(phrases);
console.log(result, result.join() === expected.join());

var phrases = ['a', 'b', 'a'];
var expected = ['a'];
var result = beforeAndAfterPuzzles(phrases);
console.log(result, result.join() === expected.join());
