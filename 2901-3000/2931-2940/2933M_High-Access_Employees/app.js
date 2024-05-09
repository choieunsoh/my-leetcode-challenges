// 2933. High-Access Employees
// https://leetcode.com/problems/high-access-employees/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function (access_times) {
  const times = access_times.map(([employee, time]) => {
    const h = Number(time[0] + time[1]);
    const m = Number(time[2] + time[3]);
    return [employee, h * 60 + m];
  });

  const map = new Map();
  for (const [employee, time] of times) {
    if (!map.has(employee)) map.set(employee, []);
    map.get(employee).push(time);
  }

  const result = [];
  for (const [employee, times] of map) {
    if (times.length < 3) continue;
    times.sort((a, b) => a - b);
    for (let i = 0; i < times.length - 2; i++) {
      if (times[i + 2] - times[i] < 60) {
        result.push(employee);
        break;
      }
    }
  }
  return result;
};

var access_times = [
  ['a', '0549'],
  ['b', '0457'],
  ['a', '0532'],
  ['a', '0621'],
  ['b', '0540'],
];
var expected = ['a'];
var result = findHighAccessEmployees(access_times);
console.log(result, result.sort().join() === expected.sort().join());

var access_times = [
  ['d', '0002'],
  ['c', '0808'],
  ['c', '0829'],
  ['e', '0215'],
  ['d', '1508'],
  ['d', '1444'],
  ['d', '1410'],
  ['c', '0809'],
];
var expected = ['c', 'd'];
var result = findHighAccessEmployees(access_times);
console.log(result, result.sort().join() === expected.sort().join());

var access_times = [
  ['cd', '1025'],
  ['ab', '1025'],
  ['cd', '1046'],
  ['cd', '1055'],
  ['ab', '1124'],
  ['ab', '1120'],
];
var expected = ['ab', 'cd'];
var result = findHighAccessEmployees(access_times);
console.log(result, result.sort().join() === expected.sort().join());

var access_times = [
  ['mw', '0748'],
  ['phusvosccu', '0731'],
  ['mw', '0716'],
  ['zwzcdp', '0729'],
  ['mw', '0703'],
  ['mw', '0812'],
  ['mi', '0820'],
  ['mw', '0808'],
  ['mw', '0809'],
];
var expected = ['mw'];
var result = findHighAccessEmployees(access_times);
console.log(result, result.sort().join() === expected.sort().join());

var access_times = [
  ['wjmqm', '0442'],
  ['wjmqm', '0504'],
  ['r', '0525'],
  ['va', '0436'],
  ['r', '0440'],
  ['va', '0505'],
  ['va', '0509'],
  ['r', '0515'],
  ['r', '0414'],
];
var expected = ['r', 'va'];
var result = findHighAccessEmployees(access_times);
console.log(result, result.sort().join() === expected.sort().join());

var access_times = [
  ['akuhmu', '0454'],
  ['aywtqh', '0523'],
  ['akuhmu', '0518'],
  ['ihhkc', '0439'],
  ['ihhkc', '0508'],
  ['akuhmu', '0529'],
  ['aywtqh', '0530'],
  ['aywtqh', '0419'],
];
var expected = ['akuhmu'];
var result = findHighAccessEmployees(access_times);
console.log(result, result.sort().join() === expected.sort().join());
