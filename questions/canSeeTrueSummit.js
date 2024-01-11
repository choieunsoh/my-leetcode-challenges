/**
 *
 * @param {number[]} elevations
 * @returns {boolean}
 */
function canSeeTrueSummit(elevations) {
  let ratio = 0;
  let peak = 0;
  let peakIndex = 0;
  const n = elevations.length;
  for (let i = 1; i < n; i++) {
    const currRatio = elevations[i] / i;
    ratio = Math.max(ratio, currRatio);
    if (elevations[i] > peak) {
      peak = elevations[i];
      peakIndex = i;
    }
  }
  return peak / peakIndex === ratio;
}

console.log(canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 3, 3, 3, 4, 5, 6]) === false);
console.log(canSeeTrueSummit([0, 1, 2, 3, 4, 5]) === true);
console.log(canSeeTrueSummit([0, 2, 3]) === false);
console.log(canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 9, 9, 9, 8, 7, 7]) === false);
console.log(canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7]) === true);
console.log(canSeeTrueSummit([0, 8, 0, 10]) === false);
console.log(canSeeTrueSummit([0, 8, 0, 24]) === true);
console.log(canSeeTrueSummit([0, 8, 0, 23]) === false);
console.log(canSeeTrueSummit([0, 0, 0, 0, 0, 8, 0, 12]) === true);
console.log(canSeeTrueSummit([0, 0, 0, 0, 0, 8, 0, 11]) === false);
