// var moveZeroes = function(nums) {
//     //todo 冒泡的变种方式实现
//     let right = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (i + 1 > right) {
//             right = i + 1;
//         }
//         if (nums[i] == 0) {
//             while (nums[right] == 0 && right < nums.length) { //找到非0的下一个数字然后交换
//                 right++;
//             }
//             if (right >= nums.length) {
//                 break;
//             }
//             let middle = nums[i];
//             nums[i] = nums[right];
//             nums[right] = middle;
//             right++;
//         }
//     }
// };

// var moveZeroes = function(nums) {
//     var zeroCount = 0
//     var res = []
//     for(let i = 0; i < nums.length; i++){
//         zeroCount += (nums[i] === 0);
//     }
//     for(let i = 0; i < nums.length; i++){
//         if (nums[i] != 0) {
//             res.push(nums[i]);
//         }
//     }
//     while(zeroCount--){
//         res.push(0)
//     }
//     return res
// }
var moveZeroes = function(nums) {
    var left = 0
    nums.forEach(item => {
        if(item !== 0){
            nums[left] = item
            left++
        }
    });
    for(; left < nums.length; left++){
        nums[left] = 0
    }
    return nums
}

var res = moveZeroes([0,1,0,3,12])

console.log('res:', res);
