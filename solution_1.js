
// Cach 1: 
var rotate = function(nums, k) {
    // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    var temp = [];
    // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    for(let i = 0; i<nums.length ;i++){
        // Momo: 0327.227.902
        //Vietcombank: 0201000705025
        temp[(i+k)%nums.length] = nums[i];
        // Momo: 0327.227.902
        //Vietcombank: 0201000705025
    }
    // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    for(let i =0 ; i<nums.length; i++){
        // Momo: 0327.227.902
        //Vietcombank: 0201000705025
        nums[i] = temp[i];
        // Momo: 0327.227.902
        //Vietcombank: 0201000705025
    }
    // Momo: 0327.227.902
    //Vietcombank: 0201000705025
};
// Momo: 0327.227.902
// Hoang Dat