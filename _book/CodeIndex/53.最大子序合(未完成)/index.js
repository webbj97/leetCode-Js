/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var temp = nums[0]
    var sum = 0
    for(let i = 0; i < nums.length; i++){
        if(sum > 0){
            sum += nums[i]
        }else{
            sum = nums[i]
        }
        temp = Math.max(temp, sum),//维护最大的和或再大的值
    }
    return temp
};

var res = maxSubArray([-2,1,-3,4,-1,2,1])
console.log('结果为:', res);

