// 2551. Put Marbles in Bags
// https://leetcode.com/problems/put-marbles-in-bags/
// T.C: O(n * log(n))
// S.C: O(n)
/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
  const numberOfCuts = k - 1;
  const n = weights.length;

  // If k equals the length of weights, the only distribution is each marble in its own bag
  if (k === n) {
    return 0;
  }

  // Step 1: Compute the cost between each adjacent pair
  const cost = [];
  for (let i = 0; i < n - 1; i++) {
    cost.push(weights[i] + weights[i + 1]);
  }

  // Step 2: Sort the cost array
  cost.sort((a, b) => a - b);

  // Step 3: Find the maximum score by picking the largest k-1 costs
  let maxScore = 0;
  for (let i = cost.length - 1; i >= cost.length - numberOfCuts; i--) {
    maxScore += cost[i];
  }

  // Step 4: Find the minimum score by picking the smallest k-1 costs
  let minScore = 0;
  for (let i = 0; i < numberOfCuts; i++) {
    minScore += cost[i];
  }

  // Step 5: Return the difference between max and min scores
  return maxScore - minScore;
};

var weights = [1, 3, 5, 1],
  k = 2;
var expected = 4;
var result = putMarbles(weights, k);
console.log(result, result === expected);

var weights = [1, 3],
  k = 2;
var expected = 0;
var result = putMarbles(weights, k);
console.log(result, result === expected);
