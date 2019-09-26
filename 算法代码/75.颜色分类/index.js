/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var res = [],len = nums.length
    var idx = 0
    var temp1 = 0
    var temp2 = 0
    var left  = 0,right = nums.length-1
    // nums.forEach(e => {
    //     if(e == 0){
    //         res.unshift(e)
    //         idx++
    //     }else if(e == 2){
    //         res.push(e)
    //     }
    // });
    for(let i = 0; i < len; i++){
        if(nums[i] == 0){
            temp1 = nums[i]
            nums[left] = temp1
            nums[i] = nums[left]
            left++
        }else if(nums[i] == 2){
            temp2 = nums[i]
            nums[right] = temp2
            nums[i] = nums[right]
            right--
        }
    }
    return nums
};

var data = [2,0,2,1,1,0]
var res = sortColors(data)
console.log(res,'res')