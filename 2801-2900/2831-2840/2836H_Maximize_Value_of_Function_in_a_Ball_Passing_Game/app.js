// 2836. Maximize Value of Function in a Ball Passing Game
// https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/
/**
 * @param {number[]} receiver
 * @param {number} k
 * @return {number}
 */
var getMaxFunctionValue = function (receiver, k) {
  const N = 34;
  const n = receiver.length;
  let ia = [];
  let res = [];
  let iaP = [...receiver];
  let resP = [...receiver];
  for (let i = 0; i < n; i++) {
    ia.push(i);
    res.push(i);
  }
  for (let i = 0; i < N; i++) {
    if (checkIthBit64(k, i)) {
      [res, ia] = update(res, resP, ia, iaP);
    }
    resP = updateResP(res, resP, iaP);
    iaP = updateIaP(iaP);
  }
  return Math.max(...res);

  function checkIthBit64(x, i) {
    const s = x.toString(2);
    const n = s.length;
    for (let j = 0; j < n; j++) {
      if (n - j - 1 === i && s[j] === '1') return 1;
    }
    return 0;
  }

  function update(cur, curP, ia, iaP) {
    const n = cur.length;
    const nextRes = [];
    const nextPos = [];
    for (let i = 0; i < n; i++) {
      nextRes.push(cur[i] + curP[ia[i]]);
      nextPos.push(ia[iaP[i]]);
    }
    return [nextRes, nextPos];
  }

  function updateResP(cur, curP, iaP) {
    const n = cur.length;
    const next = [];
    for (let i = 0; i < n; i++) {
      next.push(curP[i] + curP[iaP[i]]);
    }
    return next;
  }

  function updateIaP(iaP) {
    const n = iaP.length;
    const next = [];
    for (let i = 0; i < n; i++) {
      next.push(iaP[iaP[i]]);
    }
    return next;
  }
};

var receiver = [2, 0, 1],
  k = 4;
var expected = 6;
var result = getMaxFunctionValue(receiver, k);
console.log(result, result === expected);

var receiver = [1, 1, 1, 2, 3],
  k = 3;
var expected = 10;
var result = getMaxFunctionValue(receiver, k);
console.log(result, result === expected);
