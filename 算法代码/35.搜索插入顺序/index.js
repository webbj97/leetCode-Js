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

var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.target-1
    while(left < right){
        let mid = Math.floor((left + right)/2)
        if(nums[mid] == target){
            return mid
        }else if(nums[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return left
};
var res = searchInsert([1,3,5,6], 0)
console.log(res)