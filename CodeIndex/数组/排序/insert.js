var insertSort = function (nums) {
    var temp = 0
    for(let i = 0; i < nums.length-1; i++){
        for(let j = i+1; j >=0; j--){
            if(nums[j] < nums[j-1]){
                temp = nums[j-1]
                nums[j-1] = nums[j]
                nums[j] = temp
            }
        }
    }
    return nums
}
insertSort([5,2,3,1])