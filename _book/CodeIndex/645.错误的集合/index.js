var findErrorNums = function(nums) {
    var len = nums.length
    nums.sort((a, b)=>{
        return a-b
    })
    var sum1 = (1+len)*len/2
    var sum2 = 0
    var item1 = 0
    var item2 = 0
    for(let i = 0; i < nums.length; i++){
        sum2+= nums[i]
        if(nums[i] === nums[i+1]){
            item1 = nums[i]
        }
    }
     // 缺失数字 - 重复数字 = sum1 - sum2
    item2 = item1+sum1-sum2
    return [item1, item2]
};

var res = findErrorNums([1,1])
console.log('res:', res);
