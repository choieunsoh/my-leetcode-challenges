const romanToIntV1 = (s) => {
  const roman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let value = 0;
  let i = s.length - 1;
  let X = "";

  while (i > 0) {
    X = s.substr(i - 1, 2);
    if (roman[X]) {
      i -= 2;
    } else {
      X = s.substr(i, 1);
      i--;
    }
    value += roman[X];
  }
  if (i === 0) value += roman[s[i]];
  return value;
};
const romanToInt = (s) => {
  const roman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let value = 0;
  let X = "";

  for (let i = 0; i < s.length; i++) {
    X = s.substr(i, 2);
    if (roman[X]) {
      i++;
    } else {
      X = s.substr(i, 1);
    }
    value += roman[X];
  }
  return value;
};

let s13 = "MCMXCIV";
console.log(s13, romanToInt(s));
s = "IV";
console.log(s13, romanToInt(s));
s = "LVIII";
console.log(s13, romanToInt(s));
