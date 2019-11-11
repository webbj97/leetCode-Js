/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//     nums = nums.sort((a, b)=>{
//         return a-b
//     })
//     if (nums[nums.length-1] != nums.length) {
//         return nums.length;
//     } else if (nums[0] != 0) {
//         return 0;
//     }
//     var arr = []
//     for(let i = 1; i < nums.length; i++){
//         let temp = nums[i-1]+1
//         if(nums[i] !== temp){
//             return temp
//         }
//     }
// };

// var missingNumber = function(nums) {
//     var obj = {}
//     for(let i = 0; i < nums.length; i++){
//         obj[nums[i]] = 1
//     }
//     for(let i = 0; i < nums.length + 1; i++){
//         if(!obj[i]){
//             return i
//         }
//     }
//     return -1
// };

// var missingNumber = function(nums) {
//     let missing = nums.length;
//     for (let i = 0; i < nums.length; i++) {
//         missing ^= i ^ nums[i];
//     }
//     return missing;
// }

var missingNumber = function(nums) {
    var len = nums.length
    var sum = len*(len+1)/2
    var res = 0
    for(let i = 0; i < len; i++){
       res += nums[i]
    }
    return sum-res
}

var res = missingNumber([3, 0, 1])
console.log('res:', res);