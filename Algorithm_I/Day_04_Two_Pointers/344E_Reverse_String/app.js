var reverseString = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    const temp = s[r];
    s[r] = s[l];
    s[l] = temp;
    l++;
    r--;
  }
  return s;
};

var s = ["h", "e", "l", "l", "o"];
console.log(s.join(" "));
console.log(reverseString(s).join(" "));
