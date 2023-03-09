// 187. Repeated DNA Sequences
// https://leetcode.com/problems/repeated-dna-sequences/
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const result = new Set();
  const seen = new Set();
  for (let i = 0; i < s.length - 9; i++) {
    const dna = s.substring(i, i + 10);
    if (seen.has(dna)) {
      result.add(dna);
    } else {
      seen.add(dna);
    }
  }
  return [...result];
};

var s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';
var expected = ['AAAAACCCCC', 'CCCCCAAAAA'];
var result = findRepeatedDnaSequences(s);
console.log(result, result.sort().join() === expected.sort().join());

var s = 'AAAAAAAAAAAAA';
var expected = ['AAAAAAAAAA'];
var result = findRepeatedDnaSequences(s);
console.log(result, result.sort().join() === expected.sort().join());
