// 1282. Group the People Given the Group Size They Belong To
// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const result = [];
  const groups = new Map();
  for (let i = 0; i < groupSizes.length; i++) {
    const people = groups.get(groupSizes[i]) ?? [];
    people.push(i);
    groups.set(groupSizes[i], people);
  }

  for (const [groupSize, people] of groups) {
    for (let i = 0; i < people.length; i += groupSize) {
      result.push(people.slice(i, i + groupSize));
    }
  }
  return result;
};

var groupSizes = [3, 3, 3, 3, 3, 1, 3];
var expected = [[5], [0, 1, 2], [3, 4, 6]];
var result = groupThePeople(groupSizes);
console.log(result, result.join() === expected.join());

var groupSizes = [2, 1, 3, 3, 3, 2];
var expected = [[1], [0, 5], [2, 3, 4]];
var result = groupThePeople(groupSizes);
console.log(result, result.join() === expected.join());
