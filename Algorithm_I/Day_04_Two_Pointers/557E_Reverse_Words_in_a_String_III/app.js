var reverse = (str) => {
  let s = str.split("");
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    const temp = s[r];
    s[r] = s[l];
    s[l] = temp;
    l++;
    r--;
  }
  return s.join("");
};
var reverseWords = function (s) {
  let ss = s.split(" ");
  for (let i = 0; i < ss.length; i++) {
    ss[i] = reverse(ss[i]);
  }
  return ss.join(" ");
};

var s = "God Ding";
console.log(s);
console.log(reverseWords(s));
