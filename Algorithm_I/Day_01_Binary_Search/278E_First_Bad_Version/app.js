/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
const isBadVersion = (version) => {
  console.log("check bad version");
  return badVersion === version;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = (n) => {
  if (n === 1) return 1;

  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isBadVersion(mid)) {
      if (isBadVersion(mid - 1) === false) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else {
      if (isBadVersion(mid + 1) === true) {
        return mid + 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return 1;
};
var badVersion = 4;
console.log(solution(8));
