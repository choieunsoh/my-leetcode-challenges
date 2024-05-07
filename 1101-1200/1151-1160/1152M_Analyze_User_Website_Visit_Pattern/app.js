// 1152. Analyze User Website Visit Pattern
// https://leetcode.com/problems/analyze-user-website-visit-pattern/description/
// T.C.: O(n ^ 3)
// S.C.: O(n)
/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function (username, timestamp, website) {
  const userVisited = new Map();
  for (let i = 0; i < username.length; i++) {
    const user = username[i];
    const time = timestamp[i];
    const site = website[i];
    if (!userVisited.has(user)) userVisited.set(user, []);
    userVisited.get(user).push([time, site]);
  }

  const sequenceCounts = new Map();
  for (const [, log] of userVisited) {
    const threeSites = getThreeSites(log);
    for (const site of threeSites) {
      sequenceCounts.set(site, (sequenceCounts.get(site) ?? 0) + 1);
    }
  }

  let result = '';
  let maxCount = 0;
  for (const [seq, count] of sequenceCounts) {
    if (count > maxCount) {
      maxCount = count;
      result = seq;
    } else if (count === maxCount) {
      if (seq < result) result = seq;
    }
  }
  return result.split('-');

  function getThreeSites(log) {
    const threeSites = new Set();
    log.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < log.length - 2; i++) {
      for (let j = i + 1; j < log.length - 1; j++) {
        for (let k = j + 1; k < log.length; k++) {
          const key = `${log[i][1]}-${log[j][1]}-${log[k][1]}`;
          threeSites.add(key);
        }
      }
    }
    return threeSites;
  }
};

var username = ['joe', 'joe', 'joe', 'james', 'james', 'james', 'james', 'mary', 'mary', 'mary'],
  timestamp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  website = ['home', 'about', 'career', 'home', 'cart', 'maps', 'home', 'home', 'about', 'career'];
var expected = ['home', 'about', 'career'];
var result = mostVisitedPattern(username, timestamp, website);
console.log(result, result.join() === expected.join());

var username = ['ua', 'ua', 'ua', 'ub', 'ub', 'ub'],
  timestamp = [1, 2, 3, 4, 5, 6],
  website = ['a', 'b', 'a', 'a', 'b', 'c'];
var expected = ['a', 'b', 'a'];
var result = mostVisitedPattern(username, timestamp, website);
console.log(result, result.join() === expected.join());
