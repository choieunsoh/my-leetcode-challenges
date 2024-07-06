// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} files
 * @param {number} numCores
 * @param {number} limit
 * @return {number}
 */
function minTime(files, numCores, limit) {
  const parallelizeFiles = [];
  let totalTime = 0;
  for (const lines of files) {
    if (lines % numCores === 0) {
      const saveTime = lines - lines / numCores;
      parallelizeFiles.push(saveTime);
    }
    totalTime += lines;
  }
  parallelizeFiles.sort((a, b) => b - a);

  limit = Math.min(limit, parallelizeFiles.length);
  for (let i = 0; i < limit; i++) {
    totalTime -= parallelizeFiles[i];
  }
  return totalTime;
}

var files = [4, 1, 3, 2, 8],
  numCores = 4,
  limit = 1;
var expected = 12;
var result = minTime(files, numCores, limit);
console.log(result, result === expected);

var files = [5, 3, 1],
  numCores = 5,
  limit = 5;
var expected = 5;
var result = minTime(files, numCores, limit);
console.log(result, result === expected);

var files = [3, 1, 5],
  numCores = 1,
  limit = 5;
var expected = 9;
var result = minTime(files, numCores, limit);
console.log(result, result === expected);
