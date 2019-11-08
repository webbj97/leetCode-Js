/**
 * @param {number[]} nums
 * @return {boolean}
 */

// var containsDuplicate = function(nums) {
//     var res = true
//     var len = nums.length
//     var arr = []
//     if(len === 0 || len === 1){
//         return false
//     }
//     for(let i = 0; i < nums.length; i++){
//         arr = nums.slice(i+1)
//         if(arr.indexOf(nums[i]) != -1){
//             return true
//         }
//     }
//     return false
// };

// var containsDuplicate = function(nums) {
//     nums = nums.sort((a, b)=>{
//         return a-b
//     })
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] == nums[i+1]){
//             return true
//         }
//     }
//     return false
// };

// var containsDuplicate = function(nums) {
//     var hash = {}
//     for(let i = 0; i < nums.length; i++){
//         if(hash[nums[i]]){
//             return true
//         }else{
//             hash[nums[i]] = 1
//         }
//     }
//     return false
// };

var containsDuplicate = function(nums) {
    return !(new Set(nums).size === nums.length)
};


var res = containsDuplicate([0, 1])
// console.log('res:', res);