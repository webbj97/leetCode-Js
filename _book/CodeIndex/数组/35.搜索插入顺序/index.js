// var searchInsert = function(nums, target) {
//     var index = nums.indexOf(target)
//     var left = 0;
//     if(index >=0 ){
//         return index
//     }
//     if(target < nums[0]){
//         return 0
//     }
//     nums.forEach((e,i) => {
//         console.log(e,i)
//         if(e < target){
//             left = i
//         }
//     });
//     return left+1
// };

// var searchInsert = function(nums, target) {
//     var left = 0;
//     var right = nums.length-1
//     if(target > nums[right]) return right+1
//     while(left < right){
//         let mid = Math.floor((left + right)/2)
//         if(nums[mid] == target){
//             return mid
//         }else if(nums[mid] < target){
//             left = mid + 1
//         }else{
//             right = mid
//         }
//     }
//     return left
// };

var searchInsert = function(nums, target) {
    var res = 0,len = nums.length
    if(nums[0] > target){
        return 0
    }
    if(nums[len-1] < target){
        return len
    }
    for(var i = 0; i < len; i++){
        if(nums[i] >= target){
            return i
        }
    }
};
var res = searchInsert([1,3,5,6], 7)

console.log(res)