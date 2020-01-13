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

var findDuplicate = function(nums) {
    var tortoise = nums[0];
    var hare = nums[0];
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise != hare);
    
    var ptr1 = nums[0];
    var ptr2 = tortoise;
    while (ptr1 != ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }
    return ptr1;
};

var res = findDuplicate([1, 2, 3, 4, 5, 6, 7, 7])
console.log('res:', res);