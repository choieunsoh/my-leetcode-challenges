const myAtoi = (s) => {
  return myAtoi2(s);
};
const myAtoi2 = (s) => {
  let result = 0;
  const chars = " -+0123456789";
  const signs = " -+";
  let sign = 1;
  let found = false;
  for (let i = 0; i < s.length; i++) {
    if (chars.indexOf(s[i]) === -1) {
      break;
    }
    if (found && signs.indexOf(s[i]) !== -1) {
      break;
    }
    if (s[i] === " ") {
      continue;
    }

    if (s[i] === "-") {
      sign = -1;
    } else if (s[i] === "+") {
      sign = 1;
    } else {
      result = result * 10 + Number(s[i]);
      console.log("A", s[i], result);
    }
    found = true;
  }

  result = sign * result;
  if (result < (-2) ** 31) {
    return (-2) ** 31;
  } else if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else {
    return result;
  }
};
const myAtoi1 = (s) => {
  let result = "";
  let sign = undefined;
  const valid = "-+ 0123456789".split("");
  const numbers = "0123456789".split("");
  for (let x of s) {
    let pos = valid.indexOf(x);
    if (pos === -1) {
      break;
    }
    console.log(x, pos, sign, result);
    if (sign) {
      if (pos < 3) break;
    } else {
      if (pos < 3) {
        if (result.length > 0) break;
        if (pos === 0) sign = -1;
        else if (pos === 1) sign = 1;
      }
    }

    if (numbers.indexOf(x) !== -1) {
      result += x;
    }
  }
  result = (sign || 1) * Number(result);
  if (result < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  } else if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else {
    return result;
  }
};

let s1 = "21474836460";
console.log(s1, myAtoi(s1));
