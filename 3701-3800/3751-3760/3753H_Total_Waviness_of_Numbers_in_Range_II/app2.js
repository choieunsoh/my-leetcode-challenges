// 3753. Total Waviness of Numbers in Range II
// https://leetcode.com/problems/total-waviness-of-numbers-in-range-ii/description/
// T.C.: O(D^3 log num2)
// S.C.: O(D^2)
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {
  return solve(num2) - solve(num1 - 1);

  // calculate the sum of the volatility values of all numbers in [0, num]
  function solve(num) {
    // if the number has fewer than 3 digits, the fluctuation value is 0
    if (num < 100) {
      return 0;
    }

    const s = num.toString();
    const n = s.length;
    let currStates = [];
    // digit 10 represents the invalid state when there is a leading zero
    currStates.push({
      prev: 10,
      curr: 10,
      tight: 1,
      lead: 1,
      cnt: 1,
      sum: 0,
    });

    for (let pos = 0; pos < n; ++pos) {
      const limit = parseInt(s[pos]);

      // use a four-dimensional array for temporary storage, dimensions: [tight][lead][prev][curr]
      const cnt = Array(2)
        .fill()
        .map(() =>
          Array(2)
            .fill()
            .map(() =>
              Array(11)
                .fill()
                .map(() => Array(11).fill(0))
            )
        );
      const sumArr = Array(2)
        .fill()
        .map(() =>
          Array(2)
            .fill()
            .map(() =>
              Array(11)
                .fill()
                .map(() => Array(11).fill(0))
            )
        );

      for (const st of currStates) {
        const maxDigit = st.tight ? limit : 9;

        for (let digit = 0; digit <= maxDigit; ++digit) {
          const newLead = st.lead && digit === 0 ? 1 : 0;
          const newPrev = st.curr;
          const newCurr = newLead ? 10 : digit;
          const newTight = st.tight && digit === maxDigit ? 1 : 0;

          let add = 0;
          // calculate fluctuation only when there are three significant digits (both prev and curr are valid and not leading zeros)
          if (!newLead && st.prev !== 10 && st.curr !== 10) {
            if ((st.prev < st.curr && st.curr > digit) || (st.prev > st.curr && st.curr < digit)) {
              add = st.cnt;
            }
          }

          cnt[newTight][newLead][newPrev][newCurr] += st.cnt;
          sumArr[newTight][newLead][newPrev][newCurr] += st.sum + add;
        }
      }

      // collect legal states
      const nextStates = [];
      for (let tight = 0; tight < 2; ++tight) {
        for (let lead = 0; lead < 2; ++lead) {
          for (let prev = 0; prev <= 10; ++prev) {
            for (let curr = 0; curr <= 10; ++curr) {
              const c = cnt[tight][lead][prev][curr];
              const sVal = sumArr[tight][lead][prev][curr];
              // if the current state is valid, proceed to the next round of calculation
              if (c !== 0) {
                nextStates.push({
                  prev,
                  curr,
                  tight,
                  lead,
                  cnt: c,
                  sum: sVal,
                });
              }
            }
          }
        }
      }

      currStates = nextStates;
    }

    // sum of fluctuation values of all valid states
    let ans = 0;
    for (const st of currStates) {
      ans += st.sum;
    }
    return ans;
  }
};

var num1 = 120,
  num2 = 130;
var expected = 3;
var result = totalWaviness(num1, num2);
console.log(result, result === expected);

var num1 = 198,
  num2 = 202;
var expected = 3;
var result = totalWaviness(num1, num2);
console.log(result, result === expected);

var num1 = 4848,
  num2 = 4848;
var expected = 2;
var result = totalWaviness(num1, num2);
console.log(result, result === expected);
