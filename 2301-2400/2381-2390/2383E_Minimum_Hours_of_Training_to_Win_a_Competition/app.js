// 2383. Minimum Hours of Training to Win a Competition
// https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
  let trainingHours = 0;
  let currEnergy = initialEnergy;
  let currExp = initialExperience;
  const n = energy.length;
  for (let i = 0; i < n; i++) {
    if (currEnergy <= energy[i]) {
      const energyNeeded = energy[i] - currEnergy + 1;
      trainingHours += energyNeeded;
      currEnergy += energyNeeded;
    }

    if (currExp <= experience[i]) {
      const expNeeded = experience[i] - currExp + 1;
      trainingHours += expNeeded;
      currExp += expNeeded;
    }

    currEnergy -= energy[i];
    currExp += experience[i];
  }
  return trainingHours;
};

var initialEnergy = 5,
  initialExperience = 3,
  energy = [1, 4, 3, 2],
  experience = [2, 6, 3, 1];
var expected = 8;
var result = minNumberOfHours(initialEnergy, initialExperience, energy, experience);
console.log(result, result === expected);

var initialEnergy = 2,
  initialExperience = 4,
  energy = [1],
  experience = [3];
var expected = 0;
var result = minNumberOfHours(initialEnergy, initialExperience, energy, experience);
console.log(result, result === expected);
