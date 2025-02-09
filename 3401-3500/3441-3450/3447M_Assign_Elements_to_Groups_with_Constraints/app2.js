// 3447. Assign Elements to Groups with Constraints
// https://leetcode.com/problems/assign-elements-to-groups-with-constraints/description/
// T.C.: O(m*n)
// S.C.: O(n)
/**
 * @param {number[]} groups
 * @param {number[]} elements
 * @return {number[]}
 */
var assignElements = function (groups, elements) {
  const elementMap = new Map();
  for (let i = elements.length - 1; i >= 0; i--) {
    elementMap.set(elements[i], i);
  }

  return groups.map(processFactors);

  function processFactors(num) {
    let minIndex = Infinity;
    const limit = Math.floor(Math.sqrt(num));
    for (let n = 1; n <= limit; n++) {
      if (num % n !== 0) continue;

      const smallDivisor = n;
      const largeDivisor = num / n;

      if (elementMap.has(smallDivisor)) {
        minIndex = Math.min(minIndex, elementMap.get(smallDivisor));
      }

      if (elementMap.has(largeDivisor)) {
        minIndex = Math.min(minIndex, elementMap.get(largeDivisor));
      }
    }
    return minIndex === Infinity ? -1 : minIndex;
  }
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
