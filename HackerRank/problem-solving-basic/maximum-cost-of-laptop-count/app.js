// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} costs
 * @param {string[]} labels
 * @param {number} dailyCount
 * @return {number}
 */
function maxCost(costs, labels, dailyCount) {
  let maxDailyCost = 0;
  let dailyCost = 0;
  let legalCount = 0;
  for (let i = 0; i < costs.length; i++) {
    dailyCost += costs[i];
    if (labels[i] === 'legal') {
      legalCount++;
    }
    if (legalCount === dailyCount) {
      maxDailyCost = Math.max(maxDailyCost, dailyCost);
      dailyCost = 0;
      legalCount = 0;
    }
  }
  return maxDailyCost;
}

var costs = [2, 5, 3, 11, 1],
  labels = ['legal', 'illegal', 'legal', 'illegal', 'legal'],
  dailyCount = 2;
var expected = 10;
var result = maxCost(costs, labels, dailyCount);
console.log(result, result === expected);

var costs = [2],
  labels = ['illegal'],
  dailyCount = 1;
var expected = 0;
var result = maxCost(costs, labels, dailyCount);
console.log(result, result === expected);

var costs = [0, 3, 2, 3, 4],
  labels = ['legal', 'legal', 'illegal', 'legal', 'legal'],
  dailyCount = 1;
var expected = 5;
var result = maxCost(costs, labels, dailyCount);
console.log(result, result === expected);
