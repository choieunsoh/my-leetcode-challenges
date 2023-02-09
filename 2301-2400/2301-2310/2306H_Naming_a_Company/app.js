// 2306. Naming a Company
// https://leetcode.com/problems/naming-a-company/
/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function (ideas) {
  let result = 0;
  const a = 'a'.charCodeAt(0);
  const initials = new Map();
  for (let i = 0; i < ideas.length; i++) {
    const initial = ideas[i].charAt(0);
    const suffixes = initials.get(initial) ?? new Set();
    suffixes.add(ideas[i].slice(1));
    initials.set(initial, suffixes);
  }

  const groups = [...initials.values()];
  for (let i = 0; i < groups.length; i++) {
    const suffixes = [...groups[i]];
    for (let j = i + 1; j < groups.length; j++) {
      let duplicate = 0;
      for (let k = 0; k < suffixes.length; k++) {
        if (groups[j].has(suffixes[k])) {
          duplicate++;
        }
      }
      result += 2 * (groups[i].size - duplicate) * (groups[j].size - duplicate);
    }
  }
  return result;
};

var ideas = ['coffee', 'donuts', 'time', 'toffee'];
var expected = 6;
var result = distinctNames(ideas);
console.log(result, result === expected);

var ideas = ['lack', 'back'];
var expected = 0;
var result = distinctNames(ideas);
console.log(result, result === expected);
