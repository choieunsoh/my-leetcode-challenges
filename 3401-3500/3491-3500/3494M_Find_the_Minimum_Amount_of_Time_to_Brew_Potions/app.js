// 3494. Find the Minimum Amount of Time to Brew Potions
// https://leetcode.com/problems/find-the-minimum-amount-of-time-to-brew-potions/description/
// T.C.: O(n*m)
// S.C.: O(n)
/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function (skill, mana) {
  const n = skill.length;
  const m = mana.length;
  const sPre = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    sPre[i] = sPre[i - 1] + skill[i];
  }
  console.log(sPre);

  let tSum = skill[0] * mana[0];
  for (let j = 1; j < m; j++) {
    let tMax = skill[0] * mana[j];
    for (let i = 1; i < n; i++) {
      const tDiff = sPre[i] * mana[j - 1] - sPre[i - 1] * mana[j];
      tMax = Math.max(tMax, tDiff);
    }
    tSum += tMax;
  }
  return tSum + sPre[n - 1] * mana[m - 1];
};

var skill = [1, 5, 2, 4],
  mana = [5, 1, 4, 2];
var expected = 110;
var result = minTime(skill, mana);
console.log(result, result === expected);

var skill = [1, 1, 1],
  mana = [1, 1, 1];
var expected = 5;
var result = minTime(skill, mana);
console.log(result, result === expected);

var skill = [1, 2, 3, 4],
  mana = [1, 2];
var expected = 21;
var result = minTime(skill, mana);
console.log(result, result === expected);
