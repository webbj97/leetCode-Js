/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-01-06 18:49:25
 */
// var findDuplicate = function(nums) {
//     var res = ''
//     nums.forEach((item, index) => {
//         if (nums.indexOf(item) !== index) {
//             res = item
//         }
//     })
//     return res
// };

// var findDuplicate = function(nums) {
//     nums = nums.sort((a, b )=>{
//         return a-b
//     })
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === nums[i+1]){
//             return nums[i]
//         }
//     }
// };

// var findDuplicate = function(nums) {
//     var obj = {}
//     for(let i = 0; i < nums.length; i++){
//         if(obj[nums[i]]){
//             return nums[i]
//         }else{
//             obj[nums[i]] = 1
//         }
//     }
// };

// var findDuplicate = function(nums) {
//     var tortoise = nums[0];
//     var hare = nums[0];
//     do {
//         tortoise = nums[tortoise];
//         hare = nums[nums[hare]];
//     } while (tortoise != hare);

//     var ptr1 = nums[0];
//     var ptr2 = tortoise;
//     while (ptr1 != ptr2) {
//         ptr1 = nums[ptr1];
//         ptr2 = nums[ptr2];
//     }
//     return ptr1;
// };

var findDuplicate = function(nums) {
    var sum1 = 0
    nums.forEach(item =>{
        sum1 += item
    })
    var sum2 = 0
    for(let i = 1;i <= nums.length-1; i++){
        sum2 += i
    }
    return sum1 - sum2
};

var res = findDuplicate([1, 2, 3, 4, 5, 6, 7, 7])
console.log('res:', res);