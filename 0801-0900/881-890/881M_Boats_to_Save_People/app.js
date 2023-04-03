// 881. Boats to Save People
// https://leetcode.com/problems/boats-to-save-people/
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let boats = 0;
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    const leftPerson = people[left];
    const rightPerson = people[right];
    if (leftPerson + rightPerson <= limit) {
      boats++;
      left++;
      right--;
    } else {
      boats++;
      right--;
    }
  }
  return boats;
};

var people = [1, 2],
  limit = 3;
var expected = 1;
var result = numRescueBoats(people, limit);
console.log(result, result === expected);

var people = [3, 2, 2, 1],
  limit = 3;
var expected = 3;
var result = numRescueBoats(people, limit);
console.log(result, result === expected);

var people = [3, 5, 3, 4],
  limit = 5;
var expected = 4;
var result = numRescueBoats(people, limit);
console.log(result, result === expected);

var people = [5, 1, 4, 2],
  limit = 6;
var expected = 2;
var result = numRescueBoats(people, limit);
console.log(result, result === expected);
