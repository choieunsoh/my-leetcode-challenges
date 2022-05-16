const isPalindromeV1 = (x) => {
  if (x <= 10) return false;

  let number = x;
  let digits = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    digits++;
  }

  number = x;
  let L = digits - 1;
  for (let i = 0; i < digits / 2; i++) {
    let A = Math.floor(number / Math.pow(10, L));
    let B = number % 10;
    if (A !== B) return false;

    number = number % Math.pow(10, L);
    number = Math.floor(number / 10);
    L -= 2;
  }
  return true;
};

const isPalindromeV2 = (x) => {
  if (x < 0) return false;
  if (x < 10) return true;

  const nums = x.toString().split("");
  const len = Math.floor(nums.length / 2);
  for (let i = 0; i < len; i++) {
    if (nums[i] !== nums[nums.length - 1 - i]) return false;
  }
  return true;
};

const isPalindromeV3 = (x) => {
  return x === Number(String(x).split("").reverse().join(""));
};

const isPalindrome = (x) => {
  if (x < 0) return false;
  if (x < 10) return true;

  let num = x;
  let mod = 0;

  while (num > 0) {
    mod = (num % 10) + mod * 10;
    num = Math.floor(num / 10);
  }
  return mod === x;
};

let x = 122343221;
console.log(x, isPalindrome(x));
x = 121;
console.log(x, isPalindrome(x));
x = -121;
console.log(x, isPalindrome(x));
x = 0;
console.log(x, isPalindrome(x));
x = 10;
console.log(x, isPalindrome(x));
