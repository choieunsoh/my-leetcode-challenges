// 3162. Find the Number of Good Pairs I
// https://leetcode.com/problems/find-the-number-of-good-pairs-i/description/
// T.C.: O(m+n*sqrt(n/k))
// S.C.: O(m)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
  let pairs = 0;
  const freqMap2 = new Map();

  // Step 1: Create frequency map for nums2
  for (const num2 of nums2) {
    freqMap2.set(num2, (freqMap2.get(num2) || 0) + 1);
  }

  // Step 2: Iterate through nums1
  for (const num1 of nums1) {
    // A necessary condition for num1 % (num2 * k) === 0
    if (num1 % k !== 0) {
      continue;
    }

    const target = num1 / k;

    // Step 3: Find divisors of target and count pairs
    for (let divisor = 1; divisor * divisor <= target; divisor++) {
      if (target % divisor === 0) {
        // 'i' is a divisor
        if (freqMap2.has(divisor)) {
          pairs += freqMap2.get(divisor);
        }

        const otherDivisor = target / divisor;
        // Avoid double-counting if i is the square root
        if (divisor * divisor !== target && freqMap2.has(otherDivisor)) {
          pairs += freqMap2.get(otherDivisor);
        }
      }
    }
  }

  return pairs;
};

var nums1 = [1, 3, 4],
  nums2 = [1, 3, 4],
  k = 1;
var expected = 5;
var result = numberOfPairs(nums1, nums2, k);
console.log(result, result === expected);

var nums1 = [1, 2, 4, 12],
  nums2 = [2, 4],
  k = 3;
var expected = 2;
var result = numberOfPairs(nums1, nums2, k);
console.log(result, result === expected);
