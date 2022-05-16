var letterCasePermutation = (s) => {
  const result = [];
  const str = s.toLowerCase().split("");

  const isChar = (s) => !(s >= "0" && s <= "9");

  let q = [];
  const func = (index = 0) => {
    if (q.length === s.length) {
      result.push(q.join(""));
    } else {
      const c = str[index];
      // Lower + Number
      q.push(c);
      func(index + 1);
      q.pop();

      // Upper
      if (isChar(c)) {
        const C = c.toUpperCase();
        q.push(C);
        func(index + 1);
        q.pop();
      }
    }
  };
  func();

  return result;
};
var print = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
var s = "a1b22579CdE";
print(letterCasePermutation(s));
