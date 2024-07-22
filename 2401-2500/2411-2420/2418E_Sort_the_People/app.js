// 2418. Sort the People
// https://leetcode.com/problems/sort-the-people/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const people = names.map((name, index) => [name, heights[index]]);
  people.sort((a, b) => b[1] - a[1]);
  return people.map((person) => person[0]);
};

var names = ['Mary', 'John', 'Emma'],
  heights = [180, 165, 170];
var expected = ['Mary', 'Emma', 'John'];
var result = sortPeople(names, heights);
console.log(result, result.join() === expected.join());

var names = ['Alice', 'Bob', 'Bob'],
  heights = [155, 185, 150];
var expected = ['Bob', 'Alice', 'Bob'];
var result = sortPeople(names, heights);
console.log(result, result.join() === expected.join());
