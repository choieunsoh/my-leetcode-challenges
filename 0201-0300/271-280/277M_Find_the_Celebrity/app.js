// 277. Find the Celebrity
// https://leetcode.com/problems/find-the-celebrity/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
  const cachedKnows = cached(knows);

  function isCelebrity(candidate, n) {
    for (let person = 0; person < n; person++) {
      if (candidate === person) continue;
      if (cachedKnows(candidate, person) || !knows(person, candidate)) {
        return false;
      }
    }
    return true;
  }

  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    let candidate = 0;
    for (let person = 0; person < n; person++) {
      if (cachedKnows(candidate, person)) {
        candidate = person;
      }
    }
    if (isCelebrity(candidate, n)) return candidate;
    return -1;
  };
};

function cached(f) {
  const cache = new Map();
  return function (...args) {
    const cacheKey = args.join(',');
    if (!cache.has(cacheKey)) {
      const value = f(...args);
      cache.set(cacheKey, value);
    }

    return cache.get(cacheKey);
  };
}
