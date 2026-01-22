// 2975. Maximum Square Area by Removing Fences From a Field
// https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/description/
// T.C.: O(h^2+v^2)
// S.C.: O(h^2+v^2)
/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
var maximizeSquareArea = function (m, n, hFences, vFences) {
  // Initialize result as -1 (no square found)
  let result = -1;

  // Add boundary fences to both arrays
  hFences.push(1, m);
  vFences.push(1, n);

  // Sort fences arrays for consistent distance calculation
  hFences.sort((a, b) => a - b);
  vFences.sort((a, b) => a - b);

  // Set to store distances from smaller fence array
  const distanceSet = new Set();

  // Determine which fence array is smaller for optimization
  const isHFencesSmaller = hFences.length < vFences.length;
  const bigFences = isHFencesSmaller ? vFences : hFences;
  const smallFences = isHFencesSmaller ? hFences : vFences;

  // Generate all distances from smaller fence array (reverse iteration)
  for (let i = smallFences.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      distanceSet.add(smallFences[i] - smallFences[j]);
    }
  }

  // Track maximum common distance found
  let maxCommonDistance = -1;

  // Check distances in larger fence array against set
  for (let i = bigFences.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const currentDistance = bigFences[i] - bigFences[j];

      // Early break if distance is smaller than current max
      if (currentDistance <= maxCommonDistance) break;

      // Update max if distance exists in set
      if (distanceSet.has(currentDistance)) {
        maxCommonDistance = Math.max(maxCommonDistance, currentDistance);
      }
    }
  }

  // Return -1 if no common distance found
  if (maxCommonDistance === -1) return -1;

  // Calculate area = distance² modulo 1,000,000,007
  const MOD = 1000000007n;
  const distance = BigInt(maxCommonDistance);

  return Number((distance * distance) % MOD);
};

var m = 4,
  n = 3,
  hFences = [2, 3],
  vFences = [2];
var expected = 4;
var result = maximizeSquareArea(m, n, hFences, vFences);
console.log(result, result === expected);

var m = 6,
  n = 7,
  hFences = [2],
  vFences = [4];
var expected = -1;
var result = maximizeSquareArea(m, n, hFences, vFences);
console.log(result, result === expected);
