var pivotIndex = function(nums) {
    var sum = 0
    var leftsum = 0
    nums.forEach(item => {
        sum+= item
    });
    for(let i = 0; i < nums.length; i++){
        if(leftsum*2 === sum - nums[i]){
            return i;
        }else{
            leftsum+= nums[i]
        }
    }
    return -1
};
var res = pivotIndex([-1,-1,-1,0,1,1])
console.log('res:', res);

// [1, 7, 3, 6, 5, 6]