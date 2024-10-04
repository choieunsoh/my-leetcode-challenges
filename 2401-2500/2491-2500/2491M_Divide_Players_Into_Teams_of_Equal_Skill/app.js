// 2491. Divide Players Into Teams of Equal Skill
// https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  const n = skill.length;
  if (n === 2) return skill[0] * skill[1];

  const totalSkill = skill.reduce((sum, num) => sum + num, 0);
  const teams = n >> 1;
  if (totalSkill % teams !== 0) return -1;

  skill.sort((a, b) => a - b);
  const teamSkill = totalSkill / teams;

  let left = 0;
  let right = n - 1;
  let result = 0;
  while (left < right) {
    if (skill[left] + skill[right] !== teamSkill) return -1;
    result += skill[left++] * skill[right--];
  }
  return result;
};

var skill = [3, 2, 5, 1, 3, 4];
var expected = 22;
var result = dividePlayers(skill);
console.log(result, result === expected);

var skill = [3, 4];
var expected = 12;
var result = dividePlayers(skill);
console.log(result, result === expected);

var skill = [1, 1, 2, 3];
var expected = -1;
var result = dividePlayers(skill);
console.log(result, result === expected);

var skill = [2, 4, 1, 3];
var expected = 10;
var result = dividePlayers(skill);
console.log(result, result === expected);
