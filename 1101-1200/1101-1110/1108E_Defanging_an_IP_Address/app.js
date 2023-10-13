// 1108. Defanging an IP Address
// https://leetcode.com/problems/defanging-an-ip-address/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replace(/\./g, '[.]');
};

var address = '1.1.1.1';
var expected = '1[.]1[.]1[.]1';
var result = defangIPaddr(address);
console.log(result, result === expected);

var address = '255.100.50.0';
var expected = '255[.]100[.]50[.]0';
var result = defangIPaddr(address);
console.log(result, result === expected);
