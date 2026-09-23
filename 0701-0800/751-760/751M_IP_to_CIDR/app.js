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
  const result = [];
  let start = ip.split('.').reduce((acc, num) => 256 * acc + parseInt(num), 0);

  while (n > 0) {
    const len1 = findBitNum(start);
    const len2 = n.toString(2).length - 1;
    const size = Math.min(len1, len2);
    result.push(numToIp(start) + `/${32 - size}`);
    start += 2 ** size;
    n -= 2 ** size;
  }

  return result;

  // find number of bits from rightmost one to the right end
  function findBitNum(num) {
    let result = 0;
    const numStr = num.toString(2).padStart(32, '0');
    while (result < 32 && numStr[31 - result] !== '1') {
      result++;
    }
    return result;
  }

  function numToIp(num) {
    return [24, 16, 8, 0].map((i) => Math.floor(num / 2 ** i) % 256).join('.');
  }
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

var ip = '0.0.0.0',
  n = 2;
var expected = ['0.0.0.0/31'];
var result = ipToCIDR(ip, n);
console.log(result, result.join() === expected.join());
