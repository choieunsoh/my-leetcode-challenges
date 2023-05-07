// 433. Minimum Genetic Mutation
// https://leetcode.com/problems/minimum-genetic-mutation/
/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  if (bank.length === 0) return -1;
  const bankSet = new Set(bank);
  if (!bankSet.has(endGene)) return -1;

  const geneChars = ['A', 'C', 'G', 'T'];
  const seen = new Set([startGene]);
  let queue = [startGene];
  let count = 0;
  while (queue.length) {
    const nextQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const currentGene = queue[i];
      if (currentGene === endGene) return count;

      for (let j = 0; j < currentGene.length; j++) {
        for (const g of geneChars) {
          const nextGene = currentGene.substring(0, j) + g + currentGene.substring(j + 1);
          if (!bankSet.has(nextGene) || seen.has(nextGene)) continue;
          nextQueue.push(nextGene);
          seen.add(nextGene);
        }
      }
    }
    count++;
    queue = nextQueue;
  }
  return -1;
};

var startGene = 'AACCGGTT',
  endGene = 'AACCGGTA',
  bank = ['AACCGGTA'];
var expected = 1;
var result = minMutation(startGene, endGene, bank);
console.log(result, result === expected);

var startGene = 'AACCGGTT',
  endGene = 'AAACGGTA',
  bank = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'];
var expected = 2;
var result = minMutation(startGene, endGene, bank);
console.log(result, result === expected);

var startGene = 'AACCTTGG',
  endGene = 'AATTCCGG',
  bank = ['AATTCCGG', 'AACCTGGG', 'AACCCCGG', 'AACCTACC'];
var expected = -1;
var result = minMutation(startGene, endGene, bank);
console.log(result, result === expected);
