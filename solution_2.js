var rotate = function (nums, k) {
  var temp = [];
  var loop = k % nums.length;
  var j = 0;
  for (let i = nums.length - loop; i < nums.length; i++) {
    temp[j] = nums[i];
    j++;
  }
  for (let i = nums.length - 1; i > loop - 1; i--) {
    nums[i] = nums[i - loop];
  }
  for (let i = 0; i < loop; i++) {
    nums[i] = temp[i];
  }
};
