// 冒泡
// 两个数比较大小，较大的数下沉，较小的数冒起来
var sortArray = function(nums) {
    var temp = 0
    for(let i = 0;i < nums.length; i++){
        for(let j = 0;j < nums.length - i - 1; j++){
            if(nums[i] < nums[j]){
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
                swit = true
            }
        }
        console.log('nums-:', nums);
    }
    return nums
};


var res = sortArray([5,1,1,2,0,0])
console.log('res:', res);
