/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfSubsequences = function (nums) {
  const n = nums.length;
  const productPairs = new Map();
  for (let p = 0; p < n - 2; p++) {
    for (let r = p + 2; r < n; r++) {
      const product = nums[p] * nums[r];
      if (!productPairs.has(product)) {
        productPairs.set(product, []);
      }
      productPairs.get(product).push([p, r]);
    }
  }

  let count = 0;
  for (const pairs of productPairs.values()) {
    const m = pairs.length;
    for (let i = 0; i < m; i++) {
      const [p1, r1] = pairs[i];
      for (let j = i + 1; j < m; j++) {
        const [p2, r2] = pairs[j];
        if (p1 < p2 && p2 < r1 && r1 < r2 && p2 - p1 > 1 && r1 - p2 > 1 && r2 - r1 > 1) {
          count++;
        }
      }
    }
  }
  return count;
};

var nums = [1, 2, 3, 4, 3, 6, 1];
var expected = 1;
var result = numberOfSubsequences(nums);
console.log(result, result === expected);

var nums = [3, 4, 3, 4, 3, 4, 3, 4];
var expected = 3;
var result = numberOfSubsequences(nums);
console.log(result, result === expected);
