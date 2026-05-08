// 3629. Minimum Jumps to Reach End via Prime Teleportation
// https://leetcode.com/problems/minimum-jumps-to-reach-end-via-prime-teleportation/description/
// T.C.: O(m log m + n log n), where m = 10^6, n = nums.length
// S.C.: O(m log log m)
const MX = 1000001;
const factors = Array.from({ length: MX }, () => []);
for (let i = 2; i < MX; i++) {
  if (factors[i].length === 0) {
    for (let j = i; j < MX; j += i) {
      factors[j].push(i);
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function (nums) {
  const n = nums.length;
  const edges = new Map();
  for (let i = 0; i < n; i++) {
    const a = nums[i];
    if (factors[a].length === 1) {
      if (!edges.has(a)) edges.set(a, []);
      edges.get(a).push(i);
    }
  }

  let result = 0;
  const seen = new Array(n).fill(false);
  seen[n - 1] = true;
  let q = [n - 1];
  while (true) {
    let q2 = [];
    for (const i of q) {
      if (i === 0) return result;
      if (i > 0 && !seen[i - 1]) {
        seen[i - 1] = true;
        q2.push(i - 1);
      }
      if (i < n - 1 && !seen[i + 1]) {
        seen[i + 1] = true;
        q2.push(i + 1);
      }
      for (const p of factors[nums[i]]) {
        const list = edges.get(p);
        if (list) {
          for (const j of list) {
            if (!seen[j]) {
              seen[j] = true;
              q2.push(j);
            }
          }
          edges.set(p, []);
        }
      }
    }
    q = q2;
    result++;
  }
};

var nums = [1, 2, 4, 6];
var expected = 2;
var result = minJumps(nums);
console.log(result, result === expected);

var nums = [2, 3, 4, 7, 9];
var expected = 2;
var result = minJumps(nums);
console.log(result, result === expected);

var nums = [4, 6, 5, 8];
var expected = 3;
var result = minJumps(nums);
console.log(result, result === expected);
