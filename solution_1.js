// Cach 1:
var rotate = function (nums, k) {
  var temp = [];
  for (let i = 0; i < nums.length; i++) {
    temp[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = temp[i];
  }
};