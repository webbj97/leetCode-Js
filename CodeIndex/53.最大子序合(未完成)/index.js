/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var arr = [nums[0]]
    var sum = nums[0], temp = 0
    nums.forEach(e => {
        temp = sum + e
        if(temp > sum){
            arr.push(e)
            sum = temp
        }else{
            
        }
        
        console.log('temp:', temp);
        

        // if(temp > sum){
        //     arr.push(e)
        // }
        // console.log('arr:', arr);
    });
};

var res = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
console.log('结果为:', res);
