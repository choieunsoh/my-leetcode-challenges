// 244. Shortest Word Distance II
// https://leetcode.com/problems/shortest-word-distance-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} wordsDict
 */
var WordDistance = function (wordsDict) {
  this.locations = new Map();
  for (let i = 0; i < wordsDict.length; i++) {
    const loc = this.locations.get(wordsDict[i]) ?? [];
    loc.push(i);
    this.locations.set(wordsDict[i], loc);
  }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function (word1, word2) {
  const loc1 = this.locations.get(word1);
  const loc2 = this.locations.get(word2);

  let l1 = 0;
  let l2 = 0;
  let minDiff = Infinity;
  while (l1 < loc1.length && l2 < loc2.length) {
    minDiff = Math.min(minDiff, Math.abs(loc1[l1] - loc2[l2]));
    if (loc1[l1] < loc2[l2]) {
      l1++;
    } else {
      l2++;
    }
  }
  return minDiff;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */

function runTestCases(ops, inputs, outputs) {
  let obj = null;
  let result = null;
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'WordDistance') {
      obj = new WordDistance(...inputs[i]);
    } else if (ops[i] === 'shortest') {
      result = obj.shortest(...inputs[i]);
    }
    console.log('Output:', result, 'Expected:', outputs[i], result === outputs[i]);
  }
}

var ops = ['WordDistance', 'shortest', 'shortest'],
  inputs = [[['practice', 'makes', 'perfect', 'coding', 'makes']], ['coding', 'practice'], ['makes', 'coding']],
  outputs = [null, 3, 1];
runTestCases(ops, inputs, outputs);
