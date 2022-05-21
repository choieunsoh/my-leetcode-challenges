const intToRomanV1 = (num) => {
  let result = "";
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (let R in roman) {
    if (num < roman[R]) continue;

    let check = roman[R];
    let n = Math.floor(num / check);
    num %= check;
    while (n > 0) {
      result += R;
      n--;
    }
  }

  return result;
};

const intToRoman = (num) => {
  let result = "";
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (let R in roman) {
    let value = roman[R];
    while (num >= value) {
      num -= value;
      result += R;
    }
  }

  return result;
};

let num = 3;
console.log(num, intToRoman(num));
num = 4;
console.log(num, intToRoman(num));
num = 58;
console.log(num, intToRoman(num));
num = 1994;
console.log(num, intToRoman(num));
