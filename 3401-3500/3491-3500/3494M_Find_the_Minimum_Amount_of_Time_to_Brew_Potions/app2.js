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
  const wizardCount = skill.length;
  const potionCount = mana.length;

  // Precompute cumulative sum of skills
  const cumulativeSkill = new Array(wizardCount);
  cumulativeSkill[0] = skill[0];
  for (let wizardIdx = 1; wizardIdx < wizardCount; wizardIdx++) {
    cumulativeSkill[wizardIdx] = cumulativeSkill[wizardIdx - 1] + skill[wizardIdx];
  }

  // Track the start time of the current potion at the first wizard
  let currentPotionStartTime = 0; // First potion starts at time 0

  // Iterate through potions and update their start times
  for (let potionIdx = 1; potionIdx < potionCount; potionIdx++) {
    // The constraint from the first wizard
    let minTimeDelta = skill[0] * mana[potionIdx - 1];

    // Check constraints from all wizard transitions
    for (let wizardIdx = 0; wizardIdx < wizardCount - 1; wizardIdx++) {
      // Calculate time difference required to avoid waiting
      const timeDifference =
        cumulativeSkill[wizardIdx + 1] * mana[potionIdx - 1] - cumulativeSkill[wizardIdx] * mana[potionIdx];

      if (timeDifference > minTimeDelta) {
        minTimeDelta = timeDifference;
      }
    }

    // Update the start time for the current potion
    currentPotionStartTime += minTimeDelta;
  }

  // The finish time is the start time of the last potion plus its total processing time
  const lastPotionTotalTime = cumulativeSkill[wizardCount - 1] * mana[potionCount - 1];
  return currentPotionStartTime + lastPotionTotalTime;
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
