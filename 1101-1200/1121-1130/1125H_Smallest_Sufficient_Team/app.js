// 1125. Smallest Sufficient Team
// https://leetcode.com/problems/smallest-sufficient-team/
/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function (req_skills, people) {
  const skillIndexMap = new Map();
  req_skills.forEach((skill, index) => skillIndexMap.set(skill, index));

  const skillTeamMap = new Map([[0, []]]);
  people.forEach((skills, index) => {
    let hisSkills = 0;

    for (const skill of skills) {
      hisSkills |= 1 << skillIndexMap.get(skill);
    }

    for (const [currSkill, team] of skillTeamMap) {
      const totalSkills = currSkill | hisSkills;

      if (totalSkills === currSkill) {
        continue;
      }

      if (!skillTeamMap.has(totalSkills) || team.length + 1 < skillTeamMap.get(totalSkills).length) {
        skillTeamMap.set(totalSkills, [...team, index]);
      }
    }
  });

  return skillTeamMap.get((1 << req_skills.length) - 1);
};

var req_skills = ['java', 'nodejs', 'reactjs'],
  people = [['java'], ['nodejs'], ['nodejs', 'reactjs']];
var expected = [0, 2];
var result = smallestSufficientTeam(req_skills, people);
console.log(result, result.join() === expected.join());

var req_skills = ['algorithms', 'math', 'java', 'reactjs', 'csharp', 'aws'],
  people = [
    ['algorithms', 'math', 'java'],
    ['algorithms', 'math', 'reactjs'],
    ['java', 'csharp', 'aws'],
    ['reactjs', 'csharp'],
    ['csharp', 'math'],
    ['aws', 'java'],
  ];
var expected = [1, 2];
var result = smallestSufficientTeam(req_skills, people);
console.log(result, result.join() === expected.join());

var req_skills = ['mwobudvo', 'goczubcwnfze', 'yspbsez', 'pf', 'ey', 'hkq'],
  people = [
    [],
    ['mwobudvo'],
    ['hkq'],
    ['pf'],
    ['pf'],
    ['mwobudvo', 'pf'],
    [],
    ['yspbsez'],
    [],
    ['hkq'],
    [],
    [],
    ['goczubcwnfze', 'pf', 'hkq'],
    ['goczubcwnfze'],
    ['hkq'],
    ['mwobudvo'],
    [],
    ['mwobudvo', 'pf'],
    ['pf', 'ey'],
    ['mwobudvo'],
    ['hkq'],
    [],
    ['pf'],
    ['mwobudvo', 'yspbsez'],
    ['mwobudvo', 'goczubcwnfze'],
    ['goczubcwnfze', 'pf'],
    ['goczubcwnfze'],
    ['goczubcwnfze'],
    ['mwobudvo'],
    ['mwobudvo', 'goczubcwnfze'],
    [],
    ['goczubcwnfze'],
    [],
    ['goczubcwnfze'],
    ['mwobudvo'],
    [],
    ['hkq'],
    ['yspbsez'],
    ['mwobudvo'],
    ['goczubcwnfze', 'ey'],
  ];
var expected = [12, 18, 23];
var result = smallestSufficientTeam(req_skills, people);
console.log(result, result.join() === expected.join());
