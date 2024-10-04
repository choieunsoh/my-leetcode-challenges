// 2491. Divide Players Into Teams of Equal Skill
// https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  const n = skill.length;
  if (n === 2) return skill[0] * skill[1];

  const skillCount = new Array(1001).fill(0);
  let totalSkill = 0;
  for (const playerSkill of skill) {
    totalSkill += playerSkill;
    skillCount[playerSkill]++;
  }

  const teams = n >> 1;
  if (totalSkill % teams !== 0) return -1;

  const teamSkill = totalSkill / teams;

  let result = 0;
  for (const playerSkill of skill) {
    const partnerSkill = teamSkill - playerSkill;
    if (skillCount[partnerSkill] === 0) return -1;
    result += playerSkill * partnerSkill;
    skillCount[partnerSkill]--;
  }
  return result >> 1;
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
