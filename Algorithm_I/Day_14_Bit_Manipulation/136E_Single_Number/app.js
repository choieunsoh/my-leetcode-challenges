var singleNumber = function (nums) {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num ^= nums[i];
  }
  return num;
};

console.log(singleNumber([2, 4, 2, 4, 1]));
