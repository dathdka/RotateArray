var rotate = function(nums, k) {
    // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    var temp = [];
    // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    var loop = k%nums.length;
    // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    var j = 0;
    // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    for(let i = nums.length - loop ; i<nums.length ;i++){
        // Momo: 0327.227.902
    //Vietcombank: 0201000705025
        temp[j] = nums[i];
        // Momo: 0327.227.902
    //Vietcombank: 0201000705025
        j++;
        // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    }
    // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    for(let i =nums.length - 1 ; i > loop - 1; i--){
        // Momo: 0327.227.902
    //Vietcombank: 0201000705025
        nums[i] = nums[i-loop];
        // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    }
    // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    j = 0;
    // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    for(let i = 0 ; i < loop ; i++){
        // Momo: 0327.227.902
    //Vietcombank: 0201000705025
        nums[i] = temp[i];  
        // Momo: 0327.227.902
    //Vietcombank: 0201000705025
    }
    // Momo: 0327.227.902
    //Vietcombank: 0201000705025
};
