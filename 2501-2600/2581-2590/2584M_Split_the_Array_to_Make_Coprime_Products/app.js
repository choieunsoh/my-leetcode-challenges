// 2584. Split the Array to Make Coprime Products
// https://leetcode.com/problems/split-the-array-to-make-coprime-products/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findValidSplit = function (nums) {
  const factors = new Array(nums.length).fill().map(() => new Set());
  const lastFactors = new Map();
  const firstFactors = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    for (let j = 2; j <= Math.sqrt(nums[i]); j++) {
      if (nums[i] % j === 0) {
        factors[i].add(j);
        lastFactors.set(j, (lastFactors.get(j) || 0) + 1);
      }
      while (num % j === 0) {
        num /= j;
      }
    }
    if (num > 1) {
      factors[i].add(num);
      lastFactors.set(num, (lastFactors.get(num) || 0) + 1);
    }
  }
  let zeroCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    const fac = factors[i];
    for (const f of fac) {
      firstFactors.set(f, (firstFactors.get(f) || 0) + 1);
      lastFactors.set(f, (lastFactors.get(f) || 0) - 1);
      if (lastFactors.get(f) === 0) {
        lastFactors.delete(f);
        zeroCount++;
      }
    }
    if (zeroCount === firstFactors.size) {
      return i;
    }
  }
  return -1;
};

var nums = [4, 7, 8, 15, 3, 5];
var expected = 2;
var result = findValidSplit(nums);
console.log(result, result === expected);

var nums = [4, 7, 15, 8, 3, 5];
var expected = -1;
var result = findValidSplit(nums);
console.log(result, result === expected);

var nums = [
  557663, 280817, 472963, 156253, 273349, 884803, 756869, 763183, 557663, 964357, 821411, 887849, 891133, 453379,
  464279, 574373, 852749, 15031, 156253, 360169, 526159, 410203, 6101, 954851, 860599, 802573, 971693, 279173, 134243,
  187367, 896953, 665011, 277747, 439441, 225683, 555143, 496303, 290317, 652033, 713311, 230107, 770047, 308323,
  319607, 772907, 627217, 119311, 922463, 119311, 641131, 922463, 404773, 728417, 948281, 612373, 857707, 990589, 12739,
  9127, 857963, 53113, 956003, 363397, 768613, 47981, 466027, 981569, 41597, 87149, 55021, 600883, 111953, 119083,
  471871, 125641, 922463, 562577, 269069, 806999, 981073, 857707, 831587, 149351, 996461, 432457, 10903, 921091, 119083,
  72671, 843289, 567323, 317003, 802129, 612373,
];
var expected = 18;
var result = findValidSplit(nums);
console.log(result, result === expected);
