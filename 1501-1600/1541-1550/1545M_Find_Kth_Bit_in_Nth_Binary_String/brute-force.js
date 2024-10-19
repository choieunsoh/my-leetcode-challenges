// 1545. Find Kth Bit in Nth Binary String
// https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/description/
// T.C.: O(2^n)
// S.C.: O(2^n)
/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  /*
  S1 = "0"
  Si = Si - 1 + "1" + reverse(invert(Si - 1)) for i > 1
  S1=0
  S2=011
  S3=0111001
  S4=011100110110001
  S5=0111001101100011011100100110001
  */
  let S = '0';
  for (let i = 2; i <= n; i++) {
    let tempS = S;
    S += '1';
    for (let j = tempS.length - 1; j >= 0; j--) {
      S += tempS[j] === '0' ? '1' : '0';
    }
  }
  return S[k - 1];
};

var n = 3,
  k = 1;
var expected = '0';
var result = findKthBit(n, k);
console.log(result, result === expected);

var n = 4,
  k = 11;
var expected = '1';
var result = findKthBit(n, k);
console.log(result, result === expected);

var n = 4,
  k = 8;
var expected = '1';
var result = findKthBit(n, k);
console.log(result, result === expected);

var n = 4,
  k = 6;
var expected = '0';
var result = findKthBit(n, k);
console.log(result, result === expected);

var n = 5,
  k = 31;
var expected = '1';
var result = findKthBit(n, k);
console.log(result, result === expected);
