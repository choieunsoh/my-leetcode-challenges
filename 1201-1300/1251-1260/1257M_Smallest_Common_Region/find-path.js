// 1257. Smallest Common Region
// https://leetcode.com/problems/smallest-common-region/description/
// T.C.: O(n*m)
// S.C.: O(n*m)
/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function (regions, region1, region2) {
  const map = buildMap(regions);
  const biggestRegion = regions[0][0];
  const pathRegion1 = [];
  const pathRegion2 = [];
  buildRegionPath(biggestRegion, region1, pathRegion1);
  buildRegionPath(biggestRegion, region2, pathRegion2);
  return findLCA(pathRegion1, pathRegion2);

  function buildMap(regions) {
    const map = new Map();
    for (const region of regions) {
      for (const r of region) {
        map.set(r, [r]);
      }
      map.set(region[0], region);
    }
    return map;
  }

  function buildRegionPath(biggerRegion, targetRegion, pathRegions) {
    if (!map.has(biggerRegion)) return false;

    pathRegions.push(biggerRegion);
    if (targetRegion === biggerRegion) return true;

    const smallerRegions = map.get(biggerRegion);
    for (const smallerRegion of smallerRegions) {
      if (smallerRegion === biggerRegion) continue;
      if (buildRegionPath(smallerRegion, targetRegion, pathRegions)) {
        return true;
      }
    }

    pathRegions.pop();
    return false;
  }

  function findLCA(path1, path2) {
    let i = 0;
    while (i < path1.length && i < path2.length && path1[i] === path2[i]) {
      i++;
    }
    return path1[i - 1];
  }
};

var regions = [
    ['Earth', 'North America', 'South America'],
    ['North America', 'United States', 'Canada'],
    ['United States', 'New York', 'Boston'],
    ['Canada', 'Ontario', 'Quebec'],
    ['South America', 'Brazil'],
  ],
  region1 = 'Quebec',
  region2 = 'New York';
var expected = 'North America';
var result = findSmallestRegion(regions, region1, region2);
console.log(result, result === expected);

var regions = [
    ['Earth', 'North America', 'South America'],
    ['North America', 'United States', 'Canada'],
    ['United States', 'New York', 'Boston'],
    ['Canada', 'Ontario', 'Quebec'],
    ['South America', 'Brazil'],
  ],
  region1 = 'Canada',
  region2 = 'South America';
var expected = 'Earth';
var result = findSmallestRegion(regions, region1, region2);
console.log(result, result === expected);
