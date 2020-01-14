// var findErrorNums = function(nums) {
//     var len = nums.length
//     nums.sort((a, b)=>{
//         return a-b
//     })
//     var sum1 = (1+len)*len/2
//     var sum2 = 0
//     var item1 = 0
//     var item2 = 0
//     for(let i = 0; i < nums.length; i++){
//         sum2+= nums[i]
//         if(nums[i] === nums[i+1]){
//             item1 = nums[i]
//         }
//     }
//      // 缺失数字 - 重复数字 = sum1 - sum2
//     item2 = item1+sum1-sum2
//     return [item1, item2]
// };

// var findErrorNums = function(nums) {
//     var len = nums.length
//     var obj = {}
//     var sum1 = (1 + len) * len / 2
//     var sum2 = 0
//     var item1 = 0 // 重复数字
//     var item2 = 0 // 缺失数字
//     nums.forEach(item => {
//         sum2 += item
//         if (obj[item]) {
//             item1 = item
//         }else{
//             obj[item] = 1
//         }
//     });
//     // 缺失数字 - 重复数字 = sum1 - sum2
//     item2 = item1 + sum1 - sum2
//     return [item1, item2]
// };

// var findErrorNums = function(nums) {
//     var len = nums.length;
//     let drp = -1;
//     let missing = -1;
//     for (let i = 1; i <= len; i++) {
//         let count = 0;
//         for (let j = 0; j < len; j++) {
//             if (nums[j] == i)
//                 count++;
//         }
//         if (count == 2)
//             drp = i;
//         else if (count == 0)
//             missing = i;
//     }
//     return [drp, missing]
// };

var findErrorNums = function(nums) {
    var len = nums.length
    var xor = 0, xor0 = 0, xor1 = 0;
    for(let i = 0; i < len; i++){
        xor ^= nums[i];
    }
    console.log('xor:', xor);
};



var res = findErrorNums([1, 2, 2, 4])
console.log('res:', res);