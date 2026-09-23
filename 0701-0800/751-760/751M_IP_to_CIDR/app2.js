// 751. IP to CIDR
// https://leetcode.com/problems/ip-to-cidr/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {string} ip
 * @param {number} n
 * @return {string[]}
 */
var ipToCIDR = function (ip, n) {
  // this findBitNum passes the buggy test case by coincidence.
  const findBitNum = (num) => num.toString(2).length - 1;
  const numToIp = (num) => [24, 16, 8, 0].map((i) => (num >>> i) % 256).join('.');
  let start = ip.split('.').reduce((acc, x) => 256 * acc + parseInt(x), 0);

  const result = [];
  while (n > 0) {
    // start & -start will clear all bits before rightmost 1
    const len1 = findBitNum(start & -start);
    const len2 = findBitNum(n);
    const len = Math.min(len1, len2);
    result.push(numToIp(start) + `/${32 - len}`);
    start += 1 << len;
    n -= 1 << len;
  }
  return result;
};

var ip = '255.0.0.7',
  n = 10;
var expected = ['255.0.0.7/32', '255.0.0.8/29', '255.0.0.16/32'];
var result = ipToCIDR(ip, n);
console.log(result, result.join() === expected.join());

var ip = '117.145.102.62',
  n = 8;
var expected = ['117.145.102.62/31', '117.145.102.64/30', '117.145.102.68/31'];
var result = ipToCIDR(ip, n);
console.log(result, result.join() === expected.join());
