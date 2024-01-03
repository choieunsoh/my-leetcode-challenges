// 2125. Number of Laser Beams in a Bank
// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/
// T.C.: O(m * n)
// S.C.: O(1)
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let result = 0;
  let prevSecurityDevices = 0;
  for (const row of bank) {
    const securityDevices = countOnes(row);
    if (securityDevices === 0) continue;
    result += securityDevices * prevSecurityDevices;
    prevSecurityDevices = securityDevices;
  }

  return result;

  function countOnes(row) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
      count += row.charAt(i) === '1';
    }
    return count;
  }
};

var bank = ['011001', '000000', '010100', '001000'];
var expected = 8;
var result = numberOfBeams(bank);
console.log(result, result === expected);

var bank = ['000', '111', '000'];
var expected = 0;
var result = numberOfBeams(bank);
console.log(result, result === expected);

var bank = ['1', '1'];
var expected = 1;
var result = numberOfBeams(bank);
console.log(result, result === expected);

var bank = [
  '111111111111111111111111110000000',
  '100101000110000001001100000101110',
  '000000001000100010001000100010001',
  '000000000010000000000100000000001',
  '101011000011110000111111001101101',
  '000000001000001000001000001000001',
  '100000000001000000000010000000000',
  '100000100000100000100000100000000',
  '000000000000001011000100000000000',
  '000000000000000000000010000010010',
  '000001001001001001001001001001001',
  '100010001000100010001000100000000',
  '111011111111111111111111011001100',
  '000000001000100010001000100010001',
  '000010101010101010101010101010101',
  '100000001000100000100100000100010',
  '000000001000100010001000100010001',
  '000000100010001101010110100100110',
  '100010001000100010001000100000000',
  '100001000010000100001000010000000',
  '101100010000001111000000100011000',
  '100001000010000100001000010000000',
  '000000001000001000001000001000001',
  '000011111111111111111111111111111',
  '100101111001011111111111110111000',
  '000100000000000010001000100000100',
];
var expected = 2667;
var result = numberOfBeams(bank);
console.log(result, result === expected);
