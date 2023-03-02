// 67. Add Binary
// https://leetcode.com/problems/add-binary/
var addBinary = function (a: string, b: string): string {
  let result = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0 || carry) {
    const num1 = Number(a[i--] ?? '0');
    const num2 = Number(b[j--] ?? '0');
    const sum = num1 + num2 + carry;
    carry = sum >> 1;
    result = (sum & 1) + result;
  }

  return result;
};

var a = '11',
  b = '1';
var expected = '100';
var result = addBinary(a, b);
console.log(result, expected === result);

var a = '1010',
  b = '1011';
var expected = '10101';
var result = addBinary(a, b);
console.log(result, expected === result);
