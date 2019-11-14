var majorityElement = function(nums) {
    var obj = {}
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]]++
        }else{
            obj[nums[i]] = 1
        }
    }
    var max = 0, res = nums
    for(var key in obj){
        if(obj[key] > max) {
            max = obj[key]
            res = key
        }
    }
    return res
};

var res = majorityElement([2,2,1,1,1,2,2])
console.log('res:', res);
