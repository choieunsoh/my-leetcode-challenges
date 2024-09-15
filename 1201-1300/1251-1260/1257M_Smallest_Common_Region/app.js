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
  const regionSet = new Set([region1]);
  while (map.has(region1)) {
    region1 = map.get(region1);
    regionSet.add(region1);
  }

  while (true) {
    if (regionSet.has(region2)) return region2;
    region2 = map.get(region2);
  }

  function buildMap(regions) {
    const map = new Map();
    for (const region of regions) {
      const biggerRegion = region[0];
      for (let i = 1; i < region.length; i++) {
        const smallerRegion = region[i];
        map.set(smallerRegion, biggerRegion);
      }
    }
    return map;
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
