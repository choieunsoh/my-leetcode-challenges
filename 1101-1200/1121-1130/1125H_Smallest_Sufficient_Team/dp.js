// 1125. Smallest Sufficient Team
// https://leetcode.com/problems/smallest-sufficient-team/
/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function (req_skills, people) {
  const skill_to_bit = req_skills.reduce((acc, skill, i) => {
    acc[skill] = 1 << i;
    return acc;
  }, {});

  const target_skills = (1 << req_skills.length) - 1;
  const dp = new Array(target_skills + 1).fill(null);
  dp[0] = [];

  for (let i = 0; i < people.length; i++) {
    const person_skills = people[i];
    const person_bitmask = person_skills.reduce((acc, skill) => {
      return acc | skill_to_bit[skill];
    }, 0);

    for (let covered_skills = 0; covered_skills <= target_skills; covered_skills++) {
      if (dp[covered_skills] === null) continue;

      const new_skills = covered_skills | person_bitmask;
      if (dp[new_skills] === null || dp[new_skills].length > dp[covered_skills].length + 1) {
        dp[new_skills] = [...dp[covered_skills], i];
      }
    }
  }

  return dp[target_skills];
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
