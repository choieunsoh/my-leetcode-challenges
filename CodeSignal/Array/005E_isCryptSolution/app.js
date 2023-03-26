// isCryptSolution
/**
 * @param {string[]} crypt
 * @param {string[][]} solution
 * @return {boolean}
 */
function isCryptSolution(crypt, solution) {
  const map = new Map(solution);
  const [word1, word2, word3] = crypt;

  const num1 = decode(word1);
  if (num1.toString().length < word1.length) return false;

  const num2 = decode(word2);
  if (num2.toString().length < word2.length) return false;

  const num3 = decode(word3);
  if (num3.toString().length < word3.length) return false;

  return num1 + num2 === num3;

  function decode(word) {
    let num = 0;
    for (const ch of word) {
      num = num * 10 + Number(map.get(ch));
    }
    return num;
  }
}

var crypt = ['SEND', 'MORE', 'MONEY'],
  solution = [
    ['O', '0'],
    ['M', '1'],
    ['Y', '2'],
    ['E', '5'],
    ['N', '6'],
    ['D', '7'],
    ['R', '8'],
    ['S', '9'],
  ];
var expected = true;
var result = isCryptSolution(crypt, solution);
console.log(result, result === expected);

var crypt = ['TEN', 'TWO', 'ONE'],
  solution = [
    ['O', '1'],
    ['T', '0'],
    ['W', '9'],
    ['E', '5'],
    ['N', '4'],
  ];
var expected = false;
var result = isCryptSolution(crypt, solution);
console.log(result, result === expected);
