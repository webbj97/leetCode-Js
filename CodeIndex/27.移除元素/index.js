// 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

//不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

//元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

// 第一版本
// var removeElement = function(nums, val) {
//     var idx = nums.indexOf(val)
//     while(idx >= 0){
//         nums.splice(idx, 1)
//         idx = nums.indexOf(val)
//     }
//     return nums.length
// };

// 第二版本
// var removeElement = function(nums, val) {
//     var len = 0
//     for(let i = 0 ; i< nums.length; i++){
//         if(nums[i] != val){
//             nums[len] = nums[i]
//             len++
//         }
//     }
//     return len
// };

//第三版本
var removeElement = function(nums, val) {
    var i = 0
    var n = nums.length //数组长度
    while(i < n){
        if(nums[i] == val){
            nums[i] = nums[n-1]
            n--
        }else{
            i++
        }
    }
    return i
};


var nums = [3,2,2,2], val = 3

removeElement(nums, val)