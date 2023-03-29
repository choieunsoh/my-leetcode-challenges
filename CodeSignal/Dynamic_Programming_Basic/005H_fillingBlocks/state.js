// fillingBlocks
/**
 * @param {number} n
 * @return {number}
 */
function solution(n) {
  if (!n) {
    return 0;
  }
  // 1x2 blocks will be represented as X's and O's.  An X is part of a completed block.
  // An O is an incomplete block.  Possible arrangements when starting a new row, with
  // abbreviated designations, and possible successor states that complete the O's:
  //
  //  X   X-X X-X     X, XL, XC, XR, O
  //  XL  X-X O O     X, XR
  //  XC  O X-X O     X, XS (below)
  //  XR  O O X-X     X, XL
  //  O   O O O O     X
  //
  //  XS/'X split' is a special state that can only be entered from XC/'X center':
  //  XS  X O O X     XC
  let state = {
    X: 1,
    XL: 1,
    XC: 1,
    XR: 1,
    O: 1,
    XS: 0,
  };
  console.log(state);
  for (let i = 2; i <= n; i++) {
    let newState;
    with (state) {
      newState = {
        X: X + XL + XC + XR + O,
        XL: X + XR,
        XC: X + XS,
        XR: X + XL,
        O: X,
        XS: XC,
      };
    }
    state = newState;
    console.log(state);
  }
  return state.X;
}

var n = 1;
var expected = 1;
var result = solution(n);
console.log(result, result == expected);

var n = 4;
var expected = 36;
var result = solution(n);
console.log(result, result == expected);
