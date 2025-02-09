// 3447. Assign Elements to Groups with Constraints
// https://leetcode.com/problems/assign-elements-to-groups-with-constraints/description/
// T.C.: O(m*n)
// S.C.: O(m+n)
/**
 * @param {number[]} groups
 * @param {number[]} elements
 * @return {number[]}
 */
var assignElements = function (groups, elements) {
  const assigned = new Array(groups.length).fill(-1);
  const divisorsMap = new Map();
  const elementIndices = new Map();
  for (let i = 0; i < elements.length; i++) {
    if (!elementIndices.has(elements[i])) {
      elementIndices.set(elements[i], i);
    }
  }

  for (let i = 0; i < groups.length; i++) {
    const groupNum = groups[i];
    if (!divisorsMap.has(groupNum)) {
      const divisors = [];
      for (let num = 1; num <= Math.sqrt(groupNum); num++) {
        if (groupNum % num === 0) {
          divisors.push(num);
          if (num !== groupNum / num) {
            divisors.push(groupNum / num);
          }
        }
      }
      divisorsMap.set(groupNum, divisors);
    }

    let minIndex = Infinity;
    for (const divisor of divisorsMap.get(groupNum)) {
      if (elementIndices.has(divisor)) {
        minIndex = Math.min(minIndex, elementIndices.get(divisor));
      }
    }
    assigned[i] = minIndex === Infinity ? -1 : minIndex;
  }
  return assigned;
};

var groups = [8, 4, 3, 2, 4],
  elements = [4, 2];
var expected = [0, 0, -1, 1, 0];
var result = assignElements(groups, elements);
console.log(result, result.join() === expected.join());

var groups = [2, 3, 5, 7],
  elements = [5, 3, 3];
var expected = [-1, 1, 0, -1];
var result = assignElements(groups, elements);
console.log(result, result.join() === expected.join());

var groups = [10, 21, 30, 41],
  elements = [2, 1];
var expected = [0, 1, 0, 1];
var result = assignElements(groups, elements);
console.log(result, result.join() === expected.join());
